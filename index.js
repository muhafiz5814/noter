import express from "express";

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello from Noter.")
})

app.get("/notes", (req, res) => {
  res.send("All notes.")
})

app.listen(PORT, () => {
  console.log("Server is runnint on port ", PORT)
})