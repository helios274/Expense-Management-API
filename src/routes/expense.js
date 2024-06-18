const { Router } = require("express");
const validateToken = require("../middlewares/validateToken");
const { checkSchema } = require("express-validator");
const {
  createExpense,
  getExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expense");
const {
  createCategory,
  updateCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/category");
const {
  UpdateExpenseSchema,
  CreateExpenseSchema,
  GetExpenseQueryParamsSchema,
} = require("../utils/validation/expense.schema");
const {
  PathParamSchema,
  NameSchema,
} = require("../utils/validation/common.schema");

const router = Router();

router.use(validateToken);

/**
 * @swagger
 * /expense/category:
 *   post:
 *     tags: [Category]
 *     summary: Create a new category
 *     requestBody:
 *       $ref: '#/components/requests/CreateCategoryRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/CreateCategoryResponse'
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
 *     tags: [Category]
 *     summary: List all categories
 *     responses:
 *       200:
 *         $ref: '#/components/responses/GetCategoriesResponse'
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
  .route("/category")
  .get(getCategories)
  .post(checkSchema(NameSchema), createCategory);

/**
 * @swagger
 * /expense/category/{id}:
 *   get:
 *     tags: [Category]
 *     summary: Gets a category
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the category
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         $ref: '#/components/responses/GetCategoryResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 *   put:
 *     tags: [Category]
 *     summary: Updates a category
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the category
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *        $ref: '#/components/requests/UpdateCategoryRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/UpdateCategoryResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 *   delete:
 *     tags: [Category]
 *     summary: Deletes a category
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the category
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
  .route("/category/:id")
  .put(checkSchema(NameSchema), updateCategory)
  .delete(checkSchema(PathParamSchema), deleteCategory);

/**
 * @swagger
 * /expense:
 *   get:
 *     tags: [Expense]
 *     summary: Gets a paginated list of expenses
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
 *       - name: category_id
 *         in: query
 *         description: Category ID
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
 *         $ref: '#/components/responses/GetExpensesResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 *   post:
 *     tags: [Expense]
 *     summary: Creates a new expense
 *     requestBody:
 *       $ref: '#/components/requests/CreateExpenseRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/CreateExpenseResponse'
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
  .get(checkSchema(GetExpenseQueryParamsSchema), getExpenses)
  .post(checkSchema(CreateExpenseSchema), createExpense);

/**
 * @swagger
 * /expense/{id}:
 *   get:
 *     tags: [Expense]
 *     summary: Gets an expense by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the expense to get
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         $ref: '#/components/responses/GetExpenseResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 *   put:
 *     tags: [Expense]
 *     summary: Updates an expense
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the expense to get
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       $ref: '#/components/requests/UpdateExpenseRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/UpdateExpenseResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedErrorResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenErrorResponse'
 *       404:
 *         $ref: '#/components/responses/NotFoundErrorResponse'
 *       500:
 *         $ref: '#/components/responses/InternalErrorResponse'
 *   delete:
 *     tags: [Expense]
 *     summary: Deletes an expense
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the expense to get
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
  .get(checkSchema(PathParamSchema), getExpense)
  .put(checkSchema(UpdateExpenseSchema), updateExpense)
  .delete(checkSchema(PathParamSchema), deleteExpense);

module.exports = router;
