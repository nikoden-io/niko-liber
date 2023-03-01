export const pokemonSchema = {
  schema: {
    params: {
      type: 'object',
      required: ['pokemonNameOrId'],
      properties: {
        pokemonNameOrId: { type: 'string' },
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          pokemon: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              name: { type: 'string' },
              names: { type: 'array' },
              abilities: { type: 'array' },
              generation: { type: 'object' },
            },
          },
        },
      },
    },
  },
};
