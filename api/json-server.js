// api/json-server.js
import jsonServer from 'json-server';

export default (req, res) => {
  const server = jsonServer.create();
  const router = jsonServer.router('jobs.json');  // Ensure the path is correct
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  server(req, res);
};
