<template>
  <v-container tag="section" class="menu px-md-0">
    <v-row class="mb-5 justify-center menu__title">
      <v-col
        v-text="title.toUpperCase()"
        tag="h1"
        class="text-center mb-5"
      />
    </v-row>
    <v-row class="menu__contents">
      <v-col
        v-for="menu in menus"
        :key="menu.name"
        :class="orderForMd(menu.id)"
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
        :class="{'text-right': n%2===0}"
        cols="4"
        md="2"
        class="pa-0"
      >
        <v-btn
          @click="moveTo(n%2!==0?'/concept':'/news')"
          :color="storeInfo.conceptColor"
          tile
          large
          text
        >
          <v-icon v-if="n%2!==0">
            mdi-arrow-left
          </v-icon>
          {{ n%2!==0?'concept':'news' }}
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
    menus () { return this.$store.getters.getMenus },
    storeInfo () { return this.$store.getters.getStoreInfo }
  },
  methods: {
    moveTo (path) { this.$router.push(path) },
    orderForMd (id) {
      if (id % 4 === 3) {
        return 'order-md-' + Number(id + 1)
      }
    }
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
