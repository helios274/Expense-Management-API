const { Router } = require("express");
const validateToken = require("../middlewares/validateToken");
const {
  getProfile,
  updateProfile,
  deleteAccount,
} = require("../controllers/user");
const { checkSchema } = require("express-validator");
const { UpdateProfileSchema } = require("../utils/validation/user.schema");

const router = Router();
router.use(validateToken);

/**
 * @swagger
 * /user/profile:
 *   get:
 *     tags: [User]
 *     summary: Get user profile
 *     responses:
 *       200:
 *         $ref: '#/components/responses/GetUserProfileResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 */
router.get("/profile", getProfile);

/**
 * @swagger
 * /user/profile:
 *   patch:
 *     tags: [User]
 *     summary: Update user profile details
 *     requestBody:
 *       $ref: '#/components/requests/UpdateProfileRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/UpdateProfileResponse'
 *       400:
 *         $ref: '#/components/responses/ValidationErrorResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 */
router.patch(
  "/profile/update",
  checkSchema(UpdateProfileSchema),
  updateProfile
);

/**
 * @swagger
 * /user/account/delete:
 *   delete:
 *     tags: [User]
 *     summary: Deletes user account
 *     responses:
 *       200:
 *         $ref: '#/components/responses/SuccessResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 */
router.delete("/account/delete", deleteAccount);

module.exports = router;
