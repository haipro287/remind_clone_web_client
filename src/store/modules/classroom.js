import { getClassrooms } from "@/services/classroom.service";
import Vue from "vue";

export default {
  state: () => ({
    classrooms: {}, // classrooms[classId] = Classroom
    currentClassroom: {},
    classroomMembers: {}, // classroomMembers[classId] = Array<User>
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
     *
     * @param {Number} classId
     * @param {Array} members
     */
    SET_CLASS_MEMBERS(state, classId, members) {
      Vue.set(state.classroomMembers, classId, members);
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
    RESET_CLASSROOM(state) {
      state.currentClassroom = {};
      state.classrooms = {};
      state.classroomMembers = {};
    },
  },
  actions: {
    // shoud have been named GET_CLASSES, then FETCH_CLASSES
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
    RESET_CLASSROOM({ commit }) {
      commit("RESET_CLASSROOM");
    },
    // FETCH_MEMBERS({ commit, state }, classroomId) {
    //   return new Promise((resolve, reject) => {
    //     if (state.classroomMembers[classroomId]) {
    //       return state.classroomMembers[classroomId];
    //     }

    //   })
    // },
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
