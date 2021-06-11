export const state = () => ({
  repositories: null,
})

export const mutations = {
  SET_REPOS(state, repos) {
    state.repositories = repos
  },
}

export const getters = {}

export const actions = {
 /*  async nuxtServerInit({ dispatch }) {
    await dispatch('getRepos')
  }, */

/*   getRepos({ commit }) {
      console.log("object");
    this.$axios
      .get('https://api.github.com/users/piemree/repos')
      .then((result) => commit('SET_REPOS', result))
      .catch((err) => console.log(err))
  }, */
}
