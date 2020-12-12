<template>
  <div class="d-flex pa-2">
    <v-avatar class="align-self-end" v-if="!isMine">
      <v-img :src="message.sender.avatar_url" alt="avatar"></v-img>
    </v-avatar>
    <div class="d-flex flex-column width-100 ml-2">
      <h4 v-if="!isMine">{{ message.sender.name }}</h4>
      <div :class="messageItemBodyClass">
        <p class="mb-0">{{ message.message || message.message_text }}</p>
        <span id="message-item-body-timestamp">{{ formatTimestamp }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatMessageItemTimestamp } from "@/utils/date.util";
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true,
    },
    isMine: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      messageItemBodyClass: [
        "message-item-body",
        "pa-3",
        "rounded-t-lg",
        this.isMine ? "rounded-l-lg" : "rounded-r-lg",
        "message-item",
        this.isMine ? "is-mine" : "",
      ],
    };
  },
  computed: {
    formatTimestamp() {
      return formatMessageItemTimestamp(this.message.createdAt);
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

.message-item-body.is-mine {
  align-self: flex-end;
  background-color: #0070d2 !important;
  color: white;
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
