const {
  CreateUserRequest,
  CreateUserResponse,
  LoginUserRequest,
  LoginUserResponse,
  GetUserProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
} = require("./user");
const {
  GetExpensesResponse,
  CreateExpenseRequest,
  CreateExpenseResponse,
  GetExpenseResponse,
  UpdateExpenseRequest,
  UpdateExpenseResponse,
} = require("./expense");
const {
  GetCategoriesResponse,
  CreateCategoryRequest,
  CreateCategoryResponse,
  GetCategoryResponse,
  UpdateCategoryRequest,
  UpdateCategoryResponse,
} = require("./category");
const {
  GetIncomesResponse,
  CreateIncomeRequest,
  CreateIncomeResponse,
  GetIncomeResponse,
  UpdateIncomeRequest,
  UpdateIncomeResponse,
} = require("./income");
const {
  GetSourcesResponse,
  CreateSourceRequest,
  CreateSourceResponse,
  GetSourceResponse,
  UpdateSourceRequest,
  UpdateSourceResponse,
} = require("./source");

exports.requests = {
  CreateUserRequest,
  LoginUserRequest,
  UpdateProfileRequest,
  CreateExpenseRequest,
  UpdateExpenseRequest,
  CreateCategoryRequest,
  UpdateCategoryRequest,
  CreateIncomeRequest,
  UpdateIncomeRequest,
  CreateSourceRequest,
  UpdateSourceRequest,
};

exports.responses = {
  CreateUserResponse,
  LoginUserResponse,
  GetUserProfileResponse,
  UpdateProfileResponse,
  GetExpensesResponse,
  CreateExpenseResponse,
  GetExpenseResponse,
  UpdateExpenseResponse,
  GetCategoriesResponse,
  CreateCategoryResponse,
  GetCategoryResponse,
  UpdateCategoryResponse,
  GetIncomesResponse,
  CreateIncomeResponse,
  GetIncomeResponse,
  UpdateIncomeResponse,
  GetSourcesResponse,
  CreateSourceResponse,
  GetSourceResponse,
  UpdateSourceResponse,
};
