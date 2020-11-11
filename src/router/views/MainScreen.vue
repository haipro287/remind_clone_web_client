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
import { mapState } from "vuex";

export default {
  components: { SideBar, NavBar },
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
  computed: {
    ...mapState({
      currentClassroom: state => state.Classroom.currentClassroom,
    }),
  },
};
</script>

<style scoped></style>
