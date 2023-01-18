import * as express from "express";

const app = express();
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello Prototype");
})
app.use("/", router);

const server = app.listen("8080");
console.log(`server up`)