import { Schema, model } from "mongoose";

const FileSchema = new Schema(
  {
    filename: { type: String },
    fileExt: { type: String, index: true },
    fileSize: { type: String },
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "file_details" }
);

export default () => model("FileModel", FileSchema);
