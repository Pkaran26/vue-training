<template>
  <div class="row">
    <div class="col-lg-4" v-for="album in albums" v-bind:key="album.id">
      <router-link v-bind:to="`/gallery/${ album.id }`" class="a" exact>
        <div class="card border-dark">
          <div class="card-body text-center">
            <img src="data:image/png;base64,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" />
            <h4 class="card-title">{{ album.title | slice-title }}</h4>
            <p class="card-text">
              <strong>Uploader: </strong>
              {{ author(album.userId) }}
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Album',
    async created(){
      await this.getAlbums()
      await this.getUsers()
    },
    computed: {
      albums(){
        return this.$store.state.gallery.albums
      },
      users(){
        return this.$store.state.user.users
      }
    },
    methods: {
      ...mapActions([
        'getAlbums',
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
  .a {
    color: #27292b !important;
    text-decoration: none;
  }
  img {
    width: 100px;
  }
  .card {
    margin-bottom: 25px;
  }
  .card-body {
    height: 189px;
  }
</style>
