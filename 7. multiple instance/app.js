var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'one'
  },
  methods: {

  },
  computed: {

  }
})

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'two'
  },
  methods: {
    changeTitle: function(){
      one.title = 'Title Changed'
    }
  },
  computed: {

  }
})
