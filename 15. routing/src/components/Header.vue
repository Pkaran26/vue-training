<template>
  <div>
    <h1>Header {{ title }}</h1>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/list" exact>Blog</router-link></li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    props: {
      title: {
        type: String
      }
    },
    methods: {

    }
  }
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
