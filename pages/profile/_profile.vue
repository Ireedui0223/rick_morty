<template>
  <v-container class="align-center text-center d-flex justify-center">
    <v-card class="px-6" width="100vh" v-if="character">
      <v-card-title
        class="text-center d-flex align-center justify-center text-h4"
      >
        Name : {{ character.name }}
      </v-card-title>
      <div
        class="d-flex flex-row"
        v-if="character.location && character.location.type"
      >
        <div class="profile pt-4">
          <v-img :src="character.image" class="rounded" width="100%"></v-img>
          status: {{ character.status }} <br />
          <span
            class="pointer pa-1"
            @click="$router.push(`/location/${character.location.id}`)"
            >Home planet : {{ character.location.name }}</span
          >
        </div>
        <v-card-text class="overflow-y-auto episodes text-left">
          Episodes:
          <ul>
            <li v-for="(index, scene) in character.episode" :key="scene">
              <span
                class="pointer px-1"
                @click="$router.push(`/episodes/${index.id}`)"
              >
                {{ index.name }}</span
              >
            </li>
          </ul>
        </v-card-text>
      </div>
      <v-card-actions class="d-flex flex-row justify-space-between">
        <nuxt-link to="/"><v-btn>home</v-btn></nuxt-link>
        <div class="d-flex flex-row justify-end">
          <v-btn @click="$router.push(`/profile/${character.id-- || ''}`)"
            >before</v-btn
          >
          <v-btn @click="$router.push(`/profile/${character.id++ || ''}`)"
            >next</v-btn
          >
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { characterQuery } from "~/apollo/queries/character";
export default {
  data() {
    return {
      character: [],
    };
  },
  apollo: {
    character: {
      query: characterQuery,
      variables() {
        return {
          id: this.$route.params.profile,
        };
      },
    },
  },
  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.episodes {
  max-height: 60vh !important;
}
</style>
