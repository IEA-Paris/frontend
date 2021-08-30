<template>
  <span class="letter_wrapper">
    <div class="letter">
      <div class="letter__container" :style="{ '--height': height }">
        <ul class="letter__container__list" :style="{ '--from': from, '--to': to }">
          <li class="letter__container__list__item">A</li>
          <li class="letter__container__list__item">B</li>
          <li class="letter__container__list__item">C</li>
          <li class="letter__container__list__item">D</li>
          <li class="letter__container__list__item">E</li>
          <li class="letter__container__list__item">F</li>
          <li class="letter__container__list__item">G</li>
          <li class="letter__container__list__item">H</li>
          <li class="letter__container__list__item">I</li>
          <li class="letter__container__list__item">J</li>
          <li class="letter__container__list__item">K</li>
          <li class="letter__container__list__item">L</li>
          <li class="letter__container__list__item">M</li>
          <li class="letter__container__list__item">N</li>
          <li class="letter__container__list__item">O</li>
          <li class="letter__container__list__item">P</li>
          <li class="letter__container__list__item">Q</li>
          <li class="letter__container__list__item">R</li>
          <li class="letter__container__list__item">S</li>
          <li class="letter__container__list__item">T</li>
          <li class="letter__container__list__item">U</li>
          <li class="letter__container__list__item">V</li>
          <li class="letter__container__list__item">W</li>
          <li class="letter__container__list__item">X</li>
          <li class="letter__container__list__item">Y</li>
          <li class="letter__container__list__item">Z</li>
        </ul>
      </div>
    </div>
  </span>
</template>
<script>
export default {
  props: {
    current: {
      type: String,
      required: true,
      default: 'A',
    },
    height: {
      type: String,
      required: false,
      default: '95px',
    },
    from: {
      type: String,
      required: false,
      default: '0%',
    },
    to: {
      type: String,
      required: false,
      default: '-100%',
    },
    delay: {
      type: Number,
      required: false,
      default: 0,
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
.letter_wrapper {
  width: 80px;
}
.letter {
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;
  &__container {
    overflow: hidden;
    height: var(--height);

    &__list {
      list-style: none;

      -webkit-animation-name: change;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      &__item {
        line-height: var(--height);
        margin: 0;
      }
    }
  }
}

@-webkit-keyframes change {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, '-100%', 0);
  }
}

@-o-keyframes change {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, '-100%', 0);
  }
}

@-moz-keyframes change {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, '-100%', 0);
  }
}

@keyframes change {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, '-100%', 0);
  }
}

// 6 is the number of animation.
// Here, there are 4 lines :

// 1 to 2
// 2 to 3
// 3 to 4
// 4 to 3
// 3 to 2
// 2 to 1

// 6x + 6y = 100 (100% duration)

// HERE :
// y = 4 -> Animation between two lines
// x = 12.66 -> Time spent on a line

// You can define a value and calculate the other if you want change speed or the number of lines
</style>
