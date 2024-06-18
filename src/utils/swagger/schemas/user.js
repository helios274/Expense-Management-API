exports.CreateUserRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",
        required: ["email", "password", "firstName"],
        properties: {
          email: {
            type: "string",
            default: "example@mail.com",
          },
          password: {
            type: "string",
            default: "Password@43535",
          },
          firstName: {
            type: "string",
            default: "Random",
          },
          lastName: {
            type: "string",
            default: "User",
          },
        },
      },
    },
  },
};

exports.CreateUserResponse = {
  description: "Successful response containing the user info",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          user: {
            type: "object",
            properties: {
              email: {
                type: "string",
                default: "alice@mail.com",
              },
              firstName: {
                type: "string",
                default: "Alice",
              },
              lastName: {
                type: "string",
                default: "John",
              },
            },
          },
        },
      },
    },
  },
};
exports.GetUserProfileResponse = {
  description: "Successful response containing the user profile",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            default: 1,
          },
          email: {
            type: "string",
            default: "alice@mail.com",
          },
          firstName: {
            type: "string",
            default: "Alice",
          },
          lastName: {
            type: "string",
            default: "John",
          },
          isAdmin: {
            type: "boolean",
          },
          isActive: {
            type: "boolean",
          },
          lastLoggedIn: {
            type: "string",
            format: "date-time",
            default: "2024-06-13T04:58:18.456Z",
          },
          dateJoined: {
            type: "string",
            format: "date-time",
            default: "2024-06-12T13:52:08.139Z",
          },
        },
      },
    },
  },
};
exports.LoginUserRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
            default: "alice@mail.com",
          },
          password: {
            type: "string",
            default: "Alice@123",
          },
        },
      },
    },
  },
};
exports.LoginUserResponse = {
  description: "Successful response containing the access token",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          token: {
            type: "string",
          },
        },
      },
    },
  },
};

exports.UpdateProfileRequest = {
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            default: "Random",
          },
          lastName: {
            type: "string",
            default: "User",
          },
        },
      },
    },
  },
};

exports.UpdateProfileResponse = {
  description: "Successful response containing the updated profile",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            default: "Profile updated successfully",
          },
          user: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                default: 1,
              },
              email: {
                type: "string",
                default: "alice@mail.com",
              },
              firstName: {
                type: "string",
                default: "Alice",
              },
              lastName: {
                type: "string",
                default: "John",
              },
              isAdmin: {
                type: "boolean",
              },
              isActive: {
                type: "boolean",
              },
              lastLoggedIn: {
                type: "string",
                format: "date-time",
                default: "2024-06-13T04:58:18.456Z",
              },
              dateJoined: {
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
