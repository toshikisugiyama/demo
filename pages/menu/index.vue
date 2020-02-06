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
      <v-container fluid class="menu">
        <v-row class="mb-5 justify-center menu__title">
          <h1>menu</h1>
        </v-row>
        <v-row class="flex-column flex-md-row" tag="section">
          <v-col
            v-for="menu in menus"
            :key="menu.title"
            md="6"
          >
            <nuxt-link :to="menu.path">
              <v-card>
                <v-img
                  :src="menu.src"
                ></v-img>
                <v-card-title v-text="menu.title"></v-card-title>
              </v-card>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import drinkImg from '@/assets/images/wine-890370_640.jpg'
import pastaImg from '@/assets/images/pasta-2571391_640.jpg'
import riceImg from '@/assets/images/paella-2246527_640.jpg'
import dessertImg from '@/assets/images/cheesecake-3761196_640.jpg'
export default {
  data () {
    return {
      menus: [
        {
          title: 'drink',
          src: drinkImg,
          path: '/menu/drink'
        },
        {
          title: 'pasta',
          src: pastaImg,
          path: '/menu/pasta'
        },
        {
          title: 'rice',
          src: riceImg,
          path: '/menu/rice'
        },
        {
          title: 'dessert',
          src: dessertImg,
          path: '/menu/dessert'
        }
      ]
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
}
</style>
