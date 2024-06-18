exports.GetIncomesResponse = {
  description: "Successful response containing a list of incomes",
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
          incomes: {
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
                sourceId: {
                  type: "integer",
                  example: 1,
                },
                description: {
                  type: "string",
                  example: "some description",
                },
                date: {
                  type: "string",
                  format: "date-time",
                  example: "2024-04-06T00:00:00.000Z",
                },
                source: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                      example: 1,
                    },
                    name: {
                      type: "string",
                      example: "Salary",
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

exports.CreateIncomeRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",
        required: ["amount", "sourceId", "description", "date"],
        properties: {
          amount: {
            type: "string",
            example: "250",
          },
          sourceId: {
            type: "integer",
            example: 1,
          },
          description: {
            type: "string",
            example: "some description",
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

exports.CreateIncomeResponse = {
  description: "Successful response containing the new income",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Income created successfully",
          },
          income: {
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
              sourceId: {
                type: "integer",
                example: 1,
              },
              description: {
                type: "string",
                example: "some description",
              },
              date: {
                type: "string",
                format: "date-time",
                example: "2024-04-06T00:00:00.000Z",
              },
              source: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    example: 1,
                  },
                  name: {
                    type: "string",
                    example: "Salary",
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

exports.GetIncomeResponse = {
  description: "Successful response containing the requested income",
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
          sourceId: {
            type: "integer",
            example: 1,
          },
          description: {
            type: "string",
            example: "some description",
          },
          date: {
            type: "string",
            format: "date-time",
            example: "2024-04-06T00:00:00.000Z",
          },
          source: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 1,
              },
              name: {
                type: "string",
                example: "Salary",
              },
            },
          },
        },
      },
    },
  },
};

exports.UpdateIncomeRequest = {
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          amount: {
            type: "string",
            example: "250",
          },
          sourceId: {
            type: "integer",
            example: 1,
          },
          description: {
            type: "string",
            example: "some description",
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

exports.UpdateIncomeResponse = {
  description: "Successful response containing the updated income",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Income updated successfully",
          },
          income: {
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
              sourceId: {
                type: "integer",
                example: 1,
              },
              description: {
                type: "string",
                example: "some description",
              },
              date: {
                type: "string",
                format: "date-time",
                example: "2024-04-06T00:00:00.000Z",
              },
              source: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    example: 1,
                  },
                  name: {
                    type: "string",
                    example: "Salary",
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
