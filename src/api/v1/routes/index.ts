import { Router, Request, Response } from "express";
import authRoutes from "./auth";

const rootRouter: Router = Router();
/**
 * @openapi
 * /auth:
 *  get:
 *      tag:
 *      description: Authenticate user
 *      responses:
 *        200:
 *          description: User authenticated successfully
 *        404:
 *          description: Not found
 *
 *
 */
rootRouter.use("/auth", authRoutes);

export default rootRouter;
