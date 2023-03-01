import Fastify from 'fastify';
import { app } from './app/app';
import { startServer } from './server-config/start-server';

const webServer = Fastify({
  logger: true,
});

webServer.register(app);

void startServer(webServer);
