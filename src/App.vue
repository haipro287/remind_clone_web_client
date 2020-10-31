<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(30, 30, 30, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(30, 30, 30, 0.6);
}
</style>
