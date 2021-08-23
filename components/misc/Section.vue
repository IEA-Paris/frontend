<template>
  <div>
    <v-container v-scroll="onScroll" class="transition-swing" :fluid="!scrolled" :class="{ scrolled: 'mt-14' }">
      <v-row cass="transition-swing" :no-gutters="!scrolled" :class="scrolled ? '' : 'mx-12'">
        <SectionTitle :text="title" />
        <v-col cols="12" md="6" xl="4" class="transition-swing">
          <v-card class="sticky-card">
            <Item :first="true" />
          </v-card>
        </v-col>
        <v-col cols="12" md="6" xl="4">
          <Item />
          <Item />
        </v-col>
        <v-col v-if="$vuetify.breakpoint.xl" cols="12" md="6" xl="4">
          <Item />
          <Item />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      scrolled: false,
    }
  },
  computed: {},
  mounted() {},
  methods: {
    onScroll() {
      this.scrolled = process.client ? window.pageYOffset > 0 : false
    },
  },
}
</script>
<style lang="scss"></style>
