import notes from "../../db/db.js"

export const getNotesV2 = (req, res) => {
  console.log(notes)
  res.send(notes)
}