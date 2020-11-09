import { getClassrooms } from "@/services/classroom.service";
import Vue from "vue";

export default {
  state: () => ({
    classrooms: {},
  }),
  mutations: {
    /**
     *
     * @param {*} state
     * @param {Object} newClass
     */
    ADD_CLASS(state, newClass) {
      Vue.set(state.classrooms, newClass.id, newClass);
    },
  },
  actions: {
    FETCH_CLASSES({ commit }) {
      return getClassrooms()
        .then(res => {
          return res.data;
        })
        .then(data => {
          const { joined: joinedClasses, owner: ownedClasses } = data.data;

          joinedClasses.forEach(classroom => commit("ADD_CLASS", { ...classroom, classType: "joined" }));
          ownedClasses.forEach(classroom => commit("ADD_CLASS", { ...classroom, classType: "owned" }));
        });
    },
  },
  getters: {
    isClassFetched: state => {
      return Object.keys(state.classrooms).length !== 0;
    },
    joinedClassrooms: state => {
      return Object.values(state.classrooms).filter(classroom => classroom.classType === "joined");
    },
    ownedClassrooms: state => {
      return Object.values(state.classrooms).filter(classroom => classroom.classType === "owned");
    },
  },
};
