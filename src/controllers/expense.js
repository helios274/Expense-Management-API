const asyncHandler = require("express-async-handler");
const { validationResult, matchedData } = require("express-validator");
const prisma = require("../prisma/prismaClient");
const { ValidationError } = require("../utils/errors");

exports.createExpense = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const { description, amount, categoryId, date } = matchedData(req);
  const category = await prisma.category.findUnique({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(categoryId),
    },
  });
  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }
  const expense = await prisma.expense.create({
    data: {
      description,
      amount: parseFloat(amount),
      category: {
        connect: {
          id: category.id,
        },
      },
      date: new Date(date),
      user: {
        connect: {
          id: req.user.id,
        },
      },
    },
    include: {
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  res.status(201).json({
    message: "Expense created successfully",
    expense,
  });
});

exports.getExpenses = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const queryParams = matchedData(req);
  const pageNum = parseInt(queryParams.page_num) || 1;
  const pageSize = parseInt(queryParams.page_size) || 10;
  const categoryId = parseInt(queryParams.category_id);
  const startDate = queryParams.start_date;
  const endDate = queryParams.end_date;

  const whereClause = {
    user: {
      id: req.user.id,
    },
  };
  if (categoryId) {
    whereClause.categoryId = parseInt(categoryId, 10);
  }
  if (startDate) {
    whereClause.date = {
      gte: new Date(startDate),
    };
  }
  if (endDate) {
    whereClause.date = {
      ...whereClause.date,
      lte: new Date(endDate),
    };
  }

  const sortBy = queryParams.sort_by || "date";
  const sortOrder = queryParams.sort_order || "desc";
  const orderByClause = {};
  orderByClause[sortBy] = sortOrder;

  const expenses = await prisma.expense.findMany({
    skip: (pageNum - 1) * pageSize,
    take: pageSize,
    where: whereClause,
    orderBy: orderByClause,
    include: {
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  const totalExpenses = await prisma.expense.count({
    where: whereClause,
  });
  res.json({
    total: totalExpenses,
    page: pageNum,
    pageSize: pageSize,
    totalPages: Math.ceil(totalExpenses / pageSize),
    expenses,
  });
});

exports.getExpense = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const expense = await prisma.expense.findUnique({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(req.params.id, 10),
    },
    include: {
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  if (!expense) {
    res.status(404);
    throw new Error("Expense not found");
  }
  res.json(expense);
});

exports.updateExpense = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const { description, amount, categoryId, date } = matchedData(req);

  const category = await prisma.category.findUnique({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(categoryId, 10),
    },
  });
  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }

  const expense = await prisma.expense.update({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(req.params.id, 10),
    },
    data: {
      description,
      amount: parseFloat(amount),
      category: {
        connect: {
          id: category.id,
        },
      },
      date: new Date(date),
    },
    include: {
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  res.json({
    message: "Expense updated successfully",
    expense,
  });
});

exports.deleteExpense = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const expense = await prisma.expense.findUnique({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(req.params.id, 10),
    },
  });
  if (!expense) {
    res.status(404);
    throw new Error("Expense not found");
  }
  await prisma.expense.delete({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(req.params.id, 10),
    },
  });
  res.json({
    message: "Expense deleted successfully",
  });
});
