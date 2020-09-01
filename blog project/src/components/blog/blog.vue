<template>
  <div>
    <div class="card border-dark" v-for="post in posts" v-bind:key="post.id">
      <div class="card-body">
        <h4 class="card-title">{{ post.title | to-uppercase }}</h4>
        <p class="card-text">
          {{ post.body }}...
          <router-link class="btn-link" v-bind:to="`/blog/${ post.id }`" exact>read more</router-link>
        </p>
        <p><strong>Author: </strong>{{ author(post.userId) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Blog',
    async created(){
      await this.getPosts()
      await this.getUsers()
    },
    computed: {
      posts(){
        return this.$store.state.blog.posts
      },
      users(){
        return this.$store.state.user.users
      },
    },
    methods: {
      ...mapActions([
        'getPosts',
        'getUsers'
      ]),
      author: function(id){
        const name = this.users.filter((e)=>{
          return e.id == id
        })
        if(name && name.length>0){
          return name[0].name
        }
      }
    }
  }
</script>

<style scoped>
  .card {
    margin-bottom: 5px;
  }
</style>
