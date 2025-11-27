import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify/types/plugin';
import xior, { XiorInstance } from 'xior';
import 'dotenv/config';

declare module 'fastify' {
  interface FastifyInstance {
    viator: XiorInstance;
  }
}

export const viatorApi = xior.create({
  baseURL: process.env.VIATOR_API_URL!,
  headers: {
    'exp-api-key': process.env.VIATOR_API_KEY,
    Accept: 'application/json;version=2.0',
    'Accept-Language': 'en',
    'Content-Type': 'application/json',
  },
});

const viatorPlugin: FastifyPluginAsync = fp(async (server) => {
  server.log.info('Viator API initialised');
  server.decorate('viator', viatorApi);
});

export default viatorPlugin;
