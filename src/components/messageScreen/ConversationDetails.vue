<template>
  <div class="d-flex pa-2 flex-column">
    <v-list>
      <v-subheader>Group Name</v-subheader>
      <h2 class="text-center">{{ convoObj.name || "No name" }}</h2>
      <v-subheader>Members</v-subheader>
      <v-list-item class="py-0" v-for="member in convoObj.members" :key="member.id">
        <v-list-item-avatar v-if="member.avatar_url">
          <v-img :src="member.avatar_url"></v-img>
        </v-list-item-avatar>
        <v-list-item-icon v-else>
          <v-icon color="primary">{{ "mdi-account" }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ member.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { getConversationDetail } from "@/services/message.service";

export default {
  props: {
    convoId: [Number, String],
  },
  data() {
    return { convoObj: {} };
  },
  watch: {
    $route: "fetchMembers",
  },
  methods: {
    fetchMembers() {
      getConversationDetail(this.convoId)
        .then(res => res.data)
        .then(data => {
          this.convoObj = data.data;
        });
    },
  },
  async mounted() {
    await this.fetchMembers();
  },
};
</script>

<style></style>
