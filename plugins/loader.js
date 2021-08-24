export default function ({ app }) {
  app.components.NuxtLoading.methods.finish = function () {
    console.log('app.components.NuxtLoading.methods.finish: ', this)
    this.clear()
    this.pause()
    return this
  }
  app.components.NuxtLoading.methods.finish()
  console.log('app.components.NuxtLoading.methods.finish2: ', app.components.NuxtLoading.methods.finish)
}
