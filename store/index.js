export const state = () => ({
  galaxies: [],
  originalGalaxies: [],
})

export const mutations = {
  setGalaxies(state, galaxies) {
    state.galaxies = galaxies
    state.originalGalaxies = galaxies
  },
  searchGalaxies(state, search) {
    state.galaxies = state.originalGalaxies.filter((item) =>
      item.name.toLowerCase().startsWith(search.toLowerCase())
    )
  },
  callOrdaring(state, role) {
    state.galaxies = state.galaxies.sort((a, b) => {
      if (role) {
        if (a.name > b.name) {
          return -1
        }
        if (a.name < b.name) {
          return 1
        }
        return 0
      } else {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      }
    })
  },
}

export const actions = {
  async getGalaxies({ commit }) {
    const response = await this.$axios.$get('/api/galaxies')
    commit('setGalaxies', response)
  },
}

export const getters = {
  galaxies: (store) => store.galaxies,
}
