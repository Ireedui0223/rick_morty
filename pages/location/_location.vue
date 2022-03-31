<template>
  <v-container>
    <!-- <pre>{{ location }}</pre> -->
    <v-card>
      <v-card-title
        ><span>Planet Name: {{ location.name }}</span>
        <span>type : {{ location.type }}</span>
        <span>dimension: {{ location.dimension }}</span></v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col v-for="(character, index) in location.residents" :key="index"
            ><Card :character="character" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { locationQuery } from "~/apollo/queries/location";
import Card from "~/components/character/card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      location: [],
    };
  },
  apollo: {
    location: {
      query: locationQuery,
      variables() {
        return {
          id: this.$route.params.location,
        };
      },
    },
  },
};
</script>
