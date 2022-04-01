<template>
  <v-img
    src="https://wallpaperaccess.com/full/85318.jpg"
    width="100%"
    height="90vh"
  >
    <v-container>
      <nuxt-link to="/"> <v-btn>home</v-btn></nuxt-link>
      <v-row class="index-5">
        <v-col
          cols="4"
          v-for="location in locations.results"
          :key="location.id"
        >
          <v-card
            elevation="6"
            @click="$router.push(`/location/${location.id || ''}`)"
            color="rgb(191, 128, 64, 0.8)"
            class="pointer"
            ><v-card-title>{{ location.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
import { locationsQuery } from "~/apollo/queries/location";
import card from "../components/character/card.vue";

export default {
  components: { card },
  apollo: {
    locations: {
      query: locationsQuery,
      variable() {
        return {
          locations: this.locations,
        };
      },
    },
  },
  data() {
    return {
      locations: [],
    };
  },
};
</script>
<style scoped></style>
