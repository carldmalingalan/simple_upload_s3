import * as AWS from "aws-sdk";
import { createReadStream } from "fs";
import * as path from "path";
import "dotenv/config";

AWS.config.update({
  accessKeyId: process.env.aws_access_key,
  secretAccessKey: process.env.aws_secret_key,
  region: "ap-southeast-1"
});

const s3 = new AWS.S3({
  apiVersion: "2006-03-01"
});

let config = {
  Bucket: process.env.s3_bucket
};

export const SimpleUpload = filepath => {
  config = {
    ...config,
    Bucket: process.env.s3_bucket,
    Body: createReadStream(filepath),
    Key: `folder/${Date.now()}_${path.basename(filepath)}`
  };
  console.log("This is the config -> ", config);

  s3.upload(config, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("This is the data => ", data);
    }
  });
};
