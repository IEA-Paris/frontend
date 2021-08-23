<template>
  <v-dialog v-model="open" fullscreen hide-overlay transition="none">
    <!-- CLOSE BTN -->
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon x-large class=""><v-icon>mdi-menu</v-icon></v-btn>
    </template>
    <!-- APP BAR WITH LOGO -->
    <v-card dark color="black">
      <v-app-bar color="transparent" clipped flat prominent hide-on-scroll height="168px">
        <div class="d-flex flex-column flex-grow-1">
          <div class="d-flex flex-grow-1 align-center">
            <nuxt-link :to="localePath('/')" style="transition: all 500ms ease 0s" @click.native="$vuetify.goTo(0)">
              <v-img src="/logo_text_alt.svg" contain class="menu-logo"></v-img>
            </nuxt-link>
            <v-spacer></v-spacer>
            <v-btn icon x-large @click="open = false"><v-icon>mdi-close</v-icon></v-btn>
          </div>
        </div>
      </v-app-bar>
      <v-row>
        <v-col cols="12" md="4" :order="$vuetify.breakpoint.smAndDown ? 'last' : 'first'">
          <!-- SMALL PAGES LINKS (FOOTER) -->
          <div :class="{ 'ml-6': $vuetify.breakpoint.mdAndUp }">
            <v-divider style="border-color: white"></v-divider>
            <v-list dark color="black">
              <v-list-item v-for="(item, i) in footer" :key="i" :to="item.path" @click="open = false">
                <v-list-item-content>
                  <v-list-item-title v-text="$t(item.text)" class="text-uppercase text-button mb-6"></v-list-item-title>
                  <v-divider v-if="i < Object.keys(footer).length - 1"></v-divider>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <!-- MAIN MENU -->
        <v-col cols="12" md="4">
          <v-divider style="border-color: white"></v-divider>
          <!-- INSTITUTE -->
          <v-list dark color="black">
            <v-list-group :value="$route.name.startsWith('institute') ? true : false">
              <template v-slot:activator>
                <v-list-item-title class="text-uppercase text-h5 mt-3 mb-6">{{ $t('institute') }}</v-list-item-title>
              </template>
              <v-list-item
                v-for="(item, i) in institute"
                :key="i"
                nuxt
                :to="item.path"
                class="ml-3"
                @click="open = false"
              >
                <v-list-item-title v-text="$t(item.text)" class="text-uppercase text-h5 mt-3 mb-6"></v-list-item-title>
              </v-list-item>
            </v-list-group>
            <v-divider></v-divider>
            <!-- RESEARCH -->
            <v-list-group :value="$route.name.startsWith('research') ? true : false">
              <template v-slot:activator>
                <v-list-item-title class="text-uppercase text-h5 mt-3 mb-6">{{ $t('research') }}</v-list-item-title>
              </template>
              <v-list-item
                v-for="(item, i) in research"
                :key="i"
                nuxt
                :to="item.path"
                class="ml-3"
                @click="open = false"
              >
                <v-list-item-title v-text="$t(item.text)" class="text-uppercase text-h5 mt-3 mb-6"></v-list-item-title>
              </v-list-item>
            </v-list-group>
            <v-divider></v-divider>
            <!-- EVENTS -->
            <v-list-item :to="localePath('/events')" @click="open = false">
              <v-list-item-title class="text-uppercase text-h5 mt-3 mb-6">{{ $t('events') }}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <!-- LIBRARY -->
            <v-list-item :to="localePath('/library')" @click="open = false">
              <v-list-item-title class="text-uppercase text-h5 mt-3 mb-6">{{ $t('library') }}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <!-- APPLY -->
            <v-list-group :value="$route.name.startsWith('apply') ? true : false">
              <template v-slot:activator>
                <v-list-item-title class="text-uppercase text-h5 mt-3 mb-6">{{ $t('apply') }}</v-list-item-title>
              </template>
              <v-list-item v-for="(item, i) in apply" :key="i" nuxt :to="item.path" class="ml-3" @click="open = false">
                <v-list-item-title v-text="$t(item.text)" class="text-uppercase text-h5 mt-3 mb-6"></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-col>
        <!-- SOCIAL ICONS -->
        <v-col cols="12" md="4" order="last">
          <v-divider></v-divider>
          <div class="overline ma-3">{{ $t('follow-us') }}</div>
          <v-tooltip v-for="(item, index) in social" :key="index" bottom>
            <template #activator="{ on }">
              <v-btn
                target="_blank"
                rel="noopener noreferrer"
                :href="item.url"
                fab
                dark
                outlined
                color="grey"
                class="ma-3"
                v-on="on"
              >
                <v-icon color="white">mdi-{{ item.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ $t(item.text) }}</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<script>
import sitemap from '~/assets/sitemap'
import social from '~/assets/social'
export default {
  props: {},
  data() {
    return {
      ...sitemap,
      social,
      open: false,
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style scoped>
.menu-logo {
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-property: color, background, text-shadow;
  transition: all 0.5s ease;
  transform-origin: left top;
  width: 600px !important;
  margin-left: 40px;
  margin-bottom: 25px;
  margin-top: 5px;
}
.v-app-bar--is-scrolled .menu-logo {
  position: relative;
  width: 250px !important;
  height: auto !important;
  transition-delay: 1s;
  -webkit-transform: translateZ(0);
  transform: scale(0.9);
  margin-left: 40px;
  margin-bottom: 15px;
  margin-top: 5px;
}
.menu {
  margin-top: 15px;
}
.v-app-bar--is-scrolled .menu {
  margin-top: 5px;
}
</style>
