<template>
  <v-container>
    <v-card>
      <v-card-title class="d-flex flex-column text-center">
        <span> Episode Name: {{ episode.name }} </span>
        <div class="d-flex flex-row justify-space-between">
          <span class="pr-10">Aired date: {{ episode.air_date }}</span>
          <span>Episode: {{ episode.episode }}</span>
        </div>
      </v-card-title>
      <v-row>
        <v-col
          cols="3"
          v-for="(character, index) in episode.characters"
          :key="index"
          ><Card :character="character"></Card>
        </v-col>
      </v-row>
    </v-card>
    <!-- <pre>{{ episode }}</pre> -->
  </v-container>
</template>

<script>
import { episodeQuery } from "~/apollo/queries/episode";
import Card from "~/components/character/card.vue";
export default {
  data() {
    return {
      episode: [],
    };
  },
  components: {
    Card,
  },
  apollo: {
    episode: {
      query: episodeQuery,
      variables() {
        return {
          id: this.$route.params.episode,
        };
      },
    },
  },
  // async fetch() {
  //   await this.getEpisodes({
  //     page: this.page,
  //     filter: null,
  //   })
  //     .then(
  //       ({
  //         data: {
  //           episodes: {
  //             results,
  //             info: { pages },
  //           },
  //         },
  //       }) => {
  //         console.log(results);
  //         this.episodes = results;
  //         this.pageLength = pages;
  //       }
  //     )
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // },
  watch: {},
  methods: {},
};
</script>
