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

app.get("/v1/", (req, res) => {
  res.send("Hello from Noter.")
})

app.get("/v2/notes", (req, res) => {
  console.log(notes)
  res.send(notes)
})

app.get("/v1/notes", (req, res) => {
  res.send(notes)
})

app.post("/v1/notes", (req, res) => {
  const note = req.body
  notes.push({id: uuidV4(), ...note})
  res.send(`Added a note with title "${note.title}"`)
})

app.get("/v1/notes/:id", (req, res) => {
  const { id } = req.params
  const note = notes.find((note) => note.id === id)
  res.send(note)
})

app.delete("/v1/notes/:id", (req, res) => {
  const { id } = req.params
  notes = notes.filter((note) => note.id != id)
  res.send(`Note with id ${id} deleted successfully.`)
})

app.patch("/v1/notes/:id", (req, res) => {
  const {id} = req.params
  const {title, content, isDraft} = req.body
  const note = notes.find(note => note.id == id)

  // These will be able to change the value in original notes array as note is an object, and it stores the reference to the original object stored in array, hence we can directly update the original array object content using the node variable
  if(title) note.title = title
  if(content) note.content = content
  if(isDraft) note.isDraft = isDraft

  res.send(`Updated ${id} with ease.`)
})

app.listen(PORT, () => {
  console.log("Server is runnint on port ", PORT)
})