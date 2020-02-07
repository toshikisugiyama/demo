<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container fluid class="menu">
      <v-row class="mb-5 justify-center menu__title">
        <h1>{{ currentMenu.toUpperCase() }}</h1>
      </v-row>
      <v-list
        v-if="currentMenu == 'drink'"
        two-line
        color="rgba(0,0,0,0)"
      >
        <v-list-item
          v-for="menu in drinks"
          :key="menu.id"
        >
          <v-list-item-content>
            <v-list-item-title v-text="menu.name" />
            <v-list-item-subtitle v-text="addComma(menu.price) + '円'" class="text-right" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list
        v-else-if="currentMenu == 'pasta'"
        two-line
        color="rgba(0,0,0,0)"
      >
        <v-list-item
          v-for="menu in pastas"
          :key="menu.id"
        >
          <v-list-item-content>
            <v-list-item-title v-text="menu.name" />
            <v-list-item-subtitle v-text="addComma(menu.price) + '円'" class="text-right" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list
        v-else-if="currentMenu == 'rice'"
        two-line
        color="rgba(0,0,0,0)"
      >
        <v-list-item
          v-for="menu in rices"
          :key="menu.id"
        >
          <v-list-item-content>
            <v-list-item-title v-text="menu.name" />
            <v-list-item-subtitle v-text="addComma(menu.price) + '円'" class="text-right" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list
        v-else-if="currentMenu == 'dessert'"
        two-line
        color="rgba(0,0,0,0)"
      >
        <v-list-item
          v-for="menu in desserts"
          :key="menu.id"
        >
          <v-list-item-content>
            <v-list-item-title v-text="menu.name" />
            <v-list-item-subtitle v-text="addComma(menu.price) + '円'" class="text-right" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      currentMenu: this.$route.path.slice(6)
    }
  },
  computed: {
    drinks () {
      return this.$store.getters.getDrinks
    },
    pastas () {
      return this.$store.getters.getPastas
    },
    rices () {
      return this.$store.getters.getRices
    },
    desserts () {
      return this.$store.getters.getDesserts
    }
  },
  methods: {
    addComma (num) {
      return Number(num).toLocaleString()
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
