<template>
  <div>
    <side-bar class="sidebar"> </side-bar>
    <div class="block">
      <p> Class infomation </p>
      <v-avatar size="69">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <a> Change avatar </a>
      <p>Class name</p>
      <input v-bind="classname" />
      <p> Class code </p>
      <input v-bind="classcode" />
      <v-btn color="primary"> Save </v-btn>
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/SideBar.vue";
export default {
  name: "SettingsClass",
  components: {
    SideBar,
  },
  props: ["classname"],
};
</script>
<style scoped>
.block {
  width: 100%;
  height: auto;
  background-color: orange;
  margin-left: 255px;
}
</style>
