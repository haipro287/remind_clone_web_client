<template>
  <div>
    <side-bar />
    <v-main>
      <v-container fluid>
        <Content></Content>
        <slot />
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import Content from "@/components/Content.vue";

export default {
  components: { SideBar, Content },
};
</script>

<style scoped></style>
