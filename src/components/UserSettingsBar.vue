<template>
  <v-card height="100%" width="300" class="settingSide">
    <v-navigation-drawer
      absolute
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      width="100%"
      left
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
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          link
          @click="$router.push({ path: item.link })"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
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
          link: "",
        },
        {
          icon: "mdi-coffee",
          text: "Widgets",
          link: "",
        },
        {
          icon: "mdi-comment",
          text: "Message History",
          link: "/settings/message",
        },
        {
          icon: "mdi-content-save",
          text: "Archived classes",
          link: "/settings/archived",
        },
        {
          icon: "mdi-account-alert",
          text: "Block users",
          link: "/settings/block",
        },
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
  float: left;
}
</style>
