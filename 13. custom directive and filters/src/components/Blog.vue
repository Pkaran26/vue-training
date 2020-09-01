<template>
  <ul v-theme:column="'narrow'">
    <li
      v-for="b in blogs"
      v-bind:key="b.title"
      v-rainbow
    >
      <h4>{{ b.title | to-uppercase }}</h4>
      <p>{{ b.body | snippet }}</p>
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Blog',
    data: function(){
      return {
        blogs: []
      }
    },
    created(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
        this.blogs = res.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    directives: {
      rainbow: {
        bind: function(el){
          el.style.color = '#'+ Math.random().toString().slice(2,8)
        }
      }
    }
  }
</script>

<style>

</style>
