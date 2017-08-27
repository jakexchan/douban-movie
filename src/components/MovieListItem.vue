<template>
  <li　class="movies-list-item" @click="goMovieDetail">
    <div class="image-box">
      <img :src="info.images.small" alt="info.title" />
    </div>
    <div class="info-box">
      <div class="title">{{ `${info.title} / ${info.original_title}` }}</div>
      <div class="basic-info">{{ info.year }} / {{ info.genres.join(', ')}}</div>
      <div class="directors">
        <span>导演: </span>
        <span>{{ info.directors.map(v => v.name).join(' / ') }}</span>
      </div>
      <div class="casts">
        <span>主演: </span>
        <span>{{ info.casts.map(v => v.name).join(' / ') }}</span>
      </div>
      <div class="rating">
        <span>评分: </span>
        <span>{{ info.rating.average }}</span>
      </div>
    </div>
  </li>
</template>

<script>
import router from '../router'

export default {
  name: 'vMovieListItem',
  props: {
    info: {
      type: Object
    }
  },
  methods: {
    goMovieDetail () {
      router.push({ name: 'Movie', params: { id: this.info.id } })
    }
  }
}
</script>

<style scoped>
.movies-list-item {
  padding: .25rem .375rem;
  border-bottom: 1px #eee solid;
  display: flex;
}

.movies-list-item > .image-box {
  margin-right: .312rem;
}

.movies-list-item > .image-box > .img {
  width: 2.031rem;
  height: 3.125rem;
  background-color: red;
}

.movies-list-item > .info-box {
  text-align: left;
  min-width: 0;
}

.info-box > div {
  padding: .125rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.info-box > .title {
  font-size: .406rem;
  font-weight: 600;
}

.basic-info,
.directors,
.casts {
  font-size: .312rem;
}

.rating {
  font-size: .375rem;
}

</style>

