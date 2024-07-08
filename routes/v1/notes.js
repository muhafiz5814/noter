import { getNotes, createNote, getNoteById, deleteNote, updateNote } from "../../controllers/v1/notes.js";

import { Router } from "express";

const router = Router()

router.get("/", getNotes)

router.post("/", createNote)

router.get("/:id", getNoteById)

router.delete("/:id", deleteNote)

router.patch("/:id", updateNote)

export default router