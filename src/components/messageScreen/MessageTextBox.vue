<template>
  <div id="container" class="pa-3">
    <v-textarea
      solo
      flat
      name="message-text-box"
      placeholder="Send a message..."
      class="width-100"
      id="message-text-box-input"
      rows="2"
      no-resize
      :background-color="isDark ? undefined : '#f5f5f5'"
    ></v-textarea>
    <div id="message-text-box-menu" class="d-flex">
      <v-btn icon tile color="primary">
        <v-icon>mdi-file</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="primary">Send</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scope>
#container {
  border: 1px solid rgba(30, 30, 30, 0.1);
}

.width-100 {
  width: 100%;
}
</style>
