<template>
  <v-card class="overflow-hidden">
    <v-navigation-drawer fixed permanent left class="sidebar">
      <template v-slot:prepend>
        <v-list-item two-line style="padding-top: 5px">
          <v-list-item-avatar class="avatar">
            <v-img
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="avatar"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content style="margin-left: -3%">
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

      <v-divider style="margin-top: 7px"></v-divider>

      <v-list class="listClass">
        <v-list-item-group v-model="selectedClass" color="primary">
          <v-subheader>Classes Owned</v-subheader>
          <a class="createOrJoinClass"
            ><v-icon class="iconAdd">mdi-plus-circle-outline</v-icon> Create a
            class</a
          >
          <v-list-item
            v-for="item in classes_owned"
            :key="item.title"
            style="margin-right: 25px"
          >
            <v-list-item-avatar size="25px" style="margin-right: 12px">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-subheader>Classes Joined</v-subheader>
          <a class="createOrJoinClass"
            ><v-icon class="iconAdd">mdi-plus-circle-outline</v-icon> Join a
            class</a
          >
          <v-list-item
            v-for="item in classes_joined"
            :key="item.title"
            style="margin-right: 25px"
          >
            <v-list-item-avatar size="25px" style="margin-right: 12px">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed class="navbar" height="50%">
      <v-avatar color="info" class="classAvatar">
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
          <v-tab to="/classes/settings">Setting</v-tab>
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
      selectedClass: 1,
      classes_owned: [
        { title: "Class 1", avatar: "/assets/class_avatar/apple.svg" },
        { title: "Class 2", avatar: "/assets/class_avatar/art.svg" },
      ],
      classes_joined: [
        { title: "Class 1", avatar: "/assets/class_avatar/geography.svg" },
        { title: "Class 2", avatar: "/assets/class_avatar/geometry.svg" },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #f2f3f5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.avatar {
  margin-left: 5%;
}

.listClass {
  margin-left: 10%;
}

.group {
  margin-left: 5%;
  font-weight: 500;
}

.classAvatar {
  margin-top: 10px;
  margin-left: -2px;
  margin-right: -8px;
}

.className {
  font-size: larger;
  font-weight: 500;
  margin-top: 10px;
}

.navbar {
  margin-left: 250px;
  height: 50%;
  background-color: white !important;
}

.createOrJoinClass {
  color: #2196f3;
  padding-left: 16px;
}

.iconAdd {
  color: #2196f3;
  margin-right: 7px;
}
</style>
