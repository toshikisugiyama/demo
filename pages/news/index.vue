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
      <v-list
        v-if="news"
        three-line
        color="rgba(255,255,255,0)"
        dark
        class="news__contents"
      >
        <nuxt-link
          v-for="item in news"
          :key="item.id"
          :to="$route.path + '/' + item.id"
        >
          <v-list-item-group>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle v-text="item.date" />
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </nuxt-link>
      </v-list>
      <h2 v-else>
        新しい情報はありません。
      </h2>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      title: this.$route.path.slice(1)
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
    a{
      text-decoration: none;
    }
  }
}
</style>
