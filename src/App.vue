<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const savedColorPref = localStorage.getItem("dark");

    if (savedColorPref !== undefined && savedColorPref !== null) {
      this.$vuetify.theme.dark = savedColorPref === "true";
    } else {
      this.$vuetify.theme.dark = prefersDarkScheme.matches;
    }
  },
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
