<template>
  <div class="text-h3 text-center my-12">
    <v-responsive class="mx-auto my-3" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    {{ $t(text) }}
    <v-responsive class="mx-auto my-3" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
  </div>
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
<style lang="scss"></style>
