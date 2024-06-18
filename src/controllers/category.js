const asyncHandler = require("express-async-handler");
const { validationResult, matchedData } = require("express-validator");
const prisma = require("../prisma/prismaClient");
const { ValidationError } = require("../utils/errors");

exports.getCategories = asyncHandler(async (req, res) => {
  const categories = await prisma.category.findMany({
    where: {
      user: {
        id: req.user.id,
      },
    },
  });
  res.json(categories);
});

exports.createCategory = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const { name } = matchedData(req);
  const existingCategory = await prisma.category.findUnique({
    where: {
      name,
    },
  });
  if (existingCategory) {
    res.status(400);
    throw new Error("Category already exists");
  }
  const category = await prisma.category.create({
    data: {
      name,
      user: {
        connect: {
          id: req.user.id,
        },
      },
    },
  });
  res.status(201).json({
    message: "Category created successfully",
    category,
  });
});

exports.updateCategory = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const { name } = matchedData(req);
  const category = await prisma.category.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }
  const updatedCategory = await prisma.category.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      name,
    },
    select: {
      name: true,
    },
  });
  res.status(200).json({
    message: "Category updated successfully",
    updatedCategory,
  });
});

exports.deleteCategory = asyncHandler(async (req, res) => {
  const category = await prisma.category.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }
  await prisma.category.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.status(200).json({
    message: "Category deleted successfully",
  });
});
