import { ServerRoute } from "@hapi/hapi";
import { S3_BUCKET_NAME, S3_FILE_KEY_DEFAULT_TEMPLATE } from "../config";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  endpoint: 'http://localstack:4566',
  forcePathStyle: true,
  region: 'us-east-1'
});

export const generateCard: ServerRoute["handler"] = async (request, h) => {
  const { name, message } = request.payload as {
    name: string;
    message: string;
  };

  const { Body } = await s3Client.send(
    new GetObjectCommand({
      Bucket: S3_BUCKET_NAME,
      Key: S3_FILE_KEY_DEFAULT_TEMPLATE,
    })
  );
  if (!Body) {
    throw new Error("Template not found");
  }

  const template = await Body?.transformToString();

  const card = template
    .replaceAll("{{name}}", name)
    .replaceAll("{{message}}", message);

  return {
    card,
  };
};
