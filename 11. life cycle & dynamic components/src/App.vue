<template>
  <div id="app">
    <header-view>
      <p>slot tag</p>
      <p>slot tag</p>
    </header-view>
    <footer-view></footer-view>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'dynamic-a'">dynamic-a</button>
    <button v-on:click="component = 'dynamic-b'">dynamic-b</button>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  import Dynamic1 from './components/Dynamic1'
  import Dynamic2 from './components/Dynamic2'

  export default {
    name: 'App',
    components: {
      'header-view': Header,
      'footer-view': Footer,
      'dynamic-a': Dynamic1,
      'dynamic-b': Dynamic2
    },
    data(){
      return {
        component: 'dynamic-a'
      }
    }
    // beforeCreate(){
    //   console.log('beforeCreate')
    // },
    // created(){
    //   console.log('created')
    // },
    // beforeMount(){
    //   console.log('beforeMount')
    // },
    // mounted(){
    //   console.log('mounted')
    // },
    // beforeUpdate(){
    //   console.log('beforeUpdate')
    // },
    // updated(){
    //   console.log('updated')
    // }
  }
</script>

<style>

</style>
