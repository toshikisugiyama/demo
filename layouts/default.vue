<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      color="rgba(0,0,0,0)"
      fixed
      app
      flat
    >
      <v-toolbar-title v-text="title" />
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
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="page in pages"
          :key="page.name"
        >
          <nuxt-link :to="page.name">
            {{ page.name }}
          </nuxt-link>
        </v-list-item>
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
      pages: [
        {
          name: 'top',
          path: '/'
        },
        {
          name: 'concept',
          path: '/concept'
        },
        {
          name: 'menu',
          path: '/menu'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'logo'
    }
  }
}
</script>

<style lang="scss" scoped>
#app{
  background-image: url('../assets/images/wine-541922_1920.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .v-toolbar{
    color: $concept-color;
  }
}
</style>
