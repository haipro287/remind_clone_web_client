import axios from "./axios";

const GET_CONVERSATION = "/api/user/conversations";

/**
 * Get conversations in {classroomId}
 * @protected
 * @param {int} classroomId
 */
export function getConversations(classroomId) {
  return axios.get(GET_CONVERSATION, {
    params: {
      classroomId,
    },
  });
}
