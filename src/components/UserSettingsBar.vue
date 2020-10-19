<template>
  <v-card height="100%" width="300" class="settingSide">
    <v-navigation-drawer
      absolute
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      width="100%"
      permanent
    >
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title><h3>BACK</h3></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="([icon, text], i) in items" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
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
        ["mdi-account", "Profile"],
        ["mdi-bell", "Notification"],
        ["mdi-airballoon", "App Integrations"],
        ["mdi-coffee", "Widgets"],
        ["mdi-comment", "Message History"],
        ["mdi-content-save", "Archived classes"],
        ["mdi-account-alert", "Block users"],
      ],
    };
  },
  methods: {
    backToHome() {
      console.log("BacktoHome");
    },
  },
};
</script>
<style scoped>
.settingSide {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>
