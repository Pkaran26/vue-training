<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog" exact>Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/gallery" exact>Gallery</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  .router-link-active {
    color:white;
    font-weight: 700;
  }
</style>
