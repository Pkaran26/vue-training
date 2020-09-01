<template>
  <div>
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
    <loading-view v-if="!blog.title"></loading-view>
  </div>
</template>

<script>
  import axios from 'axios'
  import Loading from './Loading'

  export default {
    name: 'Detail',
    components: {
      'loading-view': Loading
    },
    data: function(){
      return {
        id: this.$route.params.id,
        blog: {
          title: '',
          body: ''
        },
      }
    },
    created(){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${ this.id }`)
      .then(res=>{
        this.blog = res.data
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
</script>

<style>

</style>
