<template>
  <div>
    <Section title="latest" />
    <Section title="events" alt />
    <Section title="research" />
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
