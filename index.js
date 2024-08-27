const cors = require("cors");
const express = require('express');
const app = express();
const port = 2000;
app.use(cors());
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);