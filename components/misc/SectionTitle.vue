<template>
  <v-col cols="12" class="transition-swing">
    <div class="my-8">
      <span class="section-title text-h4 text-uppercase">{{ $t(text) }}</span>
    </div>
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
}
</style>
