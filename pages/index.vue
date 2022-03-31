<template>
  <div class="home">
    <v-img
      gradient="to top right, rgb(255, 148, 77, 0.2),rgb(191, 128, 255, 0.2)"
      src="https://i.ytimg.com/vi/LTqV4Bfhelc/maxresdefault.jpg"
      width="100%"
      height="90vh"
    >
      <!-- <pre>{{ characters.page }}</pre> -->
      <!-- <Menu /> -->
      <div class="d-flex justify-center align-center pt-13">
        <v-img
          max-width="40%"
          :src="require('~/assets/images/logo.png')"
        ></v-img>
      </div>
    </v-img>
    <!-- {{ characters }} -->
    <v-container>
      <h1 class="text-capitalize py-2">characters</h1>
      <v-pagination
        v-model="page"
        :length="pagesLength"
        :total-visible="7"
      ></v-pagination>
      <v-row v-if="$fetchState.pending">
        <v-col class="align-center pa-10 text-center">wait moment...</v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="3" v-for="character in characters" :key="character.id">
          <Card :character="character" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "Vuex";

import { charactersQuery } from "~/apollo/queries/character";
import Card from "~/components/character/card.vue";
import Menu from "~/components/layout/menu.vue";
export default {
  data() {
    return {
      characters: [],

      pagesLength: 1,
    };
  },
  components: {
    Card,
    Menu,
  },
  computed: {
    page: {
      get: function () {
        return this.$store.state.page;
      },
      set: function (newValue) {
        this.$store.commit("setPage", newValue);
        // console.log(newValue);
      },
    },
  },

  async fetch() {
    await this.getCharacters({
      page: this.page,
      filter: null,
    })
      .then(
        ({
          data: {
            characters: {
              results,
              info: { pages },
            },
          },
        }) => {
          // console.log(results);
          this.characters = results;
          this.pagesLength = pages;
        }
      )
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    ...mapActions({ getCharacters: "character/getCharacters" }),
  },
  watch: {
    page(newValue, oldValue) {
      this.$fetch();
    },
  },
};
</script>

<style scoped></style>
