<template>
  <div class="home text-center">
    <h1>Vista Home</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <PostsView />
  </div>
</template>

<script>
import PostsView from './PostsView.vue';

export default {
  name: 'HomeView',
  components: {
    PostsView
}
}
</script>

<style scoped>

</style>
