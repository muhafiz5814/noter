import express from "express";
import { v4 as uuidV4 } from "uuid";

const app = express()
const PORT = 3000

app.use(express.urlencoded())
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
  res.send(notes)
})

app.post("/notes", (req, res) => {
  const note = req.body
  notes.push({id: uuidV4(), ...note})
  res.send(`Added a note with title "${note.title}"`)
})

app.get("/notes/:id", (req, res) => {
  const { id } = req.params
  const note = notes.find((note) => note.id === id)
  res.send(note)
})

app.delete("/notes/:id", (req, res) => {
  const { id } = req.params
  notes = notes.filter((note) => note.id != id)
  res.send(`Note with id ${id} deleted successfully.`)
})

app.listen(PORT, () => {
  console.log("Server is runnint on port ", PORT)
})