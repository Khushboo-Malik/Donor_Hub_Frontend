// api/json-server.js
const jsonServer = require('json-server');

export default (req, res) => {
  const server = jsonServer.create();
  const router = jsonServer.router('src/jobs.json');  // Ensure the path is correct
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  server(req, res);
};
