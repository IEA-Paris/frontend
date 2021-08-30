<template>
  <div class="logo_wrapper">
    <span class="container_first">
      <div class="d-flex">
        <span ref="firsttext1" class="text1"></span>
        <span ref="firsttext2" class="text2"></span>
      </div>
    </span>
    <span class="container_second">
      <div class="d-flex">
        <span ref="secondtext1" class="text1"></span>
        <span ref="secondtext2" class="text2"></span>
      </div>
    </span>
    <svg id="filters">
      <defs>
        <filter id="threshold">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      textEn: ['PARIS', 'IAS'],
      textFr: ['IEA', 'PARIS'],
      morphTime: 1,
      cooldownTime: 0.15,
      time: new Date(),
      morph: 0,
      cooldown: 0.15,
      en: this.$i18n.locale === 'en',
    }
  },
  computed: {},
  mounted() {
    console.log('this.$refs.secondtext1: ', this.$refs)
    this.$nextTick(this.animate())
  },
  methods: {
    doMorph() {
      console.log('doCodoMorpholdown')
      try {
        this.morph -= this.cooldown
        this.cooldown = 0

        const fraction = this.morph / this.morphTime

        if (fraction > 1) {
          this.cooldown = this.cooldownTime
          this.fraction = 1
        }

        this.setMorph(fraction)
      } catch (error) {
        console.log('error: ', error)
      }
    },

    setMorph(fraction) {
      try {
        console.log('setMorph')
        this.$refs.firsttext2.style.filter = `blur(${Math.min(8 / fraction - 8, 200)}px)`
        this.$refs.firsttext2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`
        this.$refs.firsttext1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
        this.$refs.firsttext1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

        fraction = 1 - fraction
        this.$refs.secondtext2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
        this.$refs.secondtext2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`
        this.$refs.secondtext1.style.filter = `blur(${Math.min(8 / fraction - 8, 200)}px)`
        this.$refs.secondtext1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

        this.$refs.firsttext1.innerText = this.en ? this.textFr[0] : this.textEn[0]
        this.$refs.firsttext2.innerText = this.en ? this.textFr[1] : this.textEn[1]
        this.$refs.secondtext1.innerText = this.en ? this.textEn[0] : this.textFr[0]
        this.$refs.secondtext2.innerText = this.en ? this.textEn[1] : this.textFr[1]
      } catch (error) {
        console.log('error: ', error)
      }
    },

    doCooldown() {
      try {
        console.log('doCooldown')
        this.morph = 0
        this.$refs.secondtext1.style.filter = ''
        this.$refs.secondtext1.style.opacity = '100%'
        this.$refs.secondtext2.style.filter = ''
        this.$refs.secondtext2.style.opacity = '100%'
        this.$refs.firsttext1.style.filter = ''
        this.$refs.firsttext2.style.opacity = '0%'
        this.$refs.firsttext2.style.filter = ''
        this.$refs.firsttext1.style.opacity = '0%'
      } catch (error) {
        console.log('error: ', error)
      }
    },

    animate() {
      try {
        requestAnimationFrame(this.animate)

        const newTime = new Date()
        const shouldIncrementIndex = this.cooldown > 0
        const dt = (newTime - this.time) / 2000
        this.time = newTime

        this.cooldown -= dt

        if (this.cooldown <= 0) {
          if (shouldIncrementIndex) {
            this.en = !this.en
          }

          this.doMorph()
        } else {
          this.doCooldown()
        }
      } catch (error) {
        console.log('error: ', error)
      }
    },
  },
}
</script>
<style lang="scss">
.logo_wrapper {
  display: flex;
}
.container_first,
.container_second {
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  filter: url(#threshold);
}

.text1,
.text2 {
  display: flex;
  font-size: 80pt;
  user-select: none;
}
.container_first .text1,
.container_second .text2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
}
.container_first .text2,
.container_second .text1 {
  font-family: 'Bodonis Moda';
}
</style>
