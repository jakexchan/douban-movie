<template>
  <div>
    <v-header>
      <v-go-back></v-go-back>
    </v-header>
    <div class="movie-info">
      <div class="image">
        <img :src="info.images.large" />
      </div>
      <h1 class="title">{{ info.title }} / {{ info.original_title }}</h1>
      <ul class="info-list">
        <li>
          <span class="label">又名: </span>{{ info.aka.join('/') }}
        </li>
        <li><span class="label">年份: </span>{{ info.year }}</li>
        <li><span class="label">类型: </span>{{ info.genres.join('/') }}</li>
        <li><span class="label">国家/地区: </span>{{ info.countries.join('/') }}</li>
        <li><span class="label">年份: </span>{{ info.year }}</li>
        <li><span class="label">导演: </span>{{ info.directors.map(v => v.name).join('/') }}</li>
        <li><span class="label">演员: </span>{{ info.casts.map(v => v.name).join('/') }}</li>
        <li><span class="label">简介: </span>{{ info.summary }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vHeader from '../layout/Header.vue'
import vGoBack from '../layout/GoBack.vue'

export default {
  name: 'vMovie',
  computed: mapGetters({
    info: 'movie'
  }),
  components: {
    vHeader,
    vGoBack
  },
  created () {
    this.$store.dispatch('getMovieInfo', this.$route.params.id)
  }
}
</script>

<style scoped>
.movie-info {
  padding-top: 1.25rem;
}

.title {
  font-size: .625rem;
  margin: .25rem 0;
}

.image {
  padding: .187rem 0;
}

.info-list {
  padding: 0 .25rem;
  font-size: .437rem;
  text-align: left;
  line-height: 150%;
}

.info-list > li {
  padding-bottom: .125rem;
}

.info-list > li > .label {
  color: #666;
}

</style>
