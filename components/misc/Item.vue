<template>
  <v-card :width="$vuetify.breakpoint.mdAndUp ? '' : '100%'" class="d-flex flex-column" raised min-height="100px">
    <OptimizedImage :src="item.image" :ratio="first ? 8 / 9 : 16 / 9" :category="item.category">
      <!--           <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out white v-card--reveal display-3"
              style="height: 100%"
            >
              <v-btn-toggle tile group x-large :class="{ 'show-btns': hover }" light>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" x-large v-on="on">
                      <v-icon>mdi-file-pdf</v-icon>
                      FR
                    </v-btn>
                  </template>
                  <span>Télécharger en version française</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" x-large v-on="on">
                      <v-icon>mdi-file-pdf</v-icon>
                      EN
                    </v-btn>
                  </template>
                  <span>Download the english version</span>
                </v-tooltip>
              </v-btn-toggle>
            </div>
          </v-expand-transition> -->
      <template #caption>
        {{ item.title }}
      </template>
      <template #author>
        {{ item.author }}
      </template>
    </OptimizedImage>

    <!--       <v-card-title style="word-break: normal">
        {{ item.title }}
      </v-card-title>

      <v-card-subtitle height="150px">
        {{ item.date + ' - ' + item.subtitle }}
      </v-card-subtitle> -->
  </v-card>
</template>
<script>
import quotes from '~/assets/quotes'

export default {
  props: {
    first: {
      type: Boolean,
      default: false,
    },
    item: {
      default: () => {
        const rnd = Math.floor(Math.random() * (100 + 1))
        return {
          image: 'https://picsum.photos/seed/' + Math.random() * 20 + '/400/600',
          title: quotes[rnd].quote,
          author: quotes[rnd].author,
          category: ['event', 'news', 'resource'][Math.floor(Math.random() * 3)],
        }
      },
      type: Object,
    },
  },
  data() {
    return {
      quotes,
    }
  },
  methods: {},
}
</script>
<style></style>
