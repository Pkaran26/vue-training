<template>
  <div id="app">
    <header-view></header-view>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer-view></footer-view>
  </div>
</template>

<script>
import Header from './components/common/header'
import Footer from './components/common/footer'

export default {
  name: 'App',
  components: {
    'header-view': Header,
    'footer-view': Footer
  }
}
</script>

<style>
  .container{
    margin-top: 20px;
    height: 499px;
    overflow: auto;
    margin-bottom: 20px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
