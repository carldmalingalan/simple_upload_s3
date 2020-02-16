import { SimpleUpload } from "../helpers/s3";

export const upload = (req, res) => {
  try {
    const { filepath } = req.body;
    console.log(filepath);
    SimpleUpload(filepath);
    res.status(200).json({ status: "working" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "error", data: error });
  }
};
