const express = require("express");

const { serverConfig, logger } = require("./config");
const apiRoutes = require("./routes");
const { log } = require("winston");

const app = express();

app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on the port ${serverConfig.PORT}`);
  //logger.info("successfully started the server", {});
});
