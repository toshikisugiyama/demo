<template>
  <v-container tag="section" class="news px-md-0">
    <v-row class="mb-5 justify-center news__title">
      <v-col
        v-text="title.toUpperCase()"
        tag="h1"
        class="text-center mb-5"
      />
    </v-row>
    <v-row class="news_contents">
      <v-col
        v-text="news[articleId - 1].title"
        tag="h2"
        cols="12"
        class="news__contents__title"
      />
      <v-col
        v-text="news[articleId - 1].date"
        tag="p"
        cols="12"
        class="news__contents__date text-right"
      />
      <v-col
        v-text="news[articleId - 1].contents"
        tag="p"
        cols="12"
        class="news__contents__contents"
      />
    </v-row>
    <v-row class="py-5" justify="space-between">
      <v-col
        cols="4"
        md="2"
        class="pa-0"
      >
        <v-btn
          @click="goBack"
          :color="storeInfo.conceptColor"
          tile
          large
          text
        >
          <v-icon>
            mdi-arrow-left
          </v-icon>
          back
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
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
    news () { return this.$store.getters.getNews },
    storeInfo () { return this.$store.getters.getStoreInfo }
  },
  methods: {
    goBack () { this.$router.go(-1) }
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
}
</style>
