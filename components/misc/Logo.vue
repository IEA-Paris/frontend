<template>
  <nuxt-link
    :to="localePath('/')"
    style=""
    class="d-flex align-center logo-text"
    :class="{ scrolled: $store.state.scrolled }"
    :color="color"
    @click.native="$vuetify.goTo(0)"
  >
    <v-img
      v-if="[1, 6].includes($store.state.logo)"
      class="mx-2 logo-image"
      src="/frontend/icon.png"
      :class="{ scrolled: $store.state.scrolled }"
      contain
    ></v-img>
    <v-img
      v-if="$store.state.logo === 2"
      class="mx-2 logo-image"
      src="/frontend/logo_bn.png"
      :class="{ scrolled: $store.state.scrolled }"
      contain
    ></v-img>
    <v-img
      v-if="[3, 5].includes($store.state.logo)"
      class="mx-2 logo-image"
      src="/frontend/logo_bni.png"
      :class="{ scrolled: $store.state.scrolled }"
      contain
    ></v-img>
    <v-img
      v-if="$store.state.logo === 4"
      class="mx-2 logo-image2"
      src="/frontend/bridge.png"
      :class="{ scrolled: $store.state.scrolled }"
      contain
    ></v-img>
    <v-img
      v-if="$store.state.logo === 7"
      class="logo-image"
      src="/carre.svg"
      :class="{ scrolled: $store.state.scrolled }"
      contain
    ></v-img>
    <span v-if="![5, 6, 7].includes($store.state.logo)" ref="text1" class="logo-1">
      {{ $i18n.locale === 'en' ? 'PARIS' : 'IEA' }}
    </span>
    &nbsp;&nbsp;
    <span v-if="![5, 6, 7].includes($store.state.logo)" ref="text2" class="logo-2">
      {{ $i18n.locale === 'en' ? 'IAS' : 'PARIS' }}
    </span>
    <span v-if="$store.state.logo === 7" ref="text2" class="logo-3">
      {{ $i18n.locale === 'en' ? 'Paris Institute for Advanced Studies' : "Institut d'études avancées de Paris" }}
    </span>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '#000',
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style scoped>
.index#main-app-bar {
  border-top: solid 0.8rem #000 !important;
}

#main-app-bar.scrolled,
#main-app-bar:not(.index) {
  border-top: solid 0.4rem #000 !important;
}

.scrolled.logo-text {
  position: relative;
  max-width: 150px !important;
  height: auto !important;
  transition-delay: 1s;
  -webkit-transform: translateZ(0);
  transform: scale(0.9);
  margin-left: 40px;
  margin-bottom: 15px;
}

.menu {
  margin-top: 15px;
}

.scrolled .menu {
  margin-top: 5px;
}

.logo-text:link,
.logo-text:visited,
.logo-text:hover,
.logo-text:active,
.logo-text {
  transition: all 0.5s ease;
  transform-origin: left top;
  max-width: 800px !important;
  width: 100%;
  margin-left: 40px;
  margin-bottom: 25px;
  line-height: 6rem;
  color: var(--color);
  text-decoration: none;
  margin-top: 1.4rem;
  margin-bottom: 1.2rem;
  margin-left: 2.4rem;
}

.logo-2 {
  font-size: 6.2rem;
  font-weight: 500;
  font-family: 'Bodonis Moda';
  letter-spacing: 0.2px;
}

.logo-1 {
  font-size: 6.5rem;
  font-family: 'Roboto';
  font-weight: 100;
}
.logo-3 {
  font-size: 3.2rem;
  font-family: 'Roboto';
  font-weight: 300;
  transition: all 0.5s ease;
  transform-origin: left top;
  margin-left: 20px;
  line-height: 3.2rem;
  color: var(--color);
  text-decoration: none;
  text-transform: uppercase;
}
.logo-image {
  max-height: 150px;
  max-width: 150px;
}
.logo-image2 {
  max-height: 150px;
  max-width: 180px;
  margin-top: -8px;
}
.scrolled.logo-text {
  line-height: 3rem;
  color: var(--color);
  text-decoration: none;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
}

.scrolled .logo-2 {
  font-size: 3rem !important;
  font-weight: 700;
  font-family: 'Bodoni Moda';
  letter-spacing: 0.2px;
}

.scrolled .logo-1 {
  font-size: 3.3rem !important;
  font-family: 'Roboto';
  font-weight: 100;
}
.scrolled .logo-image {
  max-height: 50px;
  max-width: 50px;
}
.scrolled .logo-image2 {
  max-height: 50px;
  max-width: 150px;
  margin-top: -2px;
}
</style>
