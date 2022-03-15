import express from "express";

import ProductRouter from "./routes/Product";

const app = express();

app.use("/", ProductRouter);

export default app;
