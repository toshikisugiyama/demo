<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container fluid class="access">
      <v-row class="mb-5 justify-center access__title">
        <h1>{{ title.toUpperCase() }}</h1>
      </v-row>
      <p>〇〇駅より徒歩○分</p>
      <p>17:00〜25:00(月曜定休)</p>
      <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />
    </v-container>
  </v-layout>
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
