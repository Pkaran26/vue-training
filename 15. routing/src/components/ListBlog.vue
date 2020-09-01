<template>
  <div>
    <ul v-if="blogs.length>0">
      <li
        v-for="b in blogs"
        v-bind:key="b.title"
      >
        <router-link v-bind:to="`/blog/${ b.id }`" exact>
          <h4>{{ b.title }}</h4>
          <p>{{ b.body }}</p>
        </router-link>
      </li>
    </ul>
      <loading-view v-if="blogs.length==0"></loading-view>
  </div>
</template>

<script>
  import axios from 'axios'
  import Loading from './Loading'

  export default {
    name: 'ListBlog',
    components: {
      'loading-view': Loading
    },
    data: function(){
      return {
        blogs: [],
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
    }
  }
</script>

<style>

</style>
