<template>
  <v-app-bar app>
    <v-toolbar-title class="ml-2">
      <v-list-item two-line>
        <v-list-item-avatar>
          <v-img src="/assets/class_avatar/apple.svg"> </v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="className">Class 1</v-list-item-title>
          <v-list-item-subtitle>@{{ $route.params.code }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-toolbar-title>
    <v-spacer />
    <add-people></add-people>
    <template v-slot:extension>
      <v-tabs align-with-title color="#2196f3">
        <v-tab v-for="tab in tabs" :key="tab.name" @click="$router.push({ name: tab.routeName })">
          {{ tab.name }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import AddPeople from "@/components/mainScreen/navBar/AddPeople";
export default {
  name: "NavBar",
  components: { AddPeople },
  data() {
    return {
      tabs: [
        { name: "Message", routeName: "Message" },
        { name: "File", routeName: "Files" },
        { name: "People", routeName: "People" },
        { name: "Information", routeName: "Information" },
        { name: "Setting", routeName: "Settings Class" },
      ],
    };
  },
};
</script>

<style scoped>
.classAvatar {
  margin-left: 5px;
  margin-right: -8px;
}

.className {
  font-size: larger;
  font-weight: 500;
  margin-top: -2px;
}

.navbar {
  margin-left: 250px;
  height: 50%;
  background-color: white !important;
}

li {
  list-style-type: none;
}

li.router-link-active {
  color: #2196f3;
  font-weight: bold;
}
.router-link {
  text-decoration: none;
  color: gray;
}
</style>
