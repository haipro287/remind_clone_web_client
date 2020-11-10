<template>
  <v-list-item link class="py-0">
    <v-list-item-avatar v-if="avatarUrl">
      <v-img :src="avatarUrl"></v-img>
    </v-list-item-avatar>
    <v-list-item-icon v-else>
      <v-icon color="primary">{{ iconName || "mdi-account" }}</v-icon>
    </v-list-item-icon>
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
    iconName: {
      type: String,
    },
  },
};
</script>

<style></style>
