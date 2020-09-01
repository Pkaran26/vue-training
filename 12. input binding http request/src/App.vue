<template>
  <div id="app">
    <header-view></header-view>
    <form-view></form-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import Form from './components/Form'

  export default {
    name: 'App',
    components: {
      'header-view': Header,
      'footer-view': Footer,
      'form-view': Form
    },
  }
</script>

<style>

</style>
