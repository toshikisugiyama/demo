<template>
  <v-container class="access px-md-0">
    <v-row class="mb-5 justify-center access__title">
      <v-col
        v-text="title.toUpperCase()"
        tag="h1"
        class="text-center mb-5"
      />
    </v-row>
    <v-row tag="section">
      <v-col
        v-text="storeInfo.access"
        tag="p"
        cols="12"
        class="ma-0 pa-0"
      />
      <v-col
        v-text="`${storeInfo.openingTime}(${storeInfo.closedDay}定休)`"
        tag="p"
        cols="12"
        class="ma-0 pa-0 mb-5"
      />
      <v-col cols="12" class="ma-0 pa-0">
        <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />
      </v-col>
    </v-row>
    <v-row class="py-5" justify="space-between">
      <v-col
        v-for="n in 2"
        :key="n"
        cols="4"
        md="2"
        class="pa-0"
      >
        <v-btn
          @click="moveTo(n%2!==0?'/news':'/')"
          :color="storeInfo.conceptColor"
          tile
          large
          text
        >
          <v-icon v-if="n%2!==0">
            mdi-arrow-left
          </v-icon>
          {{ n%2!==0?'news':'top' }}
          <v-icon v-if="n%2===0">
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import interiorImg1 from '@/assets/images/brick-wall-1834784_640.svg'
import interiorImg2 from '@/assets/images/bar-918541_640.svg'
export default {
  data () {
    return {
      title: this.$route.path.slice(1).replace(/\/$/, ''),
      interiorImg1,
      interiorImg2
    }
  },
  computed: {
    storeInfo () { return this.$store.getters.getStoreInfo }
  },
  methods: {
    moveTo (path) { this.$router.push(path) }
  }
}
</script>

<style lang="scss" scoped>
.access{
  &__title {
    h1{
      color: $concept-color;
    }
  }
}
</style>
