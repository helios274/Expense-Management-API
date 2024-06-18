const { Router } = require("express");
const { checkSchema } = require("express-validator");
const { createUser, loginUser } = require("../controllers/auth");
const {
  CreateUserSchema,
  LoginUserSchema,
} = require("../utils/validation/user.schema");

const router = Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Authentication]
 *     summary: Registers a new user
 *     requestBody:
 *       $ref: '#/components/requests/CreateUserRequest'
 *     responses:
 *       201:
 *         $ref: '#/components/responses/CreateUserResponse'
 *       400:
 *         $ref: '#/components/responses/ValidationErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 */
router.post("/register", checkSchema(CreateUserSchema), createUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Authentication]
 *     summary: User login
 *     requestBody:
 *       $ref: '#/components/requests/LoginUserRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/LoginUserResponse'
 *       400:
 *         $ref: '#/components/responses/ValidationErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 */
router.post("/login", checkSchema(LoginUserSchema), loginUser);

module.exports = router;
