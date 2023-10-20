const express = require('express');
const ActivityController = require('../controllers/ActivityController');
const ActivityService = require('../services/ActivityService');
const ActivityRepository = require('../repository/ActivityRepository');

const activityRouter = express.Router();
const activityRepository = new ActivityRepository();
const activityService = new ActivityService(activityRepository);
const activityController = new ActivityController(activityService);

activityRouter.post('/', activityController.create.bind(activityController));
activityRouter.put('/', activityController.update.bind(activityController));
activityRouter.delete('/:id', activityController.delete.bind(activityController));
activityRouter.get('/', activityController.findAll.bind(activityController));
activityRouter.get('/user/:userId', activityController.findByUserId.bind(activityController));
activityRouter.get('/:id', activityController.findById.bind(activityController));

module.exports = activityRouter;