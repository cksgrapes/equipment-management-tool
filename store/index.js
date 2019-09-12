import { vuexfireMutations, firestoreAction } from 'vuexfire';

export const state = {
  users: []
};

export const mutations = {
  ...vuexfireMutations
};

export const actions = {
  setUsersRef: firestoreAction(({ bindFirestoreRef }, ref) => {
    bindFirestoreRef('users', ref);
  })
};

export const getters = {
  getUsers: (state) => {
    return state.users
  },
};
