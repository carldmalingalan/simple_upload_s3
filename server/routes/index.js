import FileRouter from "./file";

export default app => {
  app.use("/file", FileRouter);
};
