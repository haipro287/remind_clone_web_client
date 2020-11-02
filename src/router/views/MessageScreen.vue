<template>
  <v-container fluid class="d-flex pa-0">
    <div class="fit-v-viewport pr-1 col-3" id="conversation-list">
      <v-list v-for="convo in conversationList" :key="convo.id">
        <conversation-item :convoName="convo.convoName" :avatarUrl="convo.avatarUrl" />
      </v-list>
    </div>
    <div class="d-flex flex-column width-100 fit-v-viewport">
      <div id="conversation-app-bar" class="pa-5 d-flex align-center justify-space-between">
        <h3>Annie Edison</h3>
        <v-btn icon>
          <v-icon>mdi-alert-circle-outline</v-icon>
        </v-btn>
      </div>
      <div id="message-list-item" class="fill-height">
        <message-list-date date="October 20, 2020" />
        <message-item v-for="message in messageList" :key="message.id" :message="message" />
      </div>
      <message-text-box />
    </div>
  </v-container>
</template>

<script>
import MessageItem from "@/components/messageScreen/MessageItem.vue";
import MessageTextBox from "@/components/messageScreen/MessageTextBox.vue";
import ConversationItem from "@/components/messageScreen/ConversationItem.vue";
import MessageListDate from "@/components/messageScreen/MessageListDate.vue";

export default {
  components: {
    MessageItem,
    MessageTextBox,
    ConversationItem,
    MessageListDate,
  },
  data() {
    return {
      messageList: [
        {
          id: 1,
          sender: {
            id: 1,
            name: "Annie Edison",
          },
          conversationId: 1,
          message: {
            richText: "Hello from the other side.",
            text: "Hello from the other side.",
          },
          createdAt: "10:12 AM",
        },
        {
          id: 2,
          sender: {
            id: 1,
            name: "Annie Edison",
          },
          conversationId: 1,
          message: {
            richText:
              "Will justice philosophy madness passion victorious justice depths aversion abstract selfish enlightenment hatred. Truth ascetic salvation value victorious merciful marvelous truth holiest value hatred derive. Holiest transvaluation derive self hope evil fearful ideal merciful. Strong ultimate disgust christianity zarathustra christian disgust inexpedient inexpedient. Overcome enlightenment sea sexuality fearful depths hope pious eternal-return salvation.",
            text:
              "Will justice philosophy madness passion victorious justice depths aversion abstract selfish enlightenment hatred. Truth ascetic salvation value victorious merciful marvelous truth holiest value hatred derive. Holiest transvaluation derive self hope evil fearful ideal merciful. Strong ultimate disgust christianity zarathustra christian disgust inexpedient inexpedient. Overcome enlightenment sea sexuality fearful depths hope pious eternal-return salvation.",
          },
          createdAt: "10:18 AM",
        },
        {
          id: 3,
          sender: {
            id: 1,
            name: "Annie Edison",
          },
          conversationId: 1,
          message: {
            richText: "Someone like you. Someone who'll rattle the cages. Does it come in black?",
            text: "Someone like you. Someone who'll rattle the cages. Does it come in black?",
          },
          createdAt: "10:18 AM",
        },
        {
          id: 4,
          sender: {
            id: 1,
            name: "Annie Edison",
          },
          conversationId: 1,
          message: {
            richText:
              " Swear to me! My anger outweights my guilt. It's not who I am underneath but what I do that defines me. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
            text:
              " Swear to me! My anger outweights my guilt. It's not who I am underneath but what I do that defines me. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
          },
          createdAt: "10:18 AM",
        },
        {
          id: 5,
          sender: {
            id: 1,
            name: "Annie Edison",
          },
          conversationId: 1,
          message: {
            richText:
              " Does it come in black? This isn't a car. Well, you see... I'm buying this hotel and setting some new rules about the pool area.",
            text:
              " Does it come in black? This isn't a car. Well, you see... I'm buying this hotel and setting some new rules about the pool area. ",
          },
          createdAt: "10:18 AM",
        },
      ],
      conversationList: [
        {
          id: 1,
          avatarUrl: "https://randomuser.me/api/portraits/women/27.jpg",
          convoName: "Annie Edison",
        },
        {
          id: 2,
          avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg",
          convoName: "Mary Anderson",
        },
        {
          id: 3,
          avatarUrl: "https://randomuser.me/api/portraits/women/29.jpg",
          convoName: "Beth Smith",
        },
        {
          id: 4,
          avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg",
          convoName: "Vanessa Vaugn",
        },
        {
          id: 5,
          avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg",
          convoName: "Emily",
        },
      ],
    };
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
