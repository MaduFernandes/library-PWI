import express from "express";
import Router from "./Router";
import * as bodyParser from "body-parser";

const app = express();

app.set("port", 3000);

app.use(bodyParser.json());

app.use(Router);

app.listen(app.get("port"), () => {
  console.log("App listening on the port", app.get("port"));
});
