import { SERVER_URL } from './server'
import axios from 'axios'

export const user = {
  state: () => ({
    users: []
  }),
  mutations: {
    users: (state, users) =>{
      state.users = users
    }
  },
  actions: {
    getUsers: async (context) =>{
      const result = await axios.get(`${ SERVER_URL }/users`)
        context.commit('users', result.data)
    }
  }
}
