import e from "express";
import cors from "cors"

const app = e()

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.listen(3000, () => {
    console.log("express server is running")
})