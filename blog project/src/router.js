import Home from './components/home'

import Blog from './components/blog/blog'
import Detail from './components/blog/detail'

import Album from './components/gallery/album'
import Photo from './components/gallery/photo'

export default [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/blog/:id', component: Detail },
  { path: '/gallery', component: Album },
  { path: '/gallery/:id', component: Photo },
]
