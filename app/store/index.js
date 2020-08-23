export const state = () => ({
  text: '',
});

export const mutations = {
  increment(state, text) {
    state.text = text;
  },
};
