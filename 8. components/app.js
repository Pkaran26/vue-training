Vue.component('greeting', {
  template: '<p>greeting {{ name }}, <button v-on:click="changeName">Change</button></p>',
  data: function(){
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function(){
      this.name = 'Mario'
    }
  }
})

var one = new Vue({
  el: '#vue-app-one',
  data: {

  },
  methods: {
    readRefs: function(){
      console.log(this.$refs.input.value);
    }
  },
  computed: {

  }
})

var two = new Vue({
  el: '#vue-app-two',
  data: {

  },
  methods: {

  },
  computed: {

  }
})
