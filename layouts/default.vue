<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      color="rgba(0,0,0,0)"
      fixed
      app
      flat
    >
      <nuxt-link v-if="this.$route.path !== '/'" to="/">
        <v-toolbar-title v-text="title.toUpperCase()" />
      </nuxt-link>
      <v-spacer />
      <v-btn
        @click.stop="rightDrawer = !rightDrawer"
        icon
      >
        <v-icon color="#EC5016">
          mdi-menu
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="rightDrawer = !rightDrawer">
          <v-list-item-action>
            <v-icon light>
              mdi-arrow-right
            </v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item-group>
          <nuxt-link
            :to="page.path"
            v-for="page in pages"
            :key="page.name"
          >
            <v-list-item v-text="page.name.toUpperCase()" />
          </nuxt-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      color="rgba(0,0,0,0)"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'logo'
    }
  },
  computed: {
    pages () {
      return this.$store.getters.getPages
    }
  }
}
</script>

<style lang="scss" scoped>
a, a:hover {
  text-decoration: none;
}
#app{
  background-image: url('../assets/images/wine-541922_1920.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  .v-toolbar{
    color: $concept-color;
    &__title{
      color: $concept-color
    }
  }
}
</style>
