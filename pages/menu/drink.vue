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
      <v-container fluid class="drink">
        <v-row class="mb-5 justify-center drink__title">
          <h1>drink</h1>
        </v-row>
        <v-list>
          <v-list-item
            v-for="drink in getDrinks"
            :key="drink.id"
          >
            <v-list-item-content>
              <v-list-item-title v-text="drink.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      drinks: ''
    }
  },
  methods: {
    getDrinks () {
      return this.$store.getters.getDrinks
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
