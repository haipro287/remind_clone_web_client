<template>
  <div>
    <user-settings-bar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import UserSettingsBar from "../../components/mainScreen/sideBar/userSetting/UserSettingsBar.vue";
export default {
  name: "SettingsUserLayout",
  components: {
    UserSettingsBar,
  },
};
</script>
<style scoped></style>
