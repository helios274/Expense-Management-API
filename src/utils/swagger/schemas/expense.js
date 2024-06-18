exports.GetExpensesResponse = {
  description: "Successful response containing a list of expenses",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          total: {
            type: "integer",
            example: 1,
          },
          page: {
            type: "integer",
            example: 1,
          },
          pageSize: {
            type: "integer",
            example: 10,
          },
          totalPages: {
            type: "integer",
            example: 1,
          },
          expenses: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                  example: 1,
                },
                userId: {
                  type: "integer",
                  example: 1,
                },
                amount: {
                  type: "string",
                  example: "250",
                },
                categoryId: {
                  type: "integer",
                  example: 1,
                },
                description: {
                  type: "string",
                  example: "mobile recharge",
                },
                date: {
                  type: "string",
                  format: "date-time",
                  example: "2024-04-06T00:00:00.000Z",
                },
                category: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                      example: 1,
                    },
                    name: {
                      type: "string",
                      example: "Recharge",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

exports.CreateExpenseRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",
        required: ["amount", "categoryId", "description", "date"],
        properties: {
          amount: {
            type: "string",
            example: "250",
          },
          categoryId: {
            type: "integer",
            example: 1,
          },
          description: {
            type: "string",
            example: "mobile recharge",
          },
          date: {
            type: "string",
            format: "date",
            example: "2024-04-06",
          },
        },
      },
    },
  },
};

exports.CreateExpenseResponse = {
  description: "Successful response containing the new expense",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Expense created successfully",
          },
          expense: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 1,
              },
              userId: {
                type: "integer",
                example: 1,
              },
              amount: {
                type: "string",
                example: "250",
              },
              categoryId: {
                type: "integer",
                example: 1,
              },
              description: {
                type: "string",
                example: "mobile recharge",
              },
              date: {
                type: "string",
                format: "date-time",
                example: "2024-04-06T00:00:00.000Z",
              },
              category: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    example: 1,
                  },
                  name: {
                    type: "string",
                    example: "Recharge",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

exports.GetExpenseResponse = {
  description: "Successful response containing the requested expense",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          userId: {
            type: "integer",
            example: 1,
          },
          amount: {
            type: "string",
            example: "250",
          },
          categoryId: {
            type: "integer",
            example: 1,
          },
          description: {
            type: "string",
            example: "mobile recharge",
          },
          date: {
            type: "string",
            format: "date-time",
            example: "2024-04-06T00:00:00.000Z",
          },
          category: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 1,
              },
              name: {
                type: "string",
                example: "Recharge",
              },
            },
          },
        },
      },
    },
  },
};

exports.UpdateExpenseRequest = {
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          amount: {
            type: "string",
            example: "250",
          },
          categoryId: {
            type: "integer",
            example: 1,
          },
          description: {
            type: "string",
            example: "mobile recharge",
          },
          date: {
            type: "string",
            format: "date",
            example: "2024-04-06",
          },
        },
      },
    },
  },
};

exports.UpdateExpenseResponse = {
  description: "Successful response containing the updated expense",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Expense updated successfully",
          },
          expense: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 1,
              },
              userId: {
                type: "integer",
                example: 1,
              },
              amount: {
                type: "string",
                example: "250",
              },
              categoryId: {
                type: "integer",
                example: 1,
              },
              description: {
                type: "string",
                example: "mobile recharge",
              },
              date: {
                type: "string",
                format: "date-time",
                example: "2024-04-06T00:00:00.000Z",
              },
              category: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    example: 1,
                  },
                  name: {
                    type: "string",
                    example: "Recharge",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
