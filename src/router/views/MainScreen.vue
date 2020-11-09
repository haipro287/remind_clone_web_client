<template>
  <classline> </classline>
</template>

<script>
import Classline from "../layouts/Classline.vue";

export default {
  components: { Classline },
  methods: {
    fetchData() {
      return this.$store.dispatch("FETCH_CLASSES");
    },
  },
  created() {
    if (!this.$store.getters.isClassFetched) {
      this.fetchData().then(console.log);
    }
  },
};
</script>

<style scoped></style>
