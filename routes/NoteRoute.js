const express = require('express');
const noteRouter = express.Router();

const NoteRepository = require('../repository/NoteRepository');
const NoteService = require('../services/NoteService');
const NoteController = require('../controllers/NoteController');

const noteRepository = new NoteRepository();
const noteService = new NoteService(noteRepository);
const noteController = new NoteController(noteService);

noteRouter.post('/', noteController.create.bind(noteController));
noteRouter.put('/', noteController.update.bind(noteController));
noteRouter.delete('/:id', noteController.delete.bind(noteController));
noteRouter.get('/', noteController.findAll.bind(noteController));
noteRouter.patch('/sumarize/:id', noteController.createSumarize.bind(noteController));
noteRouter.get('/:id', noteController.findById.bind(noteController));


module.exports = noteRouter