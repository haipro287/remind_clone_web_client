<template>
  <v-container fluid class="d-flex pa-0">
    <div class="fit-v-viewport pr-1 col-3" id="conversation-list">
      <create-new-message-dialog />
      <v-list v-for="convo in currentClassConvos" :key="convo.id">
        <conversation-item @click="onChangeConvo" :convoObj="convo" :avatarUrl="convo.avatarUrl" />
      </v-list>
    </div>
    <div v-if="convoIdParam" class="d-flex flex-column width-100 fit-v-viewport">
      <div id="conversation-app-bar" class="pa-5 d-flex align-center justify-space-between">
        <h3>{{ currentConvo.conversation_name }}</h3>
        <v-btn icon @click="showDetails = !showDetails">
          <v-icon>mdi-alert-circle-outline</v-icon>
        </v-btn>
      </div>
      <div id="message-list-item" class="fill-height">
        <template v-for="(message, i) in currentConvoMessages">
          <message-list-date
            :date="message.createdAt"
            :key="'date' + message.id"
            v-if="i == 0 || (i > 0 && !isSameDay(i))"
          />
          <message-item :key="message.id" :message="message" :isMine="message.sender.id === currentUser.id" />
        </template>
      </div>
      <message-text-box @submit="onSendMessage" />
    </div>
    <conversation-empty-screen v-else />
    <conversation-details v-if="convoIdParam && showDetails" :convoId="convoIdParam" />
  </v-container>
</template>

<script>
import { isSameDay } from "@/utils/date.util";
import MessageItem from "@/components/messageScreen/MessageItem.vue";
import MessageTextBox from "@/components/messageScreen/MessageTextBox.vue";
import ConversationItem from "@/components/messageScreen/ConversationItem.vue";
import MessageListDate from "@/components/messageScreen/MessageListDate.vue";
import CreateNewMessageDialog from "../../components/messageScreen/createNewMessageDialog.vue";
import { mapGetters, mapState } from "vuex";
import ConversationEmptyScreen from "../../components/messageScreen/conversationEmptyScreen.vue";
import ConversationDetails from "../../components/messageScreen/ConversationDetails.vue";

export default {
  name: "MessageScreen",
  components: {
    MessageItem,
    MessageTextBox,
    ConversationItem,
    MessageListDate,
    CreateNewMessageDialog,
    ConversationEmptyScreen,
    ConversationDetails,
  },
  data() {
    return {
      showDetails: false,
    };
  },
  watch: {
    $route: "fetchData",
    currentConvoMessages: "scrollToEnd",
  },
  methods: {
    async fetchData() {
      const currentClassroomId = this.$store.state.Classroom.currentClassroom.id;
      const currentConvoId = this.convoIdParam;
      await this.$store.dispatch("FETCH_CLASS_CONVOS", currentClassroomId);
      if (currentConvoId) {
        await this.$store.dispatch("FETCH_CONVO_MESSAGES", currentConvoId);
      }
    },
    onSendMessage(msg) {
      let broadcastMsg = {
        sender: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          avatar_url: this.currentUser.avatar_url,
        },
        messageText: msg,
        createdAt: new Date(),
        conversationId: this.currentConvo.id,
      };
      console.log(broadcastMsg);
      this.$socket.emit("NEW_MESSAGE", broadcastMsg, (err, ackMsg) => {
        if (err) {
          console.error(err);
        }
        console.log(ackMsg);
      });
    },
    onChangeConvo(convoId) {
      this.$store.dispatch("CHANGE_CURRENT_CONVO", convoId);
    },
    isSameDay(i) {
      return isSameDay(this.currentConvoMessages[i].createdAt, this.currentConvoMessages[i - 1].createdAt);
    },
    scrollToEnd() {
      this.$nextTick(() => {
        const container = this.$el.querySelector("#message-list-item");
        if (container) container.scrollTop = container.scrollHeight;
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
    convoIdParam() {
      return this.$route.params.convoId;
    },
  },
  created() {
    this.fetchData();
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
