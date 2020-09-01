<template>
    <div>
      <ul>
        <li v-for="p in saleProducts" v-bind:key="p.name">{{ p.name }} - {{ p.price }}</li>
      </ul>
      <button v-on:click="reducePrice(4)">reducePrice</button>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Product',
    computed: {
      products(){
        return this.$store.state.products
      },
      ...mapGetters([
        'saleProducts'
      ])
    },
    methods: {
      // reducePrice: function(data){
      //   this.$store.dispatch('reducePrice', data)
      // }
      ...mapActions([
        'reducePrice'
      ])
    }
  }
</script>

<style>

</style>
