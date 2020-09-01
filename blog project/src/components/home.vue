<template>
  <div class="jumbotron">
    <h1>Welcome</h1>
    <hr />
    <p>
      <router-link to="/blog" exact>blog</router-link>
      &nbsp;|&nbsp;
      <router-link to="/gallery" exact>gallery</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style>

</style>
