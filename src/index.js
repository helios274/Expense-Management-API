const express = require("express");
const routes = require("./routes/index");
const morganMiddleware = require("./middlewares/morganLogger");
const logger = require("./utils/logger");
const swaggerDocs = require("./utils/swagger/config");
require("dotenv").config;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(morganMiddleware);
app.use(routes);

swaggerDocs(app);

app.listen(PORT, () => {
  if (process.env.NODE_ENV === "production")
    logger.info(`Server listening on port ${PORT}`);
  else logger.info(`Server live at http://localhost:${PORT}`);
});
