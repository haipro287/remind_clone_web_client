<template>
  <v-card height="100%" width="250" class="settingSide">
    <v-navigation-drawer absolute width="100%" left permanent class="sidebar">
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" link @click="$router.push({ path: item.link })">
          <v-list-item-icon>
            <v-icon color="blue lighten-1">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  name: "UserSettingsBar",
  data() {
    return {
      items: [
        {
          icon: "mdi-arrow-left",
          text: "Back",
          link: "/classes",
        },
        {
          icon: "mdi-account",
          text: "Profile",
          link: "/settings/profile",
        },
        {
          icon: "mdi-bell",
          text: "Notification",
          link: "/settings/notification",
        },
        {
          icon: "mdi-airballoon",
          text: "App Integrations",
          link: "/comingSoon",
        },
        {
          icon: "mdi-coffee",
          text: "Widgets",
          link: "/comingSoon",
        },
        {
          icon: "mdi-comment",
          text: "Message History",
          link: "/settings/message",
        },
        {
          icon: "mdi-content-save",
          text: "Archived classes",
          link: "/comingSoon",
        },
        {
          icon: "mdi-account-alert",
          text: "Block users",
          link: "/comingSoon",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.settingSide {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  float: left;
}

.sidebar {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) inset;
}
</style>
