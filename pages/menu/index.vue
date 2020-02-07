<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container fluid class="menu">
      <v-row class="mb-5 justify-center menu__title">
        <h1>{{ title.toUpperCase() }}</h1>
      </v-row>
      <v-row class="flex-column flex-md-row menu__contents" tag="section">
        <v-col
          v-for="menu in menus"
          :key="menu.name"
          md="6"
        >
          <nuxt-link :to="menu.path">
            <v-card>
              <v-img
                :src="menu.src"
              />
              <v-card-title v-text="menu.name.toUpperCase()" class="justify-center" />
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      title: this.$route.path.slice(1)
    }
  },
  computed: {
    menus () {
      return this.$store.getters.getMenus
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
  &__contents{
    .col{
      a{
        text-decoration: none;
      }
    }
  }
}
</style>
