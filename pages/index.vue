<template>
  <v-row
    justify="center"
    align="center"
    tag="section"
    class="toppage"
  >
    <v-col
      @click="toConcept"
      v-text="storeInfo.logo.toUpperCase()"
      cols="12"
      md="4"
      tag="h1"
      class="toppage__title text-center display-4 font-italic font-weight-light"
    />
  </v-row>
</template>

<script>
export default {
  computed: {
    storeInfo () { return this.$store.getters.getStoreInfo }
  },
  methods: {
    toConcept () { this.$router.push('/concept') }
  }
}
</script>

<style lang="scss" scoped>
.toppage{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  &__title{
    cursor: pointer;
    color: $concept-color;
    filter: drop-shadow(0px 0px 5px rgba(255,255,255,0.4));
  }
}
</style>
