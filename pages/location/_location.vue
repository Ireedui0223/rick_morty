<template>
  <v-container>
    <!-- <pre>{{ location }}</pre> -->
    <v-card>
      <v-card-title class="d-flex flex-column"
        ><span>Planet Name: {{ location.name }} </span>
        <div class="d-flex flex-row">
          <span class="pr-6"> Type : {{ location.type }} </span>
          <span> Dimension: {{ location.dimension }} </span>
        </div></v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col
            class="index-2"
            cols="3"
            v-for="(character, index) in location.residents"
            :key="index"
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
