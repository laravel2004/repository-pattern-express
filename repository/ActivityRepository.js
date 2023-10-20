const {PrismaClient} = require('@prisma/client')

class ActivityRepository {
  constructor(){
    this.client = new PrismaClient();
  }

  create = async (data) => {
    try {
      const {title, userId} = data;
      const activity = await this.client.activity.create({
        data: {
          title : title,
          userId :  userId
        }
      })
      return activity
    } catch (error) {
      throw error
    }
  }

  update = async (id, data) => {
    try {
      const activity = await this.client.activity.update({
        where: {
          id: id
        },
        data: data
      })
      return activity
    } catch (error) {
      throw error
    }
  }

  delete = async (id) => {
    try {
      const activity = await this.client.activity.delete({
        where: {
          id: id
        }
      })
      return activity
    } catch (error) {
      throw error
    }
  }

  findAll = async () => {
    try {
      const activities = await this.client.activity.findMany()
      return activities
    } catch (error) {
      throw error
    }
  }

  findByUserId = async (userId) => {
    try {
      const activities = await this.client.activity.findMany({
        where: {
          userId : userId
        }
      })
      return activities
    } catch (error) {
      throw error
    }
  }

  findById = async (id) => {
    try {
      const activity = await this.client.activity.findUnique({
        where: {
          id: id
        }
      })
      return activity
    }
    catch (error) {
      throw error
    }
  }
}

module.exports = ActivityRepository;