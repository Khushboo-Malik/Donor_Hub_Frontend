// api/json-server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/jobs.json'); // Path to your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
