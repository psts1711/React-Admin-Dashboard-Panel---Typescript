"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const AuthController_1 = require("../Controllers/AuthController");
const router = express.Router();
router.post('/signin', AuthController_1.AuthController.signIn);
router.post('/signup', AuthController_1.AuthController.signUp);
exports.default = router;
