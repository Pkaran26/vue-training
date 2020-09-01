import { SERVER_URL } from './server'
import axios from 'axios'

export const gallery = {
  state: () => ({
    albums: [],
    photos: []
  }),
  mutations: {
    albums: (state, albums) =>{
      state.albums = albums
    },
    photos: (state, photos) =>{
      state.photos = photos
    }
  },
  actions: {
    getAlbums: async (context) =>{
      const result = await axios.get(`${ SERVER_URL }/albums`)
        context.commit('albums', result.data)
    },
    getPhotos: async (context, id) =>{
      const result = await axios.get(`${ SERVER_URL }/albums/${ id }/photos`)
        context.commit('photos', result.data)
    }
  }
}
