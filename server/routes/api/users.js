import express from 'express';
import usersController from '../../controller/usersController.js';
import validateAuth from '../../config/config-passport.js';

const router = express.Router();

router.post('/register', usersController.register);

router.post('/login', usersController.login);

router.post('/logout', validateAuth, usersController.logout);

router.get('/current', validateAuth, usersController.getCurrentUserData);

export default router;
