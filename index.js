import express from "express";
import { v4 as uuidV4 } from "uuid";

const app = express()
const PORT = 3000

app.use(express.json())

/* Structure of a note in notes is like this: */
/*
{
   id: uuidV4(),
   title: String,
   content: String,
   isDraft: Boolean
}
*/
let notes = []

app.get("/", (req, res) => {
  res.send("Hello from Noter.")
})

app.get("/notes", (req, res) => {
  res.send("All notes.")
})

app.listen(PORT, () => {
  console.log("Server is runnint on port ", PORT)
})