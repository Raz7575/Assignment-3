

require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();


connectDB();


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");


const assignmentRoutes = require("./routes/assignments");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/assignments", assignmentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
