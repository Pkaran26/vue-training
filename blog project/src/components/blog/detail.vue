<template>
  <div>
    <div class="card border-dark">
      <div class="card-body">
        <h4 class="card-title">{{ post.title | to-uppercase }}</h4>
        <p><strong>Author: </strong>{{ author(post.userId) }}</p>
        <p class="card-text text-justify">
          {{ post.body | multiple}}
        </p>
      </div>
    </div>
    <div class="card border-dark">
      <div class="card-body">
        <h5>Comments:-</h5>
        <ul>
          <li v-for="c in comments" v-bind:key="c.id">
            <strong class="card-text">{{ c.name | to-uppercase }} | {{ c.email }}</strong>
            <p class="text-justify">{{ c.body }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Detail',
    data(){
      return {
        id: this.$route.params.id
      }
    },
    async created(){
      await this.getPost(this.id)
      await this.getPostComments(this.id)
      await this.getUsers()
    },
    computed: {
      post(){
        return this.$store.state.blog.post
      },
      comments(){
        return this.$store.state.blog.comments
      },
      users(){
        return this.$store.state.user.users
      },
    },
    methods: {
      ...mapActions([
        'getPost',
        'getPostComments',
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
