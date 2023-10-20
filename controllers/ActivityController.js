class ActivityController {
  constructor(activityService) {
    this.activityService = activityService;
  }

  create = async (req, res) => {
    try {
      const activity = await this.activityService.create(req.body);
      res.status(201).json(activity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  update = async (req, res) => {
    try {
      const activity = await this.activityService.update(req.params.id, req.body);
      res.status(200).json(activity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  delete = async (req, res) => {
    try {
      console.log(req.params.id)
      const activity = await this.activityService.delete(req.params.id);
      res.status(200).json(activity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  findAll = async (req, res) => {
    try {
      const activities = await this.activityService.findAll();
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  findByUserId = async (req, res) => {
    try {
      const activities = await this.activityService.findByUserId(req.params.userId);
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  findById = async (req, res) => {
    try {
      const activity = await this.activityService.findById(req.params.id);
      res.status(200).json(activity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = ActivityController;