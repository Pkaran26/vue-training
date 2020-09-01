<template>
  <div id="app">
    <product-view></product-view>
  </div>
</template>

<script>
  import Product from './components/product'
  

  export default {
    name: 'App',
    components: {
      'product-view': Product
    },
  }
</script>

<style>

</style>
