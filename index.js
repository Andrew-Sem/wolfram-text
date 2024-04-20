const dotenv = require("dotenv");
dotenv.config();

const WolframAlphaAPI = require("@wolfram-alpha/wolfram-alpha-api");
const waApi = WolframAlphaAPI(process.env.WOLFRAM_APP_ID);

const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  waApi
    .getFull("sin(x)")
    .then((queryresult) => {
      res.send(queryresult);
    })
    .catch(console.error);
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
