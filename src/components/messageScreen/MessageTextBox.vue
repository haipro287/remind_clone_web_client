<template>
  <div id="container" class="pa-3">
    <textarea placeholder="Send a message..." class="width-100 pa-2" id="message-text-box-input"></textarea>
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
export default {};
</script>

<style scope>
#container {
  border: 1px solid rgba(30, 30, 30, 0.1);
}

#message-text-box-input,
#message-text-box-input:focus {
  border: 1px solid rgba(30, 30, 30, 0.3);
  outline: none;
  resize: none;
}
.width-100 {
  width: 100%;
}
</style>
