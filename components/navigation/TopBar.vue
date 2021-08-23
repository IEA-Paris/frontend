<template>
  <v-app-bar
    color="white"
    clipped
    flat
    app
    prominent
    style="border-top: solid 0.25rem black !important"
    hide-on-scroll
    height="168px"
  >
    <div class="d-flex flex-column flex-grow-1">
      <div class="d-flex flex-grow-1 align-center">
        <nuxt-link :to="localePath('/')" style="transition: all 500ms ease 0s" @click.native="$vuetify.goTo(0)">
          <v-img src="/logo_text.svg" contain class="logo"></v-img>
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-menu offset-y open-on-hover bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" class="text-button" text outlined>
              {{ $i18n.locale.toUpperCase() }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$i18n.setLocale('en')">
              <v-list-item-title class="text-uppercase text-button">
                {{ $t('english') }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="$i18n.setLocale('fr')">
              <v-list-item-title class="text-uppercase text-button">
                {{ $t('french') }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <SearchMenu />
        <MainMenu />
      </div>
      <v-divider></v-divider>
      <div class="d-flex ml-6 menu" transition="v-expand-transition" v-if="$vuetify.breakpoint.smAndUp">
        <v-menu offset-y open-on-hover bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text nuxt :to="localePath('/institute')">
              {{ $t('institute') }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in institute" :key="index" nuxt :to="item.path">
              <v-list-item-title class="text-uppercase text-button">{{ $t(item.text) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y open-on-hover bottom>
          <template #activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" nuxt :to="localePath('/research')">
              {{ $t('research') }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in research" :key="index" nuxt :to="item.path">
              <v-list-item-title class="text-uppercase text-button">{{ $t(item.text) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn text nuxt to="/events">{{ $t('events') }}</v-btn>
        <v-btn text nuxt to="/library">{{ $t('library') }}</v-btn>
        <v-menu offset-y open-on-hover bottom>
          <template #activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text>
              {{ $t('apply') }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in apply" :key="index" nuxt :to="item.path">
              <v-list-item-title class="text-uppercase text-button">{{ $t(item.text) }}</v-list-item-title>
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
      lang: 'en',
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
  max-width: 600px !important;
  width: 100%;
  margin-left: 40px;
  margin-bottom: 25px;
}
.v-app-bar--is-scrolled .logo {
  position: relative;
  max-width: 250px !important;
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
