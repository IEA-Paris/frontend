<template>
  <v-app-bar
    color="white"
    clipped
    flat
    app
    elevate-on-scroll
    style="border-top: solid 5px black !important"
  >
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.smAndDown"
    ></v-app-bar-nav-icon>
    <nuxt-link :to="localePath('/')">
      <v-img class="mx-2" src="/logo_text.svg" height="52" contain></v-img
    ></nuxt-link>
    <v-spacer></v-spacer>
    <div class="mt-6">
      <v-menu offset-y open-on-hover bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text x-large>
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
          <v-btn text x-large v-bind="attrs" v-on="on">
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
      <v-btn text x-large nuxt to="/events"> {{ $t('events') }} </v-btn>
      <v-btn text x-large nuxt to="/library"> {{ $t('library') }} </v-btn>
      <v-menu offset-y open-on-hover bottom>
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text x-large>
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
  methods: {},
}
</script>
<style lang="scss">
.logo {
  display: block;
}
</style>
