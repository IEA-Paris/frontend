<template>
  <div class="frame">
    <div class="overlay">
      <v-chip
        v-if="category"
        :color="['primary', 'secondary', 'success'][['event', 'news', 'resource'].indexOf(category)]"
        label
      >
        {{ $t(category) }}
      </v-chip>
      <span id="caption-content">
        <slot name="caption"></slot>
        <br />
      </span>
      <span id="caption-author">
        <slot name="author"></slot>
      </span>
    </div>
    <v-img
      :aspect-ratio="ratio"
      :lazy-src="$img(src, { width: 10, quality: 70 })"
      :src="$img(src, { height, quality: 70 })"
      :srcset="_srcset.srcset"
      :sizes="_srcset.size"
    ></v-img>
  </div>
</template>
<script>
export default {
  props: {
    ratio: { type: Number, default: 16 / 9 },
    height: { type: [Number, String], default: 500 },
    src: {
      type: String,
      default: '/img/header-bg.jpg',
    },
    category: {
      type: String,
      default: 'gregrze',
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
.frame {
  overflow: hidden;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  z-index: 2;
  text-align: right;
  padding-bottom: 2rem;
  padding-right: 1.6rem;
}
.v-image {
  -webkit-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
  z-index: 1;
}
.overlay:hover + .v-image {
  -ms-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
#caption-content,
#caption-author {
  background-position: 0;
  background-size: 200%;
  transition: all 0.6s ease-in;
  text-align: right;
  text-decoration: none;
  max-width: 66%;
}
#caption-content {
  font-size: 1.2rem;
  line-height: 2.2rem;
  text-decoration: none;
  text-shadow: 1px 1px 0 alpha(white, 0.6);
  padding: 12px;
  color: black;
  background-image: linear-gradient(to left, white 100%, black 100%);
  text-transform: uppercase;
}
#caption-author {
  padding: 4px;
  color: white;
  background-image: linear-gradient(to left, black 100%, white 100%);
  font-size: 0.8rem;
  line-height: 2.2rem;
  text-shadow: 1px 1px 0 alpha(black, 0.6);
}
.overlay:hover #caption-content {
  color: white;
  background-position: 200%;
  background-color: black;
  line-height: 2.2rem;
  font-size: 1.3rem;
}
.overlay:hover #caption-author {
  color: black;
  background-position: 200%;
  background-color: white;
}
</style>
