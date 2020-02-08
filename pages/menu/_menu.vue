<template>
  <v-container class="menu px-md-0">
    <v-row class="mb-5 justify-center menu__title">
      <v-col
        v-text="currentMenu.toUpperCase()"
        tag="h1"
        class="text-center mb-5"
      />
    </v-row>
    <v-row tag="section">
      <v-col cols="12" class="pa-0">
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
      </v-col>
    </v-row>
    <v-row class="py-5" justify="space-between">
      <v-col
        cols="4"
        md="2"
        class="pa-0"
      >
        <v-btn
          @click="goBack"
          :color="storeInfo.conceptColor"
          tile
          large
          text
        >
          <v-icon>
            mdi-arrow-left
          </v-icon>
          back
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      currentMenu: this.$route.path.slice(6)
    }
  },
  computed: {
    drinks () { return this.$store.getters.getDrinks },
    pastas () { return this.$store.getters.getPastas },
    rices () { return this.$store.getters.getRices },
    desserts () { return this.$store.getters.getDesserts },
    storeInfo () { return this.$store.getters.getStoreInfo }
  },
  methods: {
    addComma (num) { return Number(num).toLocaleString() },
    goBack () { this.$router.go(-1) }
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
