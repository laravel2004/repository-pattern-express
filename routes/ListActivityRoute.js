const express = require('express');

const listActivityRouter = express.Router();
const ListAvtivityRepository = require('../repository/ListActivityRepository');
const ListActivityService = require('../services/ListActivityService');
const ListActivityController = require('../controllers/ListActivityController');

const listActivityRepository = new ListAvtivityRepository();
const listActivityService = new ListActivityService(listActivityRepository);
const listActivityController = new ListActivityController(listActivityService);

listActivityRouter.post('/', listActivityController.create.bind(listActivityController));
listActivityRouter.put('/', listActivityController.update.bind(listActivityController));
listActivityRouter.delete('/:id', listActivityController.delete.bind(listActivityController));
listActivityRouter.get('/', listActivityController.findAll.bind(listActivityController));
listActivityRouter.get('/activity/:activityId', listActivityController.findByActivityId.bind(listActivityController));

module.exports = listActivityRouter;