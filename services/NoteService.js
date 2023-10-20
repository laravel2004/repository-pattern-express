const { response } = require('express');
const {OpenAI} = require('openai')

class NoteService {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
  }

  create(data) {
    try {
      const note = this.noteRepository.create(data);
      return note;
    } catch (error) {
      throw error;
    }
  }

  update(id, data) {
    try {
      const note = this.noteRepository.update(parseInt(id), data);
      return note;
    } catch (error) {
      throw error;
    }
  }

  delete(id) {
    try {
      const note = this.noteRepository.delete(parseInt(id));
      return note;
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    try {
      const notes = this.noteRepository.findAll();
      return notes;
    } catch (error) {
      throw error;
    }
  }

  findById(id) {
    try {
      const data = this.noteRepository.findById(parseInt(id));
      return data;
    } catch (error) {
      throw error;
    }
  }

  createSumarize = async (id) => {
    try {
      const data = await this.noteRepository.findById(parseInt(id));
      const sumarize = await this.sumarize(data.note);
      const response = await this.noteRepository.createSumarize(sumarize.choices[0].text, parseInt(id));
      return response
    }
    catch (error) {
      throw error;
    }
  }

  sumarize = async(data) => {
    try{
      const response = await this.openai.completions.create({
        model: 'text-davinci-003',
        prompt: `Ringkaslah dengan ringkas : ${data}`,
        max_tokens: 1000
      })
      return response
    }
    catch (error) {
      throw error;
    }
  }

}

module.exports = NoteService