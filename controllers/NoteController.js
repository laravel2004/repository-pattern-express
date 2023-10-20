class NoteController {
  constructor(noteService) {
    this.noteService = noteService;
  }

  create = async (req, res) => {
    try {
      const note = await this.noteService.create(req.body);
      res.status(201).json(note);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  update = async (req, res) => {
    try {
      const note = await this.noteService.update(req.params.id, req.body);
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  delete = async (req, res) => {
    try {
      const note = await this.noteService.delete(req.params.id);
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  findAll = async (req, res) => {
    try {
      const notes = await this.noteService.findAll();
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  createSumarize = async (req, res) => {
    try {
      const id = req.params.id;
      const note = await this.noteService.createSumarize(id);
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  findById = async (req, res) => {
    try {
      const id = req.params.id;
      const note = await this.noteService.findById(id);
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = NoteController;