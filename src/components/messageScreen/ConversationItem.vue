<template>
  <v-list-item link class="py-0">
    <v-list-item-avatar>
      <v-img :src="avatarUrl"></v-img>
    </v-list-item-avatar>
    <v-list-item-title>{{ convoName }}</v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "ConversationItem",
  props: {
    avatarUrl: {
      type: String,
    },
    convoName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
