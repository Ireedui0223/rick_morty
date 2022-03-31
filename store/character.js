import { charactersQuery } from "~/apollo/queries/character";

export const state = () => ({
  character: null,
  characters: [],
});

export const getter = {
  getterValue: (state) => {
    return state.value;
  },
};
export const mutations = {
  setCharacter: (state, payload) => {
    state.character = payload;
  },
  setCharacters: (state, payload) => {
    state.characters = payload;
  },
};
export const actions = {
  async getCharacters(_, { page, filter }) {
    const client = this.app.apolloProvider.defaultClient;

    return await client.query({
      query: charactersQuery,
      variables: {
        page,
        filter,
      },
    });
  },
};
