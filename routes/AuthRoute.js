const express = require('express');
const AuthController = require('../controllers/AuthController');
const AuthService = require('../services/AuthService');
const UserRepository = require('../repository/UserRepository');

const userRouter = express.Router();
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);


userRouter.post('/register', authController.register.bind(authController));
userRouter.post('/login', authController.login.bind(authController));
userRouter.post('/logout', authController.logout.bind(authController));

module.exports = userRouter;