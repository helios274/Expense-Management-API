const { validationResult, matchedData } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { ValidationError } = require("../utils/errors");
const prisma = require("../prisma/prismaClient");

exports.createUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const data = matchedData(req);
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (existingUser) {
    res.status(400);
    throw new Error("User with email already exists.");
  }
  const hashedPassword = await bcrypt.hash(data.password, 8);
  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,
    },
  });
  res.status(201).json({
    message: "User created successfully",
    user: {
      email: user.email,
      first_name: user.firstName,
      last_name: user.lastName,
    },
  });
});

exports.loginUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new ValidationError(errors.array());
  }
  const { email, password } = matchedData(req);
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    res.status(404);
    throw new Error("Email not found");
  }
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(401);
    throw new Error("Incorrect password");
  }

  const token = jwt.sign(
    {
      user: {
        id: user.id,
        email: user.email,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  await prisma.user.update({
    where: { id: user.id },
    data: { lastLoggedIn: new Date() },
  });
  res.status(200).json({ token });
});
