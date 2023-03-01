import { FastifyInstance } from 'fastify';
import { HOST, PORT } from './env';

export const startServer = async (webServer: FastifyInstance) => {
  try {
    webServer.listen({ port: PORT, host: HOST }, (err) => {
      if (err) {
        webServer.log.error(err);
        process.exit(1);
      } else {
        console.log(`[ Bakoden ready ] http://${HOST}:${PORT}`);
      }
    });
  } catch (err) {
    webServer.log.error(err);
    process.exit(1);
  }
};
