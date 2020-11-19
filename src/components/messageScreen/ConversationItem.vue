<template>
  <v-list-item link class="py-0" @click="onClick">
    <v-list-item-avatar v-if="avatarUrl">
      <v-img :src="avatarUrl"></v-img>
    </v-list-item-avatar>
    <v-list-item-icon v-else>
      <v-icon color="primary">{{ iconName || "mdi-account" }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ convoObj.conversation_name }}</v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "ConversationItem",
  props: {
    avatarUrl: {
      type: String,
    },
    iconName: {
      type: String,
    },
    convoObj: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit("click", this.convoObj.id);
    },
  },
};
</script>

<style></style>
