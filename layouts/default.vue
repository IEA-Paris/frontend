<template>
  <v-app>
    <TopBar />
    <v-main>
      <v-container :class="{ 'mx-11': $vuetify.breakpoint.mdAndDown }" class="mt-12">
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss"></style>
