class listActivityController {
  constructor(listActivityService) {
    this.listActivityService = listActivityService;
  }

  create = async (req, res) => {
    try {
      const listActivity = await this.listActivityService.create(req.body);
      res.status(201).json(listActivity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  update = async (req, res) => {
    try {
      const listActivity = await this.listActivityService.update(req.params.id, req.body);
      res.status(200).json(listActivity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  delete = async (req, res) => {
    try {
      console.log(req.params.id)
      const listActivity = await this.listActivityService.delete(req.params.id);
      res.status(200).json(listActivity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  findAll = async (req, res) => {
    try {
      const listActivities = await this.listActivityService.findAll();
      res.status(200).json(listActivities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  findByActivityId = async (req, res) => {
    try {
      const listActivity = await this.listActivityService.findByActivityId(req.params.activityId);
      res.status(200).json(listActivity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = listActivityController;