<template>
  <div
    class="shadow text-center"
    v-on:click="close"
  >
    <img v-bind:src="photo.url" style="width: 500px" />
    <h4>{{ photo.title }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'Viewer',
    props: ['photo'],
    methods: {
      close: function(){
        this.$emit('viewPhoto', '')
      }
    }
  }
</script>

<style scoped>
  .shadow {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
    cursor: pointer;
    padding-top:50px;
    color: #fff;
  }
</style>
