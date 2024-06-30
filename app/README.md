# HTML Greeting Card Generator

Our company has a HTML Greeting Card Generator service that allows users to send a name and custom message to an API, and get a personalised greeting card back. The company has massive plans for this service and wants to ensure developers are able to work on this service with a fully containerised local environment. Currently, the service runs on Node.js and connects directly to Amazon S3.

## Getting started
1. Run `npm install` to install the dependencies
2. Upload templates to an S3 bucket.

## Running the app

Set environment variables for AWS credentials and the S3 bucket, and then start
the app.

```shell
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...
export AWS_SESSION_TOKEN=...
export S3_BUCKET_NAME=...
export S3_FILE_KEY_DEFAULT_TEMPLATE=standard.html

npm run start
```

You can then call the API:
```shell
curl localhost:3000/generate-card \
    -X POST \
    -H 'Content-Type: application/json' \
    -d '{"name":"Harry","message":"Happy Holidays!"}'

```


## Instructions for the assignment

We would like you to:
  * containerise the application so that it builds and runs using Docker and Docker Compose
  * For local development have the application use LocalStack for S3
  * Keep a log of all changes you've made explaining why

Details on localstack can be found here: https://github.com/localstack/localstack


