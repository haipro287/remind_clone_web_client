<template>
  <div>
    <side-bar />
    <nav-bar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import SideBar from "@/components/mainScreen/sideBar/SideBar.vue";
import NavBar from "@/components/mainScreen/navBar/Content.vue";

export default {
  components: { SideBar, NavBar },
};
</script>

<style scoped></style>
