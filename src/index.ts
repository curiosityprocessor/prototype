import * as express from "express";
import router from "@src/router";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/", router);

const server = app.listen("8080");
console.log(`server up`)