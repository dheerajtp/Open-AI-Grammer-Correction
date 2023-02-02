import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import route from "./route/";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
route(app);

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
