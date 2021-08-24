<template>
  <v-app-bar id="main-app-bar" color="white" clipped flat app hide-on-scroll height="168px">
    <div class="d-flex flex-column flex-grow-1">
      <div class="d-flex flex-grow-1 align-center">
        <nuxt-link
          :to="localePath('/')"
          style="transition: all 500ms ease 0s"
          class="d-flex align-center logo-text"
          @click.native="$vuetify.goTo(0)"
        >
          <span class="logo-1">PARIS</span>
          &nbsp;&nbsp;
          <span class="logo-2">IAS</span>
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-menu offset-y open-on-hover bottom>
          <template #activator="{ on, attrs }">
            <v-btn v-bind="attrs" class="text-button" text outlined v-on="on">
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

        <MainMenu />
      </div>
      <v-divider></v-divider>
      <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex ml-6 menu" transition="v-expand-transition">
        <v-menu offset-y open-on-hover bottom>
          <template #activator="{ on, attrs }">
            <v-btn v-bind="attrs" text nuxt :to="localePath('/institute')" v-on="on">
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
            <v-btn text v-bind="attrs" :to="localePath('/research')" nuxt v-on="on">
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
            <v-btn v-bind="attrs" text v-on="on">
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
#main-app-bar {
  border-top: solid 0.8rem #000 !important;
}

#main-app-bar.v-app-bar--is-scrolled {
  border-top: solid 0.4rem #000 !important;
}

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

.v-app-bar--is-scrolled .logo-1 .logo-2 {
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

.v-app-bar--is-scrolled .menu {
  margin-top: 5px;
}

.logo-text,
.logo-text:link,
.logo-text:visited,
.logo-text:hover,
.logo-text:active,
.logo-text {
  line-height: 6rem;
  color: #000;
  text-decoration: none;
  margin-top: 1.8rem;
  margin-bottom: 1.4rem;
}

.logo-1 {
  font-size: 6rem;
  font-weight: 700;
  font-family: 'Bodoni Moda';
  margin-left: 2rem;
  letter-spacing: 0.2px;
}

.logo-2 {
  font-size: 6.5rem;
  font-family: 'Roboto';
  font-weight: 100;
}

.v-app-bar--is-scrolled .logo-text {
  line-height: 3rem;
  color: #000;
  text-decoration: none;
  margin-top: 0.6rem;
  margin-bottom: 1.2rem;
}

.v-app-bar--is-scrolled .logo-1 {
  font-size: 3rem !important;
  font-weight: 700;
  font-family: 'Bodoni Moda';
  margin-left: 2rem;
  letter-spacing: 0.2px;
}

.v-app-bar--is-scrolled .logo-2 {
  font-size: 3.2rem !important;
  font-family: 'Roboto';
  font-weight: 100;
}
</style>
