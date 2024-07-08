import notes from "../../db/db.js";
import { v4 as uuidV4 } from "uuid";
import validator from "express-validator"
const {validationResult} = validator

export const getNotes = (req, res) => {
  res.send(notes)
}

export const createNote = (req, res) => {
  const errors = validationResult(req)
  
  if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()})

  const note = req.body
  notes.push({id: uuidV4(), ...note})
  res.send(`Added a note with title "${note.title}"`)
}

export const getNoteById = (req, res) => {
  const { id } = req.params
  const note = notes.find((note) => note.id === id)
  res.send(note)
}

export const deleteNote = (req, res) => {
  const { id } = req.params
  // As we are importing the array from db, we can not re-assign it, so we can not use filter here as we need to re-assign the new array to it.
  // What we can do is, we can mutate the existing array, that's why we are using the findIndex and splice methods to perform the task in place.
  const i = notes.findIndex(note => note.id === id)
  notes.splice(i, 1)
  res.send(`Note with id ${id} deleted successfully.`)
}

export const updateNote = (req, res) => {
  const {id} = req.params
  const {title, content, isDraft} = req.body
  const note = notes.find(note => note.id == id)
  console.log(isDraft)
  // These will be able to change the value in original notes array as note is an object, and it stores the reference to the original object stored in array, hence we can directly update the original array object content using the node variable
  if(title) note.title = title
  if(content) note.content = content
  if(isDraft) note.isDraft = isDraft

  res.send(`Updated ${id} with ease.`)
}