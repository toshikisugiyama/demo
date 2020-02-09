<template>
  <v-container tag="section" class="news">
    <v-row class="mb-5 justify-center news__title">
      <v-col
        v-text="title.toUpperCase()"
        tag="h1"
        class="text-center mb-5"
      />
    </v-row>
    <v-row class="news__contents">
      <v-col v-if="news" class="pa-0">
        <v-list
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
      </v-col>
      <v-col v-else v-text="`新しい情報はありません。`" tag="h3" class="pa-0" />
    </v-row>
    <v-row class="py-5" justify="space-between">
      <v-col
        v-for="n in 2"
        :key="n"
        :class="{'text-right': n%2===0}"
        cols="4"
        md="2"
        class="pa-0"
      >
        <v-btn
          @click="moveTo(n%2!==0?'/menu':'/access')"
          :color="storeInfo.conceptColor"
          tile
          large
          text
        >
          <v-icon v-if="n%2!==0">
            mdi-arrow-left
          </v-icon>
          {{ n%2!==0?'menu':'access' }}
          <v-icon v-if="n%2===0">
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: this.$route.path.slice(1).replace(/\/$/, '')
    }
  },
  computed: {
    news () { return this.$store.getters.getNews },
    storeInfo () { return this.$store.getters.getStoreInfo }
  },
  methods: {
    moveTo (path) { this.$router.push(path) }
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
