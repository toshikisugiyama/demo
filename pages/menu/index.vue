<template>
  <v-container fluid class="menu px-md-0">
    <v-row class="mb-5 justify-center menu__title">
      <v-col
        v-text="title.toUpperCase()"
        tag="h1"
        class="text-center mb-5"
      />
    </v-row>
    <v-row
      class="menu__contents"
      tag="section"
    >
      <v-col
        v-for="menu in menus"
        :key="menu.name"
        :class="{'order-md-4': menu.id===3}"
        cols="12"
        md="6"
        class="menu__contents__item"
      >
        <v-card
          @click="moveTo(menu.path)"
          :color="menu.id%2===0?storeInfo.conceptColor:'#333'"
          class="menu__contents__item__card"
        >
          <v-img
            :src="menu.src"
          />
          <v-card-title
            v-text="menu.name.toUpperCase()"
            class="justify-center"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-row class="py-5" justify="space-between">
      <v-col
        v-for="n in 2"
        :key="n"
        @click="moveTo(n%2!==0?'/concept':'/news')"
        :color="storeInfo.conceptColor"
        cols="4"
        md="2"
        tag="v-btn"
        tile
        large
        icon
        flex
        class="pa-0"
      >
        <v-icon v-if="n%2!==0">
          mdi-arrow-left
        </v-icon>
        {{ n%2!==0?'concept':'news' }}
        <v-icon v-if="n%2===0">
          mdi-arrow-right
        </v-icon>
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
    menus () { return this.$store.getters.getMenus },
    storeInfo () { return this.$store.getters.getStoreInfo }
  },
  methods: {
    moveTo (path) { this.$router.push(path) }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  &__title {
    h1{
      color: $concept-color;
    }
  }
  &__contents{
    &__item{
      &__card{
        cursor: pointer;
      }
    }
  }
}
</style>
