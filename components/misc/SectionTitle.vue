<template>
  <v-col cols="12" class="transition-swing d-flex justify-space-between align-center">
    <div class="mb-6 mt-12 flex-grow-1">
      <span class="section-title text-h4 text-uppercase">{{ $t(text) }}</span>
    </div>
    <v-btn v-if="text !== 'latest'" class="mt-6" x-large text nuxt :to="localePath('/' + text)">
      See all
      <v-icon right>mdi-chevron-right</v-icon>
    </v-btn>
  </v-col>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
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
.section-title {
  border-bottom: 5px solid black;
} /* 
.section-title-wrapper {
  border-bottom: 1px solid black;
} */
</style>
