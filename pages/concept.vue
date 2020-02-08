<template>
  <v-container class="concept px-md-0">
    <v-row class="mb-5 justify-center concept__title">
      <v-col
        v-text="title.toUpperCase()"
        tag="h1"
        class="text-center mb-5"
      />
    </v-row>
    <v-row
      v-for="n in 2"
      :key="n"
      tag="section"
      align="center"
      class="flex-column flex-md-row mb-5"
    >
      <v-col :class="{'order-md-2': n%2===0}" md="6">
        <v-col v-text="concept.title + n" tag="h2" cols="12" />
        <v-col v-text="concept.content" tag="p" cols="12" class="px-0 ma-0" />
      </v-col>
      <v-col md="6">
        <v-img
          :src="n%2===0?interiorImg2:interiorImg1"
          alt="interior"
        />
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
          @click="moveTo(n%2!==0?'/':'/menu')"
          :color="storeInfo.conceptColor"
          tile
          large
          text
        >
          <v-icon v-if="n%2!==0">
            mdi-arrow-left
          </v-icon>
          {{ n%2!==0?'top':'menu' }}
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
      interiorImg2,
      concept: {
        title: 'コンセプト',
        content: 'ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。'
      }
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
.concept{
  &__title {
    h1{
      color: $concept-color;
    }
  }
}
</style>
