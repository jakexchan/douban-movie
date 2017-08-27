<template>
  <div class="movies">
    <h1>{{ title }}</h1>
    <ul class="movies-list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vMovieList',
  computed: {
    title () {
      return this.$store.state.movieList.title
    }
  }
}
</script>

<style scoped>
.movies {
  padding-top: 1.25rem;
}
.movies > h1 {
  padding: .187rem .375rem;
  text-align: left;
  margin-bottom: .125rem;
  font-weight: 400;
  font-size: .75rem;
}
</style>

