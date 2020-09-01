<template>
  <form method="post" @submit="submitHandle">
    <label>Title:- </label>
    <input type="text" v-model.lazy="blog.title" required />
    <br/>
    <label>Body:- </label>
    <input type="text" v-model="blog.body" required />
    <div id="checkboxes">
      <p>Categories</p>
      <label>Article</label>
      <input type="checkbox" value="Article" v-model="blog.categories" />
      <label>Poem</label>
      <input type="checkbox" value="Poem" v-model="blog.categories" />
    </div>
    <div>
      <label>Author:- </label>
      <select v-model="blog.author">
        <option value="">select</option>
        <option v-for="a in authors" v-bind:value="a" v-bind:key="a">{{ a }}</option>
      </select>
    </div>
    <input type="submit" value="submit" />
  </form>
  <div>
    <p>title:- {{ blog.title }}</p>
    <p>body:- {{ blog.body }}</p>
    <p>categories:- </p>
    <ul>
      <li v-for="c in blog.categories" v-bind:key="c">{{ c }}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'Form',
    data(){
      return {
        authors: ['Prateek', 'Karan', 'Kittu'],
        blog: {
          title: '',
          body: '',
          categories: [],
          author: ''
        }
      }
    },
    methods: {
      submitHandle: function(e){
        e.preventDefault()
        console.log(this.blog)
      }
    }
  }
</script>

<style>

</style>
