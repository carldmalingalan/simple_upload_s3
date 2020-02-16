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
      if (!err) {
        console.log(`Connected successfully into MongoDB`);
      }
    }
  );
};
