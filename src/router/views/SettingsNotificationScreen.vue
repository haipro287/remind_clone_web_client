<template>
  <settings-user-layout>
    <v-container>
      <h2>Notification preferences</h2>
      <p>Manage how you would like to receive Remind notifications.</p>
      <p
        >Any updates to your contact information below will only update in Remind. Let your school district know of any
        changes.</p
      >
      <v-list>
        <v-list-item v-for="(contact, i) in contacts" :key="i">
          <v-row>
            <v-col sm="12">
              <v-icon>{{ contact.icon }} </v-icon></v-col
            >
            <v-col>
              <h3>{{ contact.name }}</h3>
              <p>{{ contact.status }}</p>
            </v-col>
            <v-col>
              <v-btn @click="enableOrDisable" outlined color="primary"> Enable </v-btn>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
      <v-btn @click="addDevice" outlined color="primary"> + Add device </v-btn>
    </v-container>
  </settings-user-layout>
</template>
<script>
import SettingsUserLayout from "../layouts/SettingsUserLayout.vue";
export default {
  name: "SettingsNotification",
  components: {
    SettingsUserLayout,
  },
  data() {
    return {
      contacts: [
        {
          icon: "mdi-email",
          name: "180200000@vnu.edu.vn",
          status: "Please confirm this email to receive notifications",
        },
        {
          icon: "mdi-desktop-mac",
          name: "Desktop",
          status: "Please confirm this email to receive notifications",
        },
      ],
    };
  },
  methods: {
    enableOrDisable() {
      console.log("enable Or disable");
    },
    addDevice() {
      console.log("add device");
    },
  },
};
</script>
<style scoped>
p {
  color: gray;
}
</style>
