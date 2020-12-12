<template>
  <baseline>
    <hello-world />
  </baseline>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Baseline from "../layouts/Baseline.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Baseline,
  },
};
</script>
