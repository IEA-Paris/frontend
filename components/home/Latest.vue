<template>
  <div>
    <SectionTitle text="latest" />
    <v-container class="transition-swing">
      <v-row class="transition-swing">
        <v-col cols="12" md="6" class="transition-swing">
          <v-card style="position: sticky">
            <OptimizedImage :src="'https://picsum.photos/600?random=' + Math.random()">
              <template #caption>Covid-19 cases are rising in China. What does that mean for luxury?</template>
            </OptimizedImage>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <Item :item="item" />
          <Item :item="item" />
          <Item :item="item" />
          <Item :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      item: {
        image: 'https://picsum.photos/600?random=' + Math.random(),
        title: 'fergsgre erqg regre g',
        date: 'fgersgfre',
        subtitle: 'gerger',
      },
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
