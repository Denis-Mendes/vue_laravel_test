// resources/js/store/modules/user.js

const state = {
  users: [],
}

const mutations = {
  SET_USERS(state, users) {
    state.users = users
  }, ADD_USER(state, user) {
    state.users.push(user)
  }, UPDATE_USER(state, updatedUser) {
    const index = state.users.findIndex(u => u.id === updatedUser.id)
    if (index !== -1) {
      state.users.splice(index, 1, updatedUser)
    }
  }, DELETE_USER(state, userId) {
    state.users = state.users.filter(u => u.id !== userId)
  },
}

const actions = {
  async fetchUsers({ commit }) {
    // Make API request to fetch users and commit mutation
  }, async addUser({ commit }, user) {
    // Make API request to add user and commit mutation
  }, async updateUser({ commit }, updatedUser) {
    // Make API request to update user and commit mutation
  }, async deleteUser({ commit }, userId) {
    // Make API request to delete user and commit mutation
  },
}

const getters = {
  // Getter methods as needed
}

export default {
  namespaced: true, state, mutations, actions, getters,
}
