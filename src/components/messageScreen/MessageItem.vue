<template>
  <div class="d-flex pa-2">
    <v-avatar class="align-self-end">
      <v-img src="https://randomuser.me/api/portraits/women/27.jpg" alt="avatar"></v-img>
    </v-avatar>
    <div class="d-flex flex-column width-100 ml-2">
      <h4>{{ message.sender.name }}</h4>
      <div class="message-item-body pa-3 rounded-t-lg rounded-r-lg message-item">
        <p class="mb-0">{{ message.message.richText || message.message.text }}</p>
        <span id="message-item-body-timestamp">{{ message.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.message-item-body {
  background-color: aliceblue;
  width: 70%;
  max-width: 500px;
}

.width-100 {
  width: 100%;
}

#message-item-body-timestamp {
  float: right;
  font-size: 0.7em;
  opacity: 0.6;
}
</style>
