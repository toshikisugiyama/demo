<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container fluid class="concept">
      <v-row class="mb-5 justify-center concept__title">
        <h1>{{ title.toUpperCase() }}</h1>
      </v-row>
      <v-row class="flex-column flex-md-row" tag="section">
        <v-col md="6">
          <h2>コンセプト1</h2>
          <p>ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。</p>
        </v-col>
        <v-col md="6">
          <v-img :src="interiorImg1" alt="interior" />
        </v-col>
      </v-row>
      <v-row class="flex-column flex-md-row" tag="section">
        <v-col md="6" class="order-md-2">
          <h2>コンセプト2</h2>
          <p>ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。</p>
        </v-col>
        <v-col md="6">
          <v-img :src="interiorImg2" alt="interior" />
        </v-col>
      </v-row>
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
.concept{
  &__title {
    h1{
      color: $concept-color;
    }
  }
}
</style>
