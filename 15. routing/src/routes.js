import Blog from './components/Blog'
import ListBlog from './components/ListBlog'
import Detail from './components/Detail'

export default [
  { path: '/', component: Blog },
  { path: '/list', component: ListBlog },
  { path: '/blog/:id', component: Detail },
]
