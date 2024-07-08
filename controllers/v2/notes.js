import notes from "../../db/db.js"

export const getNotes = (req, res) => {
  console.log(notes)
  res.send(notes)
}