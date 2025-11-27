import { FastifyPluginAsync } from 'fastify';

const products: FastifyPluginAsync = async (server): Promise<void> => {
  server.get('/', async (req, reply) => {
    const products = await server.viator.post('/products/search', {
      filtering: {
        destination: '5309',
        tags: [],
        startDate: '2025-11-30',
        endDate: '2026-02-28',
      },
      sorting: {
        sort: 'TRAVELER_RATING',
        order: 'DESCENDING',
      },
      pagination: {
        start: 1,
        count: 150,
      },
      currency: 'USD',
    });
    return reply.send(products.data.products);
  });
};

export default products;
