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
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-subtitle>Hello,</v-list-item-subtitle>
                        <v-list-item-title v-bind="attrs" v-on="on">
                          Pham Thi Dan
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-list dense>
                    <v-list-item v-for="item in items" :key="item.title">
                      <v-list-item-icon style="margin-right: 12px">
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
      <br />

      <v-list dense class="listClass">
        <strong class="group">Classes Owned</strong><br />

        <v-list-item v-for="item in classes_owned" :key="item.title">
          <v-list-item-icon style="margin-right: 12px">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <br />

        <strong class="group">Classes Joined</strong>
        <v-list-item v-for="item in classes_joined" :key="item.title">
          <v-list-item-icon style="margin-right: 12px">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="navbar" height="50%">
      <v-avatar color="info">
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="className">Class 1</v-list-item-title>
          <v-list-item-subtitle>@1ve423d</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Message</v-tab>
          <v-tab>File</v-tab>
          <v-tab to="/classes/people">People</v-tab>
          <v-tab>Information</v-tab>
          <v-tab>Setting</v-tab>
        </v-tabs>
      </template>
      <v-btn right color="info">Add people</v-btn>
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
        { title: "Create a class", icon: "mdi-plus-circle-outline" },
        { title: "Class 1", icon: "mdi-google-classroom" },
        { title: "Class 2", icon: "mdi-google-classroom" },
      ],
      classes_joined: [
        { title: "Join a class", icon: "mdi-plus-circle-outline" },
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

.listClass {
  margin-left: 10%;
}

.group {
  margin-left: 5%;
  font-weight: 500;
}

.className {
  font-size: larger;
  font-weight: 500;
}

.navbar {
  margin-left: 250px;
  height: 50%;
  background-color: white !important;
}
</style>
