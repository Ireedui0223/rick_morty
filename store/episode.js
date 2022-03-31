import { episodesQuery } from "~/apollo/queries/episode";

export const state = () => ({
  episode: null,
  episodes: [],
});

export const getter = {
  getterValue: (state) => {
    return state.value;
  },
};

export const mutations = {
  setEpisode: (state, payload) => {
    state.episode = payload;
  },
  setEpisodes: (state, payload) => {
    state.episodes = payload;
  },
};
export const actions = {
  async getEpisodes(_, { page, filter }) {
    const client = this.app.apolloProvider.defaultClient;

    return await client.query({
      query: episodesQuery,
      variables: {
        page,
        filter,
      },
    });
  },
};
