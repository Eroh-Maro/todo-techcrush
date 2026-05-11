import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import todoRouter from "./routes/todoRoute.js";


const app = express();
const port = 3000;

const live_url = "mongodb+srv://maroUserDB:yaQy3jxQphoPH8Eq@cluster0.arxfupc.mongodb.net/?appName=Cluster0"

app.use(express.json())
app.use(cors())

app.use("/todo", todoRouter);

mongoose.connect(live_url)
.then(() => console.log("mongodb connected"))
.catch(err => console.error("connection Error:", err));

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})