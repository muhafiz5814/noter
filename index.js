import express from "express";
import notesRoutesV1 from "./routes/v1/notes.js"
import notesRoutesV2 from "./routes/v2/notes.js"

const app = express()
const PORT = 3000

app.use(express.urlencoded())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello from Noter.")
})

app.use("/v1/notes", notesRoutesV1)
app.use("/v2/notes", notesRoutesV2)

app.listen(PORT, () => {
  console.log("Server is runnint on port ", PORT)
})