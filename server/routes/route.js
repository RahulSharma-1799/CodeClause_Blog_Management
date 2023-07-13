import express from 'express';
import { signUpUser } from '../controller/user-controller.js';

const route = express.Router();
route.post('/signup', signUpUser);


export default route;