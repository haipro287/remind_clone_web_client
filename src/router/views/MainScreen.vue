<template>
  <classline> </classline>
</template>

<script>
import Classline from "../layouts/Classline.vue";

export default {
  components: { Classline },
  methods: {
    async fetchData() {
      const currentClassCode = this.$route.params.code;
      console.log(currentClassCode);

      if (!this.$store.getters.isClassFetched) {
        await this.$store.dispatch("FETCH_CLASSES");
      }

      if (currentClassCode) {
        this.$store.commit("SET_CURRENT_CLASS", currentClassCode);
        // set current class
        // if the class with that code doesn't exist,
        // navigate to 404
      } else {
        this.$router.push({ name: "404" });
        // navigate to first class or 404
      }
    },
  },
  watch: {
    $route: "fetchData",
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped></style>
