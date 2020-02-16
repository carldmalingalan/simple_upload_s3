import * as AWS from "aws-sdk";
import { createReadStream } from "fs";
import * as path from "path";

AWS.config.update({
  accessKeyId: process.env.aws_access_key,
  secretAccessKey: process.env.aws_secret_key
});

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  endpoint: `https://${process.env.s3_bucket}.s3-ap-southeast-1.amazonaws.com`
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

  s3.putObject(config, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("This is the data => ", data);
    }
  });

  s3.upload(config, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("This is the data => ", data);
    }
  });
};
