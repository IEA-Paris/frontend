<template>
  <nuxt-link :to="localePath('/')" class="d-flex align-center logo-text" @click.native="$vuetify.goTo(0)">
    <span class="logo-1">PARIS</span>
    &nbsp;&nbsp;
    <span class="logo-2">IAS</span>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    big: {
      type: Boolean,
      default: false,
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
<style lang="scss">
/* 
$min_width: 150px;
$max_width: 500px;
$min_font: 2rem;
$max_font: 7rem;

.logo-text,
.logo-text:link,
.logo-text:visited,
.logo-text:hover,
.logo-text:active,
.logo-text {
  color: #000;
  text-decoration: none;
  transition: all 500ms ease 0s;
  margin-left: 0.5rem;
  min-width: 150px;
  max-width: 500px;
  width: 100%;
  height: 68px;
  @include fluid-type($min_width, $max_width, $min_font, $max_font);
}

.logo-1 {
  @include fluid-type($min_width, $max_width, $min_font, $max_font);
  font-weight: 700;
  font-family: 'Bodoni Moda';
  letter-spacing: 0.2px;
  min-width: 150px;
  max-width: 500px;
  width: 100%;
  height: 68px;
}

.logo-2 {
  @include fluid-type($min_width, $max_width, $min_font, $max_font);
  font-family: 'Roboto';
  font-weight: 100;
} */
</style>
