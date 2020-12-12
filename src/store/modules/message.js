import { getConversations, getMessages } from "@/services/message.service";
import Vue from "vue";

export default {
  state: () => ({
    currentConvo: {},
    messages: {},
    conversations: {},
  }),
  mutations: {
    /**
     *
     * @param {*} state
     * @param {Array} convos
     * @param {int} classroomId
     */
    SET_CLASS_CONVOS(state, { classroomId, convos }) {
      Vue.set(state.conversations, classroomId, convos);
    },
    SET_CONVO_MESSAGES(state, { convoId, messages }) {
      Vue.set(state.messages, convoId, messages);
    },
    CHANGE_CURRENT_CONVO(state, { convoId, classroomId }) {
      let listConvos = state.conversations[classroomId];
      state.currentConvo = listConvos.find(convo => convo.id === convoId);
    },
    ADD_MESSAGE(state, { convoId, newMsg }) {
      let convoMessages = state.messages[convoId];
      if (convoMessages) {
        convoMessages.push(newMsg);
      }
    },
    RESET_MESSAGE(state) {
      state.currentConvo = {};
      state.messages = {};
      state.conversations = {};
    },
  },
  actions: {
    /**
     *
     * @param {int} classroomId
     */
    FETCH_CLASS_CONVOS({ commit, state }, classroomId) {
      return new Promise((resolve, reject) => {
        if (state.conversations[classroomId]) {
          return resolve(state.conversations[classroomId]);
        }
        getConversations(classroomId)
          .then(res => res.data)
          .then(data => {
            const convos = data.data;
            commit("SET_CLASS_CONVOS", { classroomId, convos });
            resolve(convos);
          })
          .catch(reject);
      });
    },
    FETCH_CONVO_MESSAGES({ state, commit }, convoId) {
      return new Promise((resolve, reject) => {
        if (state.messages[convoId]) {
          return resolve(state.messages[convoId]);
        }
        getMessages(convoId)
          .then(res => res.data)
          .then(data => {
            const messages = data.data;
            commit("SET_CONVO_MESSAGES", { convoId, messages });
            resolve(messages);
          })
          .catch(reject);
      });
    },
    /**
     * Change current convo to the conversation with the given id.
     * @param {Number} convoId
     */
    CHANGE_CURRENT_CONVO({ commit, rootState }, convoId) {
      const currentClassroom = rootState.Classroom.currentClassroom;
      commit("CHANGE_CURRENT_CONVO", { convoId, classroomId: currentClassroom.id });
    },
    SOCKET_MSG_NEW_MESSAGE({ commit }, newMsg) {
      let convoId = newMsg.conversationId;
      commit("ADD_MESSAGE", { convoId, newMsg });
    },
    RESET_MESSAGE({ commit }) {
      commit("RESET_MESSAGE");
    },
  },
  getters: {
    currentClassConvos: (state, getters, rootState) => {
      if (rootState.Classroom.currentClassroom) {
        const currentClassroomId = rootState.Classroom.currentClassroom.id;
        return state.conversations[currentClassroomId];
      }

      return [];
    },
    currentConvoMessages: state => {
      if (!state.currentConvo || Object.keys(state.currentConvo).length === 0) return [];

      const currentConvoMessages = state.messages[state.currentConvo.id];

      return currentConvoMessages;
    },
  },
};
