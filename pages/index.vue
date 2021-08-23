<template>
  <div>
    <Section title="latest" />
    <Section title="events" />
    <Section title="library" />
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
