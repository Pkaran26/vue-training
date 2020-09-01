<template>
  <div>
    <photo-viewer
      v-bind:photo="photo"
      v-if="photo"
      @viewPhoto="viewPhoto"
    ></photo-viewer>
    <div
      class="float"
      v-for="photo in photos"
      v-bind:key="photo.id"
      v-on:click="viewPhoto(photo)"
    >
      <img v-bind:src="photo.thumbnailUrl" />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Viewer from './viewer'

  export default {
    name: 'Photo',
    components: {
      'photo-viewer': Viewer
    },
    data(){
      return {
        id: this.$route.params.id,
        photo: null
      }
    },
    async created(){
      await this.getPhotos(this.id)
    },
    computed: {
      photos(){
        return this.$store.state.gallery.photos
      }
    },
    methods: {
      ...mapActions([
        'getPhotos'
      ]),
      viewPhoto: function(photo){
        console.log(photo)
        this.photo = photo
      }
    }
  }
</script>

<style scoped>
  .float {
    float: left;
    cursor: pointer;
  }
</style>
