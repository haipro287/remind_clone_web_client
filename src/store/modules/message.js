import { getConversations } from "@/services/message.service";
import Vue from "vue";

export default {
  state: () => ({
    currentConvo: null,
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
  },
  actions: {
    /**
     *
     * @param {int} classroomId
     */
    FETCH_CLASS_CONVOS({ commit, state }, classroomId) {
      // return getConversations(classroomId)
      //   .then(res => res.data)
      //   .then(data => {
      //     const convos = data.data;
      //     commit("SET_CLASS_CONVOS", { classroomId, convos });
      //   });
      return new Promise((resolve, reject) => {
        if (state.conversations[classroomId]) {
          resolve(state.conversations[classroomId]);
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
  },
  getters: {
    currentClassConvos: (state, getters, rootState) => {
      if (rootState.Classroom.currentClassroom) {
        const currentClassroomId = rootState.Classroom.currentClassroom.id;
        return state.conversations[currentClassroomId];
      }

      return [];
    },
  },
};
