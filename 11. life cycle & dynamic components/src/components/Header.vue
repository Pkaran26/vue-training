<template>
  <h1>Header {{ title }}</h1>
  <slot></slot>
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

</style>
