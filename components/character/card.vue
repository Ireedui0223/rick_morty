<template>
  <v-card
    v-if="character"
    @click="$router.push(`/profile/${character.id || ''}`)"
  >
    <v-img :src="character.image"></v-img>
    <v-card-title class="text-body-1"> {{ character.name }}</v-card-title>
    <v-card-subtitle class="text-body-2 pb-2">{{
      character.species
    }}</v-card-subtitle>
    <v-card-actions class="d-flex align-center justify-center pt-0"
      ><v-btn block>more about character</v-btn></v-card-actions
    >
  </v-card>
</template>

<script>
export default {
  props: ["character"],
  // data: function () {
  //   return {
  //     character: this.character,
  //   };
  // },
};
</script>
