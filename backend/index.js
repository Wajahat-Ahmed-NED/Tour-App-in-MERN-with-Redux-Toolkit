import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from "./routes/user.js"

const port = 5000

const app = express()
app.use(morgan("start"))
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use("/users", userRouter)

const mongo_db_url = "mongodb+srv://wajahat:Waja123%21%40%23@cluster0.litlj.mongodb.net/tour-app?retryWrites=true&w=majority"


mongoose.connect(mongo_db_url).then(() => app.get("/", (req, res) => {
        res.send("Hello Express")
})
)
        .catch(error => console.log(`${error} could not connect`))

app.listen(port, () => console.log(`server listening on port, ${port}`))