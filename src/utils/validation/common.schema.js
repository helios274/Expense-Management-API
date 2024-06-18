exports.PathParamSchema = {
  id: {
    notEmpty: {
      errorMessage: "ID is required",
    },
    isInt: {
      options: {
        min: 1,
      },
      errorMessage: "Value of ID must be a positive integer.",
    },
    trim: true,
    escape: true,
  },
};

exports.QueryParamsSchema = {
  field: {
    in: "query",
  },
  page_num: {
    optional: true,
    isInt: {
      options: {
        min: 1,
      },
      errorMessage: "Value of page_num must be a positive int",
    },
  },
  page_size: {
    optional: true,
    isInt: {
      options: {
        min: 1,
      },
      errorMessage: "Value of page_size must be a positive int",
    },
  },
  start_end: {
    optional: true,
    isDate: true,
  },
  end_date: {
    optional: true,
    isDate: true,
  },
  sort_by: {
    optional: true,
    isIn: {
      options: [["amount", "date"]],
      errorMessage: "Value of sort_by must be either amount or date",
    },
    trim: true,
    escape: true,
  },
  sort_order: {
    optional: true,
    isIn: {
      options: [["asc", "desc"]],
      errorMessage: "Value of sort_order must be either asc or desc",
    },
    trim: true,
    escape: true,
  },
};

exports.NameSchema = {
  name: {
    notEmpty: {
      errorMessage: "Category name is required",
    },
    isString: {
      errorMessage: "Category name must be a string",
    },
    isLength: {
      options: {
        min: 2,
        max: 100,
      },
      errorMessage: "Category name should be 2 to 100 characters",
    },
    trim: true,
    escape: true,
  },
};

/**
 * @swagger
 * components:
 *   responses:
 *     SuccessResponse:
 *       description: Success response
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     ValidationErrorResponse:
 *       description: Validation error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 default: Validation Failed
 *               message:
 *                 type: string
 *     UnauthorizedErrorResponse:
 *       description: Unauthorized Access
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 default: Unauthorized Access
 *               message:
 *                 type: string
 *     ForbiddenErrorResponse:
 *       description: Forbidden Error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 default: Forbidden
 *               message:
 *                 type: string
 *     NotFoundErrorResponse:
 *       description: Not found error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 default: Not Found
 *               message:
 *                 type: string
 *     InternalErrorResponse:
 *       description: Internal server error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 default: Internal server error
 *               message:
 *                 type: string
 */
