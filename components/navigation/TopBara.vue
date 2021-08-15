<template>
  <v-app-bar
    color="white"
    clipped
    flat
    app
    prominent
    style="border-top: solid 5px black !important"
    hide-on-scroll
  >
    <div class="d-flex flex-column">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>
      <nuxt-link :to="localePath('/')" style="transition: all 500ms ease 0s">
        <v-img src="/logo_text.svg" contain class="logo"></v-img
      ></nuxt-link>
      <div class="d-flex ml-6 my-3">
        <v-menu offset-y open-on-hover bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text>
              {{ $t('institute') }}
              <v-icon right>mdi-chevron-down</v-icon></v-btn
            >
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in institute"
              :key="index"
              nuxt
              :to="item.path"
            >
              <v-list-item-title>{{ $t(item.text) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y open-on-hover bottom>
          <template #activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              {{ $t('research') }}<v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in research"
              :key="index"
              nuxt
              :to="item.path"
            >
              <v-list-item-title>{{ $t(item.text) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn text nuxt to="/events"> {{ $t('events') }} </v-btn>
        <v-btn text nuxt to="/library"> {{ $t('library') }} </v-btn>
        <v-menu offset-y open-on-hover bottom>
          <template #activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text>
              {{ $t('apply') }}<v-icon right>mdi-chevron-down</v-icon></v-btn
            >
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in apply"
              :key="index"
              nuxt
              :to="item.path"
            >
              <v-list-item-title>{{ $t(item.text) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-app-bar>
</template>
<script>
import sitemap from '~/assets/sitemap'
export default {
  props: {},
  data() {
    return {
      ...sitemap,
    }
  },
  computed: {},
  mounted() {},
}
</script>
<style lang="scss">
.logo {
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-property: color, background, text-shadow;
  transition: all 0.5s ease;
  transform-origin: left top;
  width: 450px !important;
  margin-left: 40px;
}
.v-app-bar--is-scrolled .logo {
  position: relative;
  width: 250px !important;
  height: auto !important;
  transition: all 0.5s ease;
  transform-origin: left top;
  -webkit-transform: translateZ(0);
  transform: scale(0.9);
  margin-left: 40px;
}
</style>
