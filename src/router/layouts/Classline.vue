<template>
  <div>
    <side-bar />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: { SideBar },
};
</script>

<style scoped></style>
