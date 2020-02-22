# File Uploading using AWS S3

This is a simple **REST API** that aim to expose begineers in practice using AWS (_Amazon Web Services_) S3 in uploading files.

## Installation

Assuming you already have you AWS Account setup. (_If not, please set it up free tier will do_)

- Create an IAM (_Identity and Access Management_) user that has a full access into S3 service.

![S31](https://i.imgur.com/RmxMvGx.png)
![S32](https://i.imgur.com/ExOgKhS.png)

- Then create a secret key specific to the IAM User.

![Imgur](https://i.imgur.com/G0AUKVd.png)

- Create a `.env` file in the top level directory.

```bash
$ nano .env
```

and on inside provide the followings.

```shell
PORT=5000
MongoURI=mongodb://localhost/upload_s3
aws_access_key=<Access Key>
aws_secret_key=<Secret Key>
s3_bucket=<S3 Bucket Name>
```

- Lastly run `start:dev` in your terminal to run the API.

```bash
$ npm install
$ npm run start:dev
```
