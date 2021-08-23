<template>
  <v-hover>
    <v-card :width="$vuetify.breakpoint.mdAndUp ? '' : '100%'" class="d-flex flex-column">
      <figure class="effect-julia">
        <OptimizedImage :src="item.image" height="200">
          gfrgfrsgvergreg
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
          <template v-slot:caption>
            <figcaption>
              <h2>
                Passionate
                <span>Julia</span>
              </h2>
              <span>
                Julia dances in the deep dark She loves the smell of the ocean And dives into the morning light
              </span>
              <a href="#">View more</a>
            </figcaption>
          </template>
        </OptimizedImage>
      </figure>

      <!--       <v-card-title style="word-break: normal">
        {{ item.title }}
      </v-card-title>

      <v-card-subtitle height="150px">
        {{ item.date + ' - ' + item.subtitle }}
      </v-card-subtitle> -->
    </v-card>
  </v-hover>
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
<style>
figcaption {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, #ddd 50%);
  background-position: -0% 0;
  background-size: 200% auto;
  color: #222;
  font-size: 1.75em;
  line-height: 1.15em;
  text-decoration: none;
  transition: background-position 0.5s ease-out;
}
figcaption:hover {
  background-position: -99.99% 0;
}
</style>
