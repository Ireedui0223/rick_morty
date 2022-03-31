export const state = () => ({
  page: 0,
});

export const mutations = {
  setPage: (state, payload) => {
    state.page = payload;
  },
};
