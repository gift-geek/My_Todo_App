require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const router = require("./routes/todoRoutes");
const live_url = process.env.LIVE_URL;
const local_url = process.env.LOCAL_URL;
mongoose.connect(local_url)
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.error("Connection error",err));

const app =express();
app.use(cors());
app.use(express.json());
app.use("/todos", router);

app.get("/", (req,res)=> {
    res.send("Hello World");
});
port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
