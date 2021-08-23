<template>
  <div>
    <v-img
      :lazy-src="$img(src, { width: 10, quality: 70 })"
      :src="$img(src, { height, quality: 70 })"
      :srcset="_srcset.srcset"
      :height="height"
      :sizes="_srcset.size"
      class="x-img"
    >
      <slot name="caption"></slot>
      <slot name="overlay"></slot>
    </v-img>
  </div>
</template>
<script>
export default {
  props: {
    height: { type: [Number, String], default: 500 },
    src: {
      type: String,
      default: '/img/header-bg.jpg',
    },
  },
  computed: {
    _srcset() {
      return this.$img.getSizes(this.src, {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
          format: 'webp',
          quality: 70,
          height: 500,
        },
      })
    },
  },
}
</script>
<style lang="scss"></style>
