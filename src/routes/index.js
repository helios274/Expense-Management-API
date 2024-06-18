const { Router } = require("express");
const errorHandler = require("../middlewares/errorHandler");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const expenseRoutes = require("./expense");
const incomeRoutes = require("./income");

const router = Router();

router.get("/", (req, res) => {
  res.redirect("/api-docs");
});

router.get("/api/v1", (req, res) => {
  res.send("Expense Management API");
});

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/user", userRoutes);
router.use("/api/v1/expense", expenseRoutes);
router.use("/api/v1/income", incomeRoutes);
router.use(errorHandler);

module.exports = router;
