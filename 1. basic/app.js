new Vue({
  el: '#vue-app',
  data: {
    name: 'Prateek',
    website: 'https://google.com',
    websiteTag: '<a href="https://google.com">Google</a>',
    age: 27,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(){
      return 'Hello ' + this.name
    },
    add: function(){
      this.age++
    },
    sub: function(){
      this.age--
    },
    add1: function(i){
      this.age += i
    },
    sub1: function(i){
      this.age -= i
    },
    updateXY: function(event){
      this.x = event.offsetX
      this.y = event.offsetY
    },
    click: function(){
      
    }
  }
})
