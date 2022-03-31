<template>
  <v-img
    src="https://wallpaperaccess.com/full/85318.jpg"
    width="100%"
    height="90vh"
  >
    <v-container>
      <nuxt-link to="/"> <v-btn>home</v-btn></nuxt-link>
      <v-row>
        <v-col
          cols="3"
          v-for="location in locations.results"
          :key="location.id"
        >
          <v-card
            @click="$router.push(`/location/${location.id || ''}`)"
            color="rgb(122, 0, 42, 0.3)"
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
