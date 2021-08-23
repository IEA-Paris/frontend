<template>
  <div>
    <Latest />
    <Events />
    <Library />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('hello').fetch()

    return {
      article,
    }
  },
}
</script>
