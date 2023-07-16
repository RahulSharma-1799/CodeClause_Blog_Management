import express from 'express';
import { signupUser, loginUser } from "../controller/user-controller.js";

const route = express.Router();
route.post('/signup', signupUser);
route.post('/login', loginUser);


export default route;