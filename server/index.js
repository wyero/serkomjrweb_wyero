const express = require("express");
const cors = require( "cors");
const Route = require("./routes/Route.js");
const fileUpload = require("express-fileupload");

const app = express();
const PORT = 8000;

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(fileUpload());
app.use(Route);

app.use(express.json());
app.listen(PORT, () => {
  console.log("server running");
});
