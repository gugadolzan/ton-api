import express from "express";

import ProductRouter from "./routes/Product";
import error from "./middlewares/error";

const app = express();

app.use("/", ProductRouter);

app.use(error);

export default app;
