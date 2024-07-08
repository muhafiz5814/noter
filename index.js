import express from "express";
import { getNotes, createNote, getNoteById, deleteNote, updateNote } from "./controllers/v1/notes.js";
import { getNotesV2 } from "./controllers/v2/notes.js";

const app = express()
const PORT = 3000

app.use(express.urlencoded())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello from Noter.")
})

app.get("/v2/notes", getNotesV2)

app.get("/v1/notes", getNotes)

app.post("/v1/notes", createNote)

app.get("/v1/notes/:id", getNoteById)

app.delete("/v1/notes/:id", deleteNote)

app.patch("/v1/notes/:id", updateNote)

app.listen(PORT, () => {
  console.log("Server is runnint on port ", PORT)
})