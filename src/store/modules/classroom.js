import { getClassrooms } from "@/services/classroom.service";
import Vue from "vue";

export default {
  state: () => ({
    classrooms: {},
    currentClassroom: {},
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
    /**
     * Change current class to the class with {code}
     * @param {*} state
     * @param {String} newClassCode Code of the class to switch to
     */
    SET_CURRENT_CLASS(state, newClassCode) {
      const classrooms = Object.values(state.classrooms);
      const nextClassroom = classrooms.find(c => c.code === newClassCode);
      state.currentClassroom = nextClassroom;
    },
  },
  actions: {
    FETCH_CLASSES({ commit, getters }) {
      return new Promise((resolve, reject) => {
        if (getters.isClassFetched) {
          return resolve();
        }
        getClassrooms()
          .then(res => {
            return res.data;
          })
          .then(data => {
            const { joined: joinedClasses, owner: ownedClasses } = data.data;

            joinedClasses.forEach(classroom => commit("ADD_CLASS", { ...classroom, classType: "joined" }));
            ownedClasses.forEach(classroom => commit("ADD_CLASS", { ...classroom, classType: "owned" }));

            resolve();
          })
          .catch(reject);
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
    haveNoClass: state => {
      return Object.keys(state.classrooms).length === 0;
    },
  },
};
