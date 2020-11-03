<template>
  <div class="root">
    <user-settings-bar />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </div>
</template>
<script>
import UserSettingsBar from "../../components/mainScreen/sideBar/userSetting/UserSettingsBar.vue";
export default {
  name: "SettingUserLayout",
  components: {
    UserSettingsBar,
  },
};
</script>
<style scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
