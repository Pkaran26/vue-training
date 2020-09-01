<template>
  <div id="app">
    <header-view></header-view>
    <footer-view></footer-view>
    <blog-view></blog-view>
    <list-blog></list-blog>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import Blog from './components/Blog'
  import ListBlog from './components/ListBlog'

  export default {
    name: 'App',
    components: {
      'header-view': Header,
      'footer-view': Footer,
      'blog-view': Blog,
      'list-blog': ListBlog
    },
  }
</script>

<style>

</style>
