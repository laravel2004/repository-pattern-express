const {PrismaClient} = require('@prisma/client');

class NoteRepository {
  constructor() {
    this.client = new PrismaClient();
  }

  create = async (data) => {
    try {
      const {title, userId, note} = data
      const create = await this.client.note.create({
        data: {
          createdAt: new Date(),
          title : title,
          userId :  userId,
          note : note,
        }
      });
      return create;
    } catch (error) {
      throw error;
    }
  }

  update = async (id, data) => {
    try {
      const {title, note} = data
      const update = await this.client.note.update({
        where: {
          id: id
        },
        data: {
          note : note,
          title : title
        }
      });
      return update;
    } catch (error) {
      throw error;
    }
  }

  delete = async (id) => {
    try {
      const deleteNote = await this.client.note.delete({
        where: {
          id: id
        }
      });
      return deleteNote;
    } catch (error) {
      throw error;
    }
  }

  createSumarize = async (data, id) => {
    try {
      const update = await this.client.note.update({
        where: {
          id: id
        },
        data: {
          summarized : data
        }
      })
      return update
    } catch (error) {
      throw error;
    }
  }

  findAll = async () => {
    try {
      const notes = await this.client.note.findMany();
      return notes;
    } catch (error) {
      throw error;
    }
  }

  findById = async (id) => {
    try {
      const note = await this.client.note.findUnique({
        where: {
          id: id
        }
      });
      return note;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = NoteRepository;