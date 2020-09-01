<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'


  export default {
    name: 'App',
    components: {
      'header-view': Header,
      'footer-view': Footer,
    },
  }
</script>

<style>

</style>
