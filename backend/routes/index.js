import express from "express";
import { registerNewUser, loginUser, getUsers } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { createNewRegistration, deleteRegistration, getRegistrations, updateRegistration } from "../controllers/index.js";
import { validateRegistrationBody } from "../middleware/registrationBodyValidation.js";
import { validateIdParam } from "../middleware/validateIdParam.js";

const router = express.Router();


router.post('/register', registerNewUser);
router.post('/login', loginUser);

router.get("/users", getUsers)
router.get("/registrations", protect, getRegistrations);

router.post("/registrations", protect, validateRegistrationBody, createNewRegistration);

router.put("/registrations/:id", protect, validateIdParam, validateRegistrationBody, updateRegistration);

router.delete("/registrations/:id", protect, validateIdParam, deleteRegistration);

export default router;