import { Router, Request, Response } from "express";
import { login } from "../controllers/auth";

const authRoutes: Router = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *  get:
 *      tags:
 *      - Authentication
 *      description: Authenticate user
 *      responses:
 *        200:
 *          description: User authenticated successfully
 *        404:
 *          description: Not found
 */
authRoutes.get("/login", login);

/**
 * @openapi
 * /api/v1/auth/login:
 *  post:
 *      tags:
 *      - Authentication
 *      description: Authenticate user
 *      responses:
 *        200:
 *          description: User authenticated successfully
 *        404:
 *          description: Not found
 */
authRoutes.post("/register", (req, res) => console.log(""));

export default authRoutes;
