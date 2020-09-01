var testC = {
  template: `
    <ul>
    {{getProps()}}
      <li v-for="a in arr">{{ a }}</li>
      <li>
        <button @click="changeData">changeData</button>
      </li>
    </ul>
  `,
//  props: ['arr'],
  props: {
    arr: {
      type: Array,
      required: true
    },
  },
  methods: {
    getProps: function(){
      console.log(this.arr);
    },
    changeData: function(){
      this.$emit('changearr', ['C', 'D'])
    }
  }
}

new Vue({
  el: '#vue-app',
  components: {
    'test': testC
  },
  data: {
    arr: ['A', 'B']
  },
  methods: {
    changeArr: function(data){
      this.arr = data
    }
  }
})
