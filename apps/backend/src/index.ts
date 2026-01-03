import e from "express";
import cors from "cors"
import { usersTable } from "./db/schema";
import { db } from "./db";

const app = e()

app.use(cors())
app.use(e.json())

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.post("/users", async (req, res) => {
    const { name, age, email } = req.body
    const user: typeof usersTable.$inferInsert = {
        name,
        age,
        email,
    };
    await db.insert(usersTable).values(user);
    const users = await db.select().from(usersTable);
    return res.json(users)
})

app.listen(3000, () => {
    console.log("express server is running")
})