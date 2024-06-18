exports.GetSourcesResponse = {
  description: "Successful response containing a list of sources",
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
              default: "Salary",
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

exports.CreateSourceRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",
        required: ["name"],
        properties: {
          name: {
            type: "string",
            example: "Salary",
          },
        },
      },
    },
  },
};

exports.CreateSourceResponse = {
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            default: "Source created successfully",
          },
          source: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                default: 1,
              },
              name: {
                type: "string",
                default: "Salary",
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

exports.GetSourceResponse = {
  description: "Successful response containing the requested source",
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
            default: "Salary",
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

exports.UpdateSourceRequest = {
  content: {
    "application/json": {
      schema: {
        type: "object",
        required: ["name"],
        properties: {
          name: {
            type: "string",
            example: "Salary",
          },
        },
      },
    },
  },
};

exports.UpdateSourceResponse = {
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            default: "Source updated successfully",
          },
          source: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                default: 1,
              },
              name: {
                type: "string",
                default: "Salary",
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
