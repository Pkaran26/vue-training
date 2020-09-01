import { SERVER_URL } from './server'
import axios from 'axios'

export const blog = {
  state: () => ({
    posts: [],
    post: {},
    comments: []
  }),
  mutations: {
    posts: (state, posts) =>{
      state.posts = posts
    },
    post: (state, post) =>{
      state.post = post
    },
    comments: (state, comments) =>{
      state.comments = comments
    },
  },
  actions: {
    getPosts: async (context) =>{
      const result = await axios.get(`${ SERVER_URL }/posts`)
        context.commit('posts', result.data)
    },
    getPost: async (context, id) =>{
      const result = await axios.get(`${ SERVER_URL }/posts/${ id }`)
        context.commit('post', result.data)
    },
    getPostComments: async (context, id) =>{
      const result = await axios.get(`${ SERVER_URL }/posts/${ id }/comments`)
        context.commit('comments', result.data)
    }
  }
}
