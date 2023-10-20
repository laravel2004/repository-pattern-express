class ActivityService {
  constructor(activityRepository) {
    this.activityRepository = activityRepository;
  }

  create = async (data) => {
    try {
      const activity = await this.activityRepository.create(data);
      return activity;
    } catch (error) {
      throw error;
    }
  }

  update = async (id, data) => {
    try {
      const activity = await this.activityRepository.update(parseInt(id), data);
      return activity;
    } catch (error) {
      throw error;
    }
  }

  delete = async (id) => {
    try {
      const activity = await this.activityRepository.delete(parseInt(id));
      return activity;
    } catch (error) {
      throw error;
    }
  }

  findAll = async () => {
    try {
      const activities = await this.activityRepository.findAll();
      return activities;
    } catch (error) {
      throw error;
    }
  }

  findByUserId = async (userId) => {
    try {
      const activities = await this.activityRepository.findByUserId(parseInt(userId));
      return activities;
    } catch (error) {
      throw error;
    }
  }

  findById = async (id) => {
    try {
      const activity = await this.activityRepository.findById(parseInt(id));
      return activity;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ActivityService;