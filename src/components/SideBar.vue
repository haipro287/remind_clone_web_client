<template>
  <v-navigation-drawer permanent left app class="sidebar">
    <template v-slot:prepend>
      <v-list-item two-line style="padding-top: 15px">
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
                  <v-list-item-group v-model="selectedOption" color="primary">
                    <v-list-item
                      v-for="item in items"
                      :key="item.title"
                      :href="'/classes'"
                    >
                      <v-list-item-icon style="margin-right: 12px">
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider style="margin-top: 14px"></v-divider>

    <v-list class="listClass">
      <v-list-item-group v-model="selectedClass" color="primary">
        <v-subheader>Classes Owned</v-subheader>
        <create-class></create-class>
        <v-list-item
          v-for="item in classes_owned"
          :key="item.title"
          :to="'/classes/' + item.code"
          style="margin-right: 25px;"
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
          :to="'/classes/' + item.code"
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
</template>

<script>
import CreateClass from "./CreateClass.vue";
export default {
  name: "SideBar",
  components: { CreateClass },
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
      selectedOption: 2,
      items: [
        { title: "Account settings", icon: "mdi-cog-outline", link: "/" },
        { title: "Log out", icon: "mdi-logout-variant", link: "/" },
      ],
      selectedClass: 0,
      classes_owned: [
        {
          title: "Class 1",
          code: "1ve423d",
          avatar: "/assets/class_avatar/apple.svg",
          id: 1,
        },
        {
          title: "Class 2",
          code: "454kgf4",
          avatar: "/assets/class_avatar/art.svg",
          id: 2,
        },
      ],
      classes_joined: [
        {
          title: "Class 3",
          code: "45g4trg",
          avatar: "/assets/class_avatar/geography.svg",
          id: 3,
        },
        {
          title: "Class 4",
          code: "34gf45b",
          avatar: "/assets/class_avatar/geometry.svg",
          id: 4,
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  background-color: whitesmoke !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19) inset;
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

.createOrJoinClass {
  color: #2196f3;
  padding-left: 16px;
}

.iconAdd {
  color: #2196f3;
  margin-right: 7px;
  margin-bottom: 2px;
}
</style>
