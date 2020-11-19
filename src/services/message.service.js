import axios from "./axios";

const GET_CONVERSATION = "/api/user/conversations";
const GET_MESSAGE = "/api/message";

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

export function getMessages(convoId) {
  return axios.get(`${GET_MESSAGE}/${convoId}`);
}
