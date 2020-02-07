<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      color="rgba(0,0,0,0)"
      fixed
      app
      flat
    >
      <v-container>
        <v-row>
          <nuxt-link v-if="this.$route.path !== '/'" to="/">
            <v-toolbar-title v-text="title.toUpperCase()" />
          </nuxt-link>
          <v-spacer />
          <v-btn
            @click.stop="rightDrawer = !rightDrawer"
            icon
          >
            <v-icon :color="color">
              mdi-menu
            </v-icon>
          </v-btn>
        </v-row>
      </v-container>
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
      v-if="$route.path !== '/'"
      :color="color"
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-row>
              <v-col
                v-for="item in snsIcons"
                :key="item.name"
                cols="4"
              >
                <v-img
                  :src="item.src"
                  height="30"
                  width="30"
                />
              </v-col>
            </v-row>
            <p>Tel</p>
            <p>Email</p>
          </v-col>
          <v-col cols="12" md="4">
            <h3>{{ title }}</h3>
          </v-col>
          <v-col cols="12" md="4">
            <p>17:00〜25:00(月曜定休)</p>
            <p>〒〇〇○-○○○○</p>
            <p>〇〇県〇〇市〇〇</p>
            <p>〇丁目〇番地〇</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import lineLogo from '@/assets/images/line.svg'
import facebookLogo from '@/assets/images/facebook.svg'
import twitterLogo from '@/assets/images/twitter.svg'
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      color: '#EC5016',
      title: 'logo',
      snsIcons: [
        {
          name: 'line',
          src: lineLogo,
          url: '#'
        },
        {
          name: 'facebook',
          src: facebookLogo,
          url: '#'
        },
        {
          name: 'twitter',
          src: twitterLogo,
          url: '#'
        }
      ]
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
  background-color: rgba(0, 0, 0, 0.3);
  .v-toolbar{
    color: $concept-color;
    &__title{
      color: $concept-color
    }
  }
}
#app::before {
  content: "";
  background: url('../assets/images/wine-541922_1920.svg') no-repeat center center;
  background-size: cover;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transform: translateZ(0);
}
</style>
