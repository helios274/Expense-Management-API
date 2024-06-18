const asyncHandler = require("express-async-handler");
const { validationResult, matchedData } = require("express-validator");
const prisma = require("../prisma/prismaClient");
const { ValidationError } = require("../utils/errors");

exports.createIncome = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const { amount, sourceId, description, date } = matchedData(req);
  const source = await prisma.source.findUnique({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(sourceId),
    },
  });
  if (!source) {
    res.status(404);
    throw new Error("Source not found");
  }
  const income = await prisma.income.create({
    data: {
      amount: parseFloat(amount),
      source: {
        connect: {
          id: source.id,
        },
      },
      description,
      date: new Date(date),
      user: {
        connect: {
          id: req.user.id,
        },
      },
    },
    include: {
      source: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  res.status(201).json({
    message: "Income created successfully",
    income,
  });
});

exports.getIncomes = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const queryParams = matchedData(req);
  const pageNum = parseInt(queryParams.page_num) || 1;
  const pageSize = parseInt(queryParams.page_size) || 10;
  const sourceId = parseInt(queryParams.source_id);
  const startDate = queryParams.start_date;
  const endDate = queryParams.end_date;

  const whereClause = {
    user: {
      id: req.user.id,
    },
  };
  if (sourceId) {
    whereClause.sourceId = parseInt(sourceId, 10);
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

  const incomes = await prisma.income.findMany({
    skip: (pageNum - 1) * pageSize,
    take: pageSize,
    where: whereClause,
    orderBy: orderByClause,
    include: {
      source: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  const totalIncomes = await prisma.income.count({
    where: whereClause,
  });
  res.json({
    total: totalIncomes,
    page: pageNum,
    pageSize: pageSize,
    totalPages: Math.ceil(totalIncomes / pageSize),
    incomes,
  });
});

exports.getIncome = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const income = await prisma.income.findUnique({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(req.params.id, 10),
    },
    include: {
      source: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  if (!income) {
    res.status(404);
    throw new Error("Income not found");
  }
  res.json(income);
});

exports.updateIncome = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const { amount, sourceId, description, date } = matchedData(req);

  const source = await prisma.source.findUnique({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(sourceId, 10),
    },
  });
  if (!source) {
    res.status(404);
    throw new Error("Source not found");
  }

  const income = await prisma.income.update({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(req.params.id, 10),
    },
    data: {
      amount: parseFloat(amount),
      source: {
        connect: {
          id: source.id,
        },
      },
      description,
      date: new Date(date),
    },
    include: {
      source: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  res.json({
    message: "Income updated successfully",
    income,
  });
});

exports.deleteIncome = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const income = await prisma.income.findUnique({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(req.params.id, 10),
    },
  });
  if (!income) {
    res.status(404);
    throw new Error("Income not found");
  }
  await prisma.income.delete({
    where: {
      user: {
        id: req.user.id,
      },
      id: parseInt(req.params.id, 10),
    },
  });
  res.json({
    message: "Income deleted successfully",
  });
});
