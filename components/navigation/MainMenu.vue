<template>
  <v-dialog
    v-model="open"
    fullscreen
    hide-overlay
    transition="dialog-top-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon x-large
        ><v-icon>mdi-menu</v-icon></v-btn
      >
    </template>
    <v-card dark>
      <template>
        <v-app-bar
          color="transparent"
          clipped
          flat
          app
          prominent
          hide-on-scroll
          height="168px"
        >
          <div class="d-flex flex-column flex-grow-1">
            <div class="d-flex flex-grow-1 align-center">
              <nuxt-link
                :to="localePath('/')"
                style="transition: all 500ms ease 0s"
                @click.native="$vuetify.goTo(0)"
              >
                <v-img src="/logo_text_alt.svg" contain class="logo"></v-img
              ></nuxt-link>
              <v-spacer></v-spacer>
              <v-btn icon x-large @click="open = false"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </div>
            <v-divider></v-divider>
          </div>
        </v-app-bar>
      </template>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      open: false,
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss">
.logo {
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-property: color, background, text-shadow;
  transition: all 0.5s ease;
  transform-origin: left top;
  width: 600px !important;
  margin-left: 40px;
  margin-bottom: 25px;
}
.v-app-bar--is-scrolled .logo {
  position: relative;
  width: 250px !important;
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
.v-app-bar--is-scrolled .menu {
  margin-top: 5px;
}
</style>
