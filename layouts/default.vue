<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      color="rgba(0,0,0,0)"
      fixed
      app
      flat
    >
      <v-container class="header__container pa-0">
        <v-row align="center">
          <v-col cols="6" md="2">
            <v-toolbar-title
              v-text="storeInfo.logo.toUpperCase()"
              v-if="this.$route.path !== '/'"
              @click="toToppage"
              class="font-italic font-weight-light"
            />
          </v-col>
          <v-spacer />
          <v-btn
            @click.stop="rightDrawer = !rightDrawer"
            icon
          >
            <v-icon :color="storeInfo.conceptColor">
              mdi-menu
            </v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-content>
      <nuxt />
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
      :color="storeInfo.conceptColor"
    >
      <v-container
        tag="section"
        class="footer__container"
      >
        <v-row
          justify="center"
          align="center"
          class="footer__container__row"
        >
          <v-col
            cols="12"
            md="4"
            tag="section"
            class="footer__container__row__contact"
          >
            <v-row
              justify="center"
              align="center"
              class="footer__container__row__contact__sns justify-md-start pb-5"
            >
              <v-col
                v-for="(item, index) in snsIcons"
                :key="item.name"
                cols="3"
                class="footer__container__row__contact__sns__icon pa-0"
              >
                <v-img
                  :src="item.src"
                  @click="toSNS(index)"
                  height="30"
                  width="30"
                  class="mx-auto ml-md-0"
                />
              </v-col>
            </v-row>
            <v-row class="footer__container__row__contact__wrapper">
              <v-col
                v-text="`Tel: ${storeInfo.telNum}`"
                tag="p"
                cols="12"
                class="text-center text-md-left footer__container__row__contact__wrapper_tel pa-0"
              />
              <v-col
                v-text="`Email: ${storeInfo.email}`"
                tag="p"
                cols="12"
                class="text-center text-md-left footer__container__row__contact__wrapper_email pa-0"
              />
            </v-row>
          </v-col>
          <v-col
            @click="toToppage"
            v-text="storeInfo.logo.toUpperCase()"
            cols="12"
            sm="10"
            md="4"
            tag="h1"
            class="mx-auto text-center display-4 font-italic font-weight-light footer__container__row__logo"
          />
          <v-col cols="12" md="4">
            <v-row>
              <v-col
                v-text="`${storeInfo.openingTime}(${storeInfo.closedDay}定休)`"
                tag="p"
                class="text-center text-md-right pr-md-0"
              />
            </v-row>
            <v-row>
              <v-col
                v-text="`〒${storeInfo.postNum}`"
                cols="12"
                tag="p"
                class="text-center text-md-right pa-0"
              />
              <v-col
                v-text="storeInfo.address"
                cols="12"
                tag="p"
                class="text-center text-md-right pa-0"
              />
            </v-row>
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
    pages () { return this.$store.getters.getPages },
    storeInfo () { return this.$store.getters.getStoreInfo }
  },
  methods: {
    toSNS (num) { return this.$router.push(this.snsIcons[num].url) },
    toToppage () { return this.$router.push('/') }
  }
}
</script>

<style lang="scss" scoped>
@mixin background(){
  content: "";
  background-size: cover;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  transform: translateZ(0);
}
a, a:hover {
  text-decoration: none;
}
#app{
  background-color: rgba(0, 0, 0, 0);
  &::before {
    background: url('../assets/images/wine-541922_1920.svg') no-repeat center center;
    @include background;
  }
  &::after{
    background-color: rgba(0, 0, 0, 0.6);
    @include background;
  }
  .v-toolbar{
    color: $concept-color;
    &__title{
      color: $concept-color;
      cursor: pointer;
    }
  }
  .footer__container{
    &__row{
      color: #000;
      &__contact{
        &__sns{
          &__icon{
            .v-image{
              cursor: pointer;
            }
          }
        }
      }
      &__logo{
        cursor: pointer;
        color: $concept-color;
        filter: drop-shadow(0px 0px 5px rgba(0,0,0,0.6));
      }
    }
  }
}
</style>
