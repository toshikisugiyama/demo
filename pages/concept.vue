<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container fluid class="concept">
      <v-row class="mb-5 justify-center concept__title">
        <v-col v-text="title.toUpperCase()" tag="h1" class="text-center" />
      </v-row>
      <v-row
        v-for="n in 2"
        :key="n"
        tag="section"
        class="flex-column flex-md-row mb-5"
      >
        <v-col :class="{'order-md-2': n%2===0}" md="6">
          <v-col v-text="concept.title + n" tag="h2" class="12" />
          <v-col v-text="concept.content" tag="p" cols="12" />
        </v-col>
        <v-col md="6">
          <v-img
            :src="n%2===0?interiorImg2:interiorImg1"
            alt="interior"
          />
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
      interiorImg2,
      concept: {
        title: 'コンセプト',
        content: 'ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。ここに店のコンセプトが入る。'
      }
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
