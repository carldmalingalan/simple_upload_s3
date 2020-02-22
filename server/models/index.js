import { connect } from "mongoose";

export default () => {
  connect(
    process.env.MongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    },
    err => {
      console.log(err ? err : "Connected to MongoDB");
    }
  );
};
