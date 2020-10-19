<template>
  <user-settings-bar>
    <v-container>
      <v-row>
        <v-text-field v-model="nameUser"></v-text-field>
      </v-row>
    </v-container>
  </user-settings-bar>
</template>
<script>
import UserSettingsBar from "../../components/UserSettingsBar.vue";
export default {
  name: "SettingsProfileScreen",
  components: {
    UserSettingsBar,
  },
  data() {
    return {
      nameUser: "DinhVietAnh",
    };
  },
};
</script>
<style scoped></style>
