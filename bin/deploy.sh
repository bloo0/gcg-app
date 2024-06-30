#!/bin/bash

bucket_name="demo"
endpoint_url="http://localhost:4566"

if aws s3 ls "s3://$bucket_name" --endpoint-url="$endpoint_url" 2>&1 | grep -q 'NoSuchBucket'; then
    echo "Bucket $bucket_name does not exist. Creating..."
    aws s3 mb "s3://$bucket_name" --endpoint-url="$endpoint_url"
    echo 'Bucket Created.'
else
    echo "Bucket $bucket_name already exists."
fi

aws s3 cp ./app/templates/standard.html "s3://$bucket_name/standard.html" --endpoint-url="$endpoint_url"
echo 'Template upload complete.'