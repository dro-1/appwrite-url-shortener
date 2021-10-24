require("dotenv").config();
const express = require("express");
const urlController = require("./controllers/url");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.post("/", urlController.createLink);

app.get("/:uniqueId", urlController.getLink);

const PORT = process.env.port || 3001;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
