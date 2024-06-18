const { Router } = require("express");
const validateToken = require("../middlewares/validateToken");
const { checkSchema } = require("express-validator");
const {
  PathParamSchema,
  NameSchema,
} = require("../utils/validation/common.schema");
const {
  getSources,
  createSource,
  updateSource,
  deleteSource,
} = require("../controllers/source");
const {
  GetIncomeQueryParamsSchema,
  CreateIncomeSchema,
  UpdateIncomeSchema,
} = require("../utils/validation/income.schema");
const {
  getIncomes,
  createIncome,
  getIncome,
  updateIncome,
  deleteIncome,
} = require("../controllers/income");

const router = Router();
router.use(validateToken);

/**
 * @swagger
 * /income/source:
 *   post:
 *     tags: [Source]
 *     summary: Create a new source
 *     requestBody:
 *       $ref: '#/components/requests/CreateSourceRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/CreateSourceResponse'
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
 *   get:
 *     tags: [Source]
 *     summary: List all sources
 *     responses:
 *       200:
 *         $ref: '#/components/responses/GetSourcesResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 */
router
  .route("/source")
  .get(getSources)
  .post(checkSchema(NameSchema), createSource);

/**
 * @swagger
 * /income/source/{id}:
 *   get:
 *     tags: [Source]
 *     summary: Gets a source
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the source
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         $ref: '#/components/responses/GetSourceResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 *   put:
 *     tags: [Source]
 *     summary: Updates a source
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the source
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *        $ref: '#/components/requests/UpdateSourceRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/UpdateSourceResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 *   delete:
 *     tags: [Source]
 *     summary: Deletes a source
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the source
 *         required: true
 *         schema:
 *           type: integer
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
router
  .route("/source/:id")
  .put(checkSchema(NameSchema), updateSource)
  .delete(checkSchema(PathParamSchema), deleteSource);

/**
 * @swagger
 * /income:
 *   get:
 *     tags: [Income]
 *     summary: Gets a paginated list of incomes
 *     parameters:
 *       - name: page_num
 *         in: query
 *         description: Page number
 *         required: false
 *         schema:
 *           type: integer
 *       - name: page_size
 *         in: query
 *         description: Number of items per page
 *         required: false
 *         schema:
 *           type: integer
 *       - name: source_id
 *         in: query
 *         description: Source ID
 *         required: false
 *         schema:
 *           type: integer
 *       - name: sort_by
 *         in: query
 *         description: Allowed values - "amount" or "date"
 *         required: false
 *         schema:
 *           type: string
 *       - name: sort_order
 *         in: query
 *         description: Allowed values - "asc" or "desc"
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         $ref: '#/components/responses/GetIncomesResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 *   post:
 *     tags: [Income]
 *     summary: Creates a new income
 *     requestBody:
 *       $ref: '#/components/requests/CreateIncomeRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/CreateIncomeResponse'
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
router
  .route("")
  .get(checkSchema(GetIncomeQueryParamsSchema), getIncomes)
  .post(checkSchema(CreateIncomeSchema), createIncome);

/**
 * @swagger
 * /income/{id}:
 *   get:
 *     tags: [Income]
 *     summary: Gets an income by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the income to get
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         $ref: '#/components/responses/GetIncomeResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 *   put:
 *     tags: [Income]
 *     summary: Updates an income
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the income to get
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       $ref: '#/components/requests/UpdateIncomeRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/UpdateIncomeResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 *   delete:
 *     tags: [Income]
 *     summary: Deletes an income
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the income to get
 *         required: true
 *         schema:
 *           type: integer
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
router
  .route("/:id")
  .get(checkSchema(PathParamSchema), getIncome)
  .put(checkSchema(UpdateIncomeSchema), updateIncome)
  .delete(checkSchema(PathParamSchema), deleteIncome);

module.exports = router;
