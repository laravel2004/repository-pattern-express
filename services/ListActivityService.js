class listActivityService {
  constructor(listActivityRepository) {
    this.listActivityRepository = listActivityRepository;
  }

  create = async (data) => {
    try {
      const listActivity = await this.listActivityRepository.create(data);
      return listActivity;
    } catch (error) {
      throw error;
    }
  }

  update = async (id, data) => {
    try {
      const listActivity = await this.listActivityRepository.update(parseInt(id), data);
      return listActivity;
    } catch (error) {
      throw error;
    }
  }

  delete = async (id) => {
    try {
      const listActivity = await this.listActivityRepository.delete(parseInt(id));
      return listActivity;
    } catch (error) {
      throw error;
    }
  }

  findAll = async () => {
    try {
      const listActivity = await this.listActivityRepository.findAll();
      return listActivity;
    } catch (error) {
      throw error;
    }
  }

  findByActivityId = async (activityId) => {
    try {
      const listActivity = await this.listActivityRepository.findByActivityId(parseInt(activityId));
      return listActivity;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = listActivityService;