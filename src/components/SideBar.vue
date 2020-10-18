<template>
  <v-card>
    <v-navigation-drawer fixed permanent left class="sidebar">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              <div>
                <v-menu
                  top
                  :close-on-click="true"
                  max-height="50%"
                  max-width="50%"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <a href="#" v-bind="attrs" v-on="on">
                      Patida
                    </a>
                  </template>

                  <v-list>
                    <v-list-item v-for="item in items" :key="item.title">
                      <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <strong class="group">Classes Owned</strong><br />

        <v-list-item v-for="item in classes_owned" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <br />

        <strong class="group">Classes Joined</strong>
        <v-list-item v-for="item in classes_joined" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="navbar" height="50%">
      <v-avatar color="indigo">
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <v-toolbar-title> Class 1</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Message</v-tab>
          <v-tab>File</v-tab>
          <v-tab to="/people">People</v-tab>
          <v-tab>Information</v-tab>
          <v-tab to="/classes/settings">Setting</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      links: [
        {
          path: "/",
          name: "Home",
        },
        {
          path: "/about",
          name: "About",
        },
        {
          path: "/login",
          name: "Log in",
        },
      ],
      items: [
        { title: "Account settings", icon: "mdi-cog-outline" },
        { title: "Log out", icon: "mdi-logout-variant" },
      ],
      classes_owned: [
        { title: "Create a class", icon: "mdi-plus-circle" },
        { title: "Class 1", icon: "mdi-google-classroom" },
        { title: "Class 2", icon: "mdi-google-classroom" },
      ],
      classes_joined: [
        { title: "Join a class", icon: "mdi-plus-circle" },
        { title: "Class 1", icon: "mdi-google-classroom" },
        { title: "Class 2", icon: "mdi-google-classroom" },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #f2f3f5;
}

.group {
  margin-left: 5%;
}

.group create {
  margin-left: 10%;
}

a {
  text-decoration: none;
}

.navbar {
  margin-left: 250px;
  height: 50%;
  color: "#f2f3f5";
}
</style>
