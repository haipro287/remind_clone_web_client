<template>
  <div>
    <side-bar />
    <nav-bar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/Content.vue";

export default {
  components: { SideBar, NavBar },
};
</script>

<style scoped></style>
