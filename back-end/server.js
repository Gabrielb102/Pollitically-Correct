/** Start server for Receipts.US */
const { PORT } = require("./config");
const app = require("./app");

app.listen(PORT, '0.0.0.0', () => {
  console.log(`listening on ${PORT}`);
});

