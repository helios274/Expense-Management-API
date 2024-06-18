exports.GetCategoriesResponse = {
  description: "Successful response containing a list of categories",
  content: {
    "application/json": {
      schema: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              default: 1,
            },
            name: {
              type: "string",
              default: "Travel",
            },
            userId: {
              type: "integer",
              default: 1,
            },
            createdAt: {
              type: "string",
              format: "date-time",
              default: "2024-06-13T04:58:18.456Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              default: "2024-06-12T13:52:08.139Z",
            },
          },
        },
      },
    },
  },
};

exports.CreateCategoryRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",
        required: ["name"],
        properties: {
          name: {
            type: "string",
            example: "Groceries",
          },
        },
      },
    },
  },
};

exports.CreateCategoryResponse = {
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            default: "Category created successfully",
          },
          category: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                default: 1,
              },
              name: {
                type: "string",
                default: "Travel",
              },
              userId: {
                type: "integer",
                default: 1,
              },
              createdAt: {
                type: "string",
                format: "date-time",
                default: "2024-06-13T04:58:18.456Z",
              },
              updatedAt: {
                type: "string",
                format: "date-time",
                default: "2024-06-12T13:52:08.139Z",
              },
            },
          },
        },
      },
    },
  },
};

exports.GetCategoryResponse = {
  description: "Successful response containing the requested category",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            default: 1,
          },
          name: {
            type: "string",
            default: "Travel",
          },
          userId: {
            type: "integer",
            default: 1,
          },
          createdAt: {
            type: "string",
            format: "date-time",
            default: "2024-06-13T04:58:18.456Z",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
            default: "2024-06-12T13:52:08.139Z",
          },
        },
      },
    },
  },
};

exports.UpdateCategoryRequest = {
  content: {
    "application/json": {
      schema: {
        type: "object",
        required: ["name"],
        properties: {
          name: {
            type: "string",
            example: "Groceries",
          },
        },
      },
    },
  },
};

exports.UpdateCategoryResponse = {
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            default: "Category updated successfully",
          },
          category: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                default: 1,
              },
              name: {
                type: "string",
                default: "Travel",
              },
              userId: {
                type: "integer",
                default: 1,
              },
              createdAt: {
                type: "string",
                format: "date-time",
                default: "2024-06-13T04:58:18.456Z",
              },
              updatedAt: {
                type: "string",
                format: "date-time",
                default: "2024-06-12T13:52:08.139Z",
              },
            },
          },
        },
      },
    },
  },
};
