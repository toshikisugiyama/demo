<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container fluid class="news">
      <v-row class="mb-5 justify-center news__title">
        <h1>{{ title.toUpperCase() }}</h1>
      </v-row>
      <section class="news__contents">
        <h2 class="news__contents__title">
          {{ news[articleId - 1].title }}
        </h2>
        <p class="news__contents__date">
          {{ news[articleId - 1].date }}
        </p>
        <p class="news__contents__contents">
          {{ news[articleId - 1].contents }}
        </p>
      </section>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      title: this.$route.path.slice(1, 5).replace(/\/$/, ''),
      articleId: this.$route.path.slice(6).replace(/\/$/, '')
    }
  },
  computed: {
    news () {
      return this.$store.getters.getNews
    }
  }
}
</script>

<style lang="scss" scoped>
.news{
  &__title {
    h1{
      color: $concept-color;
    }
  }
  &__contents{
    &__date {
      text-align: right;
    }
  }
}
</style>
