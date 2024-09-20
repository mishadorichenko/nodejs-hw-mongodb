import { Router } from 'express';

import * as authControllers from '../controllers/auth.js';

import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import { userSigninSchema, userSignupSchema } from '../validation/users.js';

const authRouter = Router();

authRouter.post(
  //   '/signup',
  '/register',
  validateBody(userSignupSchema),
  ctrlWrapper(authControllers.signupController),
);

authRouter.post(
  //   '/signin',
  '/login',
  validateBody(userSigninSchema),
  ctrlWrapper(authControllers.signinController),
);

export default authRouter;
