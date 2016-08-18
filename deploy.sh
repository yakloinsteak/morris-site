bundle exec middleman build
aws s3 sync --region=us-east-1 --profile blackman build/ s3://windhamsite/ --delete
