const { PrismaClient } = require('@prisma/client');

class UserRepository {
  constructor() {
    this.client = new PrismaClient();
  }

  create = async (data) => {
    const user = await this.client.user.create({
      data: data
    });
    return user;
  }

  findByUsername = async (name) => {
    const user = await this.client.user.findFirst({
      where: {
        name,
      }
    });
    return user;
  }

  findAll = async () => {
    const users = await this.client.user.findMany();
    return users;
  }

  findById = async (id) => {
    const user = await this.client.user.findUnique({
      where: {
        id: id
      }
    });
    return user;
  }

  update = async (id, data) => {
    const user = await this.client.user.update({
      where: {
        id: id
      },
      data: data
    });
    return user;
  }

  delete = async (id) => {
    const user = await this.client.user.delete({
      where: {
        id: id
      }
    });
    return user;
  }

}

module.exports = UserRepository;