
import { Router } from "express";
import * as authController from '../controllers/auth.Controller.js'

const router=Router();

router.get('/register',authController.getRegisterPage);
router.get('/login',authController.getLoginPage);
router.post('/login',authController.postLogin)

export const authRoutes=router;