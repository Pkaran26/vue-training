<template>
  <h2>Dynamic 1 {{ counter }}</h2>
  <button v-on:click="increment">inc</button>
</template>

<script>
  export default {
    name: 'Dynamic1',
    data(){
      return {
        counter: 0
      }
    },
    methods: {
      increment: function(){
        this.counter += 1
      }
    }
  }
</script>

<style>

</style>
