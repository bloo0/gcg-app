# gcg-app (for macOS only)

## PRE-REQUIREMENTS:
- Docker Desktop
- Localstack CLI (mac): `brew install localstack/tap/localstack-cli`
- Localstack Account (Demo License only)
- Node

## HOW TO RUN:
1. Review docker-compose.yaml file, modify env vars if necessary.
2. Start docker containers, run the following command to initialize:
    `docker compose up --build -d`

3. Create the bucket and copy template, run the following command:
    ```shell
    chmod +x bin/deploy.sh
    bash bin/deploy.sh
    ```

4. Test the api:
    ```shell
    curl localhost:3000/generate-card \
        -X POST \
        -H 'Content-Type: application/json' \
        -d '{"name":"Harry","message":"Happy Holidays!"}'
    ```

## HOW TO CLOSE APP:
1. Run the following command: `docker compose down`


## Encountered Issues / Changes Made:
1. Error: Unable to call API via container.\
   Solution:
   - Change from 'localhost' to '0.0.0.0' in index file (value should be string) - specific purpose related to how services are accessed within containers and from the host machine.
   - Created a healthcheck endpoint for initial checks: `curl -vvv localhost:3000/`

2. Error: App unable to reach localstack.\
   Solution:
   - Add localstack endpoint in s3Client configuration: `endpoint: 'http://localstack:4566'` - For service discovery within docker containers.

3. Error: getaddrinfo ENOTFOUND demo.localstack\
   Solution:
   - Update s3Client configuration: `forcePathStyle: true` - Removes the automatically added ".localhost" after the bucket name and using the correct URI to reach localstack.