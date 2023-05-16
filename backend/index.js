const express = require("express");
const cors = require("cors");

const connectDB = require ("./config/db");

connectDB ();

var app = express();
app.use(express.json());
app.use(cors());

app.use("/api/login", require("./routes/login"));
app.use("/api", require("./routes/cards"));

app.listen(5000, function () {
  console.log("Servidor arrancado en el puerto 5000!");
});

if(process.env.NODE_ENV === "production") {
  app.use(express.static("../frontend/build"));
  app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}