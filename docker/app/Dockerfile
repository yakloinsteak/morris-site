FROM ruby:3.0-slim-buster
ARG USER_ID=1001
ARG GROUP_ID=1001
ARG BUNDLER_VERSION=2.4.12

RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
  libssl-dev libffi-dev build-essential curl

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
CMD ["bundle", "exec", "jekyll", "serve", "--livereload", "--host=0.0.0.0"]

USER app-user

RUN bundle config set --local path /bundle \
    && bundle
