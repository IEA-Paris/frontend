<template>
  <v-card :width="$vuetify.breakpoint.mdAndUp ? '' : '100%'" class="d-flex flex-column" raised min-height="100px">
    <OptimizedImage :src="item.image" height="200">
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
        Julia dances in the deep dark She loves the smell of the ocean And dives into the morning light
        <a href="#">View more</a>
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
export default {
  props: {
    item: {
      default: () => {},
      type: Object,
    },
  },
  methods: {},
}
</script>
<style></style>
