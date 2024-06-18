const asyncHandler = require("express-async-handler");
const { validationResult, matchedData } = require("express-validator");
const prisma = require("../prisma/prismaClient");
const { ValidationError } = require("../utils/errors");

exports.getSources = asyncHandler(async (req, res) => {
  const sources = await prisma.source.findMany({
    where: {
      user: {
        id: req.user.id,
      },
    },
  });
  res.json(sources);
});

exports.createSource = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const { name } = matchedData(req);
  const source = await prisma.source.create({
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
    message: "Source created successfully",
    source,
  });
});

exports.updateSource = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const { name } = matchedData(req);
  const source = await prisma.source.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!source) {
    res.status(404);
    throw new Error("Source not found");
  }
  const updatedSource = await prisma.source.update({
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
    message: "Source updated successfully",
    updatedSource,
  });
});

exports.deleteSource = asyncHandler(async (req, res) => {
  const source = await prisma.source.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!source) {
    res.status(404);
    throw new Error("Source not found");
  }
  await prisma.source.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.status(200).json({
    message: "Source deleted successfully",
  });
});
