const asyncHandler = require("express-async-handler");
const { validationResult, matchedData } = require("express-validator");
const prisma = require("../prisma/prismaClient");
const { excludeFields } = require("../utils/helpers");
const { ValidationError } = require("../utils/errors");

exports.getProfile = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
  });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.json(excludeFields(user, ["password"]));
});

exports.updateProfile = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const { firstName, lastName } = matchedData(req);
  const user = await prisma.user.update({
    where: {
      id: req.user.id,
    },
    data: {
      firstName,
      lastName,
    },
  });
  res.json({
    message: "Profile updated successfully",
    user: excludeFields(user, ["password"]),
  });
});

exports.deleteAccount = asyncHandler(async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.user.id,
    },
  });
  res.json({
    message: "Account deleted successfully",
  });
});
