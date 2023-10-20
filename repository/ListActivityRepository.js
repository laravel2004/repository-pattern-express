const {PrismaClient} = require('@prisma/client');

class ListAvtivityRepository {
  constructor() {
    this.client = new PrismaClient();
  }

  create = async (data) => {
    try{
      const {list, activityId} = data
      const listActivity = await this.client.listActivity.create({
        data: {
          list : data,
          activityId : activityId
        }
      })
      return listActivity
    }
    catch(error){
      throw error
    }
  }

  update = async (id, data) => {
    try{
      const listActivity = await this.client.listActivity.update({
        where: {
          id: id
        },
        data: data
      })
      return listActivity
    }
    catch(error){
      throw error
    }
  }

  delete = async (id) => {
    try{
      const listActivity = await this.client.listActivity.delete({
        where: {
          id: id
        }
      })
      return listActivity
    }
    catch(error){
      throw error
    }
  }

  findAll = async () => {
    try{
      const lsitActivity = await this.client.listActivity.findMany()
      return lsitActivity
    }
    catch(error){
      throw error
    }
  }

  findByActivityId = async (activityId) => {
    try{
      const listActivity = await this.client.listActivity.findMany({
        where: {
          activityId: activityId
        }
      })
      return listActivity
    }
    catch(error){
      throw error
    }
  }

}

module.exports = ListAvtivityRepository