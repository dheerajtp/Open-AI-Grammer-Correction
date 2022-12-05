import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

import route from "./route/";

const PORT = process.env.PORT || 5000;
const app = express();

route(app);

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
