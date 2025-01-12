import { createServer } from 'http';
import { parse } from 'url';
import jsonServer from 'json-server';
import { join } from 'path';

const server = jsonServer.create();
const router = jsonServer.router(join(process.cwd(), 'donations.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default (req, res) => {
    const parsedUrl = parse(req.url, true);
    server.emit('request', req, res);
};

