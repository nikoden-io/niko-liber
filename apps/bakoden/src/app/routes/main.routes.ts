import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import axios from 'axios';
import { pokemonSchema } from './schemas/pokemons-schemas';

const mainRoutes = async (webServer: FastifyInstance) => {
  // Root route
  webServer.route({
    method: 'GET',
    url: '/',
    handler: function (request: FastifyRequest, reply: FastifyReply) {
      reply.send({ welcome: 'Welcome to Bakoden API' });
    },
  });

  // Get a list of 500 Pokémon
  webServer.get('/pokemons', async (request, reply) => {
    try {
      const { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=500'
      );
      const pokemonsList = data.results;

      reply.send({ pokemons: pokemonsList });
    } catch (e) {
      console.log(`/pokemons error: ${e}`);
    }
  });

  // Get a Pokémon by name or ID
  webServer.get<{ Params: PokemonParams }>(
    '/pokemon/:pokemonNameOrId',
    pokemonSchema,
    async (request, reply) => {
      const pokemonName = request.params.pokemonNameOrId;

      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );

        reply.send({ pokemon: data });
      } catch (e) {
        reply.statusCode = parseInt(e.response.status);
        console.log(`/pokemon/:pokemonNameOrId error: ${e}`);
      }
    }
  );
};

export default mainRoutes;
