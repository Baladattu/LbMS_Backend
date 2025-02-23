import express from "express";
import { isSuperAdmin } from "../Middlewares/auth.middleware.js";
import { updateUserType } from "../Controllers/user.controller.js";

const router = express.Router();


router.patch('/updateType/:userId', isSuperAdmin, updateUserType)


export default router