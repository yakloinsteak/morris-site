FROM ruby:3.0-slim-buster AS build
ARG USER_ID=1001
ARG GROUP_ID=1001
ARG BUNDLER_VERSION=2.4.12

RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
  libssl-dev libffi-dev build-essential curl socat

RUN mkdir /app /bundle
WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN groupadd -g ${GROUP_ID} -r app-user \
  && useradd -m -r -u ${USER_ID} -g app-user app-user \
  && gem install bundler --version=${BUNDLER_VERSION} \
  && chown -R app-user:app-user . /bundle

COPY docker/app/entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["bundle", "exec", "jekyll", "serve", "--livereload"]

USER app-user

RUN bundle config set --local path /bundle \
    && bundle

COPY --chown=app-user:app-user . .

RUN bundle exec jekyll build

RUN bin/make.local

FROM nginx:latest AS serve

COPY --from=build /app/_site /usr/share/nginx/html
COPY docker/app/morris.conf /etc/nginx/conf.d
RUN rm /etc/nginx/conf.d/default.conf
