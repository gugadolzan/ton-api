import express from "express";

import ProductRouter from "./routes/Product";

const app = express();
const PORT = 3000;

app.use("/", ProductRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
