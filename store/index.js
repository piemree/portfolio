export const state = () => ({
  repositories: null,
})

export const mutations = {
  SET_REPOS(state, data) {
    state.repositories = data.filter((el) =>
      el.id == 370508586 || el.id == 359844627 ? false : true
    )
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let { data } = await this.$axios.get(
      'https://api.github.com/users/piemree/repos'
    )

    data = data
      .sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      )
      .reverse()

    commit('SET_REPOS', data)
  },
}
