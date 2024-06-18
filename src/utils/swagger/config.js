const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const appDetails = require("../../../package.json");
const { requests, responses } = require("./schemas/index");

require("dotenv").config;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Expense Management API",
      version: appDetails.version,
      description: "REST API built with Express.js for managing expenses.",
      contact: {
        name: "Adithya Prasad",
        url: "https://github.com/helios274",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      requests,
      responses,
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? `${process.env.PRODUCTION_URL}/api/v1`
            : `http://localhost:${process.env.PORT}/api/v1`,
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/utils/validation/*.js"],
};

const specs = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { customSiteTitle: "Expense Management API" })
  );
}

module.exports = swaggerDocs;
