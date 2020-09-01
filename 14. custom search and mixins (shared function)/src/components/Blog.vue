<template>
  <div>
    <input type="text" v-model="search" placeholder="search blogs" />
    <ul>
      <li
        v-for="b in filteredBlogs"
        v-bind:key="b.title"
      >
        <h4>{{ b.title }}</h4>
        <p>{{ b.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import searchMixin from '../mixins/searchMixin'

  export default {
    name: 'Blog',
    data: function(){
      return {
        blogs: [],
        search: ''
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
    mixins: [searchMixin]
  }
</script>

<style>

</style>
