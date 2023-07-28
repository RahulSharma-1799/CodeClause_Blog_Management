import express from "express";
import connectToMongo from "./db.js";
import route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

connectToMongo();
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
