<template>
  <div>
    <v-img
      :lazy-src="$img(src, { width: 10, quality: 70 })"
      :src="$img(src, { height, quality: 70 })"
      :srcset="_srcset.srcset"
      :height="height"
      :sizes="_srcset.size"
      class="d-flex align-end justify-end text-right pb-6 pr-6"
    >
      <div id="caption">
        <a id="caption-content" class="animated">
          <slot name="caption"></slot>
        </a>
      </div>

      <slot name="overlay" class="overlay"></slot>
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
<style scoped>
.v-image__image {
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.v-image .v-image__image:hover {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
#caption {
  font-size: 1.4rem;
  line-height: 3rem;
  text-decoration: none;
  text-shadow: 1px 1px 0 alpha(white, 0.4);
}
#caption-content {
  padding: 12px;
  color: white;
  background-image: linear-gradient(to left, black 100%, white 100%);
  background-position: 0;
  background-size: 200%;
  transition: all 0.4s ease-in;
  text-transform: uppercase;
}
.v-image:hover #caption-content {
  color: black;
  background-position: 200%;
  background-color: white;
}
</style>
