const api = require("./api");

const port = 3000;

api.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
