const { QueryParamsSchema } = require("./common.schema");

exports.CreateExpenseSchema = {
  amount: {
    notEmpty: {
      errorMessage: "Amount is required",
    },
    isDecimal: {
      options: {
        decimal_digits: "0,3",
        errorMessage:
          "Amount must be a decimal number with at most 3 decimal places",
      },
    },
    trim: true,
    escape: true,
  },
  categoryId: {
    notEmpty: {
      errorMessage: "Category ID is required",
    },
    isInt: {
      options: {
        min: 1,
      },
      errorMessage: "Value of Category ID be a positive int",
    },
    trim: true,
    escape: true,
  },
  description: {
    optional: true,
    isString: {
      errorMessage: "Description must be a string",
    },
    isLength: {
      options: {
        max: 255,
      },
      errorMessage: "Description should not be greater than 255 characters",
    },
    trim: true,
    escape: true,
  },
  date: {
    isDate: true,
  },
};

exports.UpdateExpenseSchema = {
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
  amount: {
    optional: true,
    isDecimal: {
      options: {
        decimal_digits: "0,3",
        errorMessage:
          "Amount must be a decimal number with at most 3 decimal places",
      },
    },
    trim: true,
    escape: true,
  },
  categoryId: {
    optional: true,
    isInt: {
      options: {
        min: 1,
      },
      errorMessage: "Value of Category ID be a positive int",
    },
    trim: true,
    escape: true,
  },
  description: {
    optional: true,
    isString: {
      errorMessage: "Description must be a string",
    },
    isLength: {
      options: {
        max: 255,
      },
      errorMessage: "Description should not be greater than 255 characters",
    },
    trim: true,
    escape: true,
  },
  date: {
    optional: true,
    isDate: true,
  },
};

exports.GetExpenseQueryParamsSchema = {
  ...QueryParamsSchema,
  category_id: {
    optional: true,
    isInt: {
      options: {
        min: 1,
      },
      errorMessage: "Value of category_id must be a positive int",
    },
  },
};
