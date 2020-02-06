<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-container class="concept">
        <v-row class="mb-5 justify-center concept__title">
          <h1>concept</h1>
        </v-row>
        <v-row class="flex-column flex-md-row" tag="section">
          <v-col md="6">
            <h2>コンセプト1</h2>
            <p>ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。</p>
          </v-col>
          <v-col md="6">
            <v-parallax :src="interiorImg1"></v-parallax>
          </v-col>
        </v-row>
        <v-row class="flex-column flex-md-row" tag="section">
          <v-col md="6" class="order-md-2">
            <h2>コンセプト2</h2>
            <p>ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。</p>
          </v-col>
          <v-col md="6">
            <v-parallax :src="interiorImg2"></v-parallax>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import interiorImg1 from '@/assets/images/brick-wall-1834784_640.jpg'
import interiorImg2 from '@/assets/images/bar-918541_640.jpg'
export default {
  data () {
    return {
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
