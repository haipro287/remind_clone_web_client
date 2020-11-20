<template>
  <v-container fluid class="d-flex pa-0">
    <div class="fit-v-viewport pr-1 col-3" id="conversation-list">
      <create-new-message-dialog />
      <v-list v-for="convo in currentClassConvos" :key="convo.id">
        <conversation-item @click="onChangeConvo" :convoObj="convo" :avatarUrl="convo.avatarUrl" />
      </v-list>
    </div>
    <div class="d-flex flex-column width-100 fit-v-viewport">
      <div id="conversation-app-bar" class="pa-5 d-flex align-center justify-space-between">
        <h3>{{ currentConvo.conversation_name }}</h3>
        <v-btn icon>
          <v-icon>mdi-alert-circle-outline</v-icon>
        </v-btn>
      </div>
      <div id="message-list-item" class="fill-height">
        <message-item
          v-for="message in currentConvoMessages"
          :key="message.id"
          :message="message"
          :isMine="message.sender.id === currentUser.id"
        />
      </div>
      <message-text-box @submit="onSendMessage" />
    </div>
  </v-container>
</template>

<script>
import MessageItem from "@/components/messageScreen/MessageItem.vue";
import MessageTextBox from "@/components/messageScreen/MessageTextBox.vue";
import ConversationItem from "@/components/messageScreen/ConversationItem.vue";
import MessageListDate from "@/components/messageScreen/MessageListDate.vue";
import CreateNewMessageDialog from "../../components/messageScreen/createNewMessageDialog.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "MessageScreen",
  components: {
    MessageItem,
    MessageTextBox,
    ConversationItem,
    // eslint-disable-next-line vue/no-unused-components
    MessageListDate,
    CreateNewMessageDialog,
  },
  sockets: {
    message: function(msg) {
      console.log(msg);
    },
  },
  data() {
    return {
      messageList: [],
    };
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    async fetchData() {
      const currentClassroomId = this.$store.state.Classroom.currentClassroom.id;
      const currentConvoId = this.$route.params.convoId;
      await this.$store.dispatch("FETCH_CLASS_CONVOS", currentClassroomId);
      await this.$store.dispatch("FETCH_CONVO_MESSAGES", currentConvoId);
    },
    onSendMessage(msg) {
      console.log(msg);
      let broadcastMsg = {
        sender: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        messageText: msg,
        createdAt: new Date(),
        conversationId: this.currentConvo.id,
      };
      console.log(broadcastMsg);
      this.$socket.emit("NEW_MESSAGE", broadcastMsg, err => {
        if (err) {
          console.error(err);
        }
      });
    },
    onChangeConvo(convoId) {
      this.$store.dispatch("CHANGE_CURRENT_CONVO", convoId);
      this.$router.push({
        name: "Message",
        params: {
          convoId,
        },
      });
    },
  },
  computed: {
    ...mapGetters(["currentClassConvos", "currentConvoMessages"]),
    ...mapState({
      currentClassroom: state => state.Classroom.currentClassroom,
      currentConvo: state => state.Message.currentConvo,
      currentUser: state => state.Auth.user,
    }),
  },
  created() {
    this.fetchData();
    this.$socket.open();
  },
  beforeDestroy() {
    this.$socket.close();
  },
};
</script>

<style scope>
div#conversation-app-bar {
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.width-100 {
  width: 100%;
}

.fit-v-viewport {
  height: calc(100vh - 140px);
  max-height: calc(100vh - 140px);
}

#message-list-item,
#conversation-list {
  overflow-y: scroll;
}

#conversation-list {
  border-right: 1px solid rgba(30, 30, 30, 0.1);
  max-width: 250px;
  min-width: 80px;
}
</style>
