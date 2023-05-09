import express from 'express';
import validateToken from '../middlewares/validateTokenHandler';
import {
  currentUser,
  getUsers,
  loginUser,
  registerUser,
} from '../controllers/userController';

const userRoutes = express.Router();

userRoutes.route('/').get(getUsers);
userRoutes.route('/register').post(registerUser);
userRoutes.route('/login').post(loginUser);
// Note: if you want to validate only specific route the use below this.
userRoutes.route('/current').get(validateToken, currentUser);

export default userRoutes;
