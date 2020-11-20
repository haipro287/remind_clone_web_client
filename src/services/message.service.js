import axios from "./axios";

const GET_CONVERSATION = "/api/user/conversations";
const GET_MESSAGE = "/api/message";
const GET_CONVO = "/api/message/convo";

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

export function getConversationDetail(convoId) {
  return axios.get(`${GET_CONVO}/${convoId}/detail`);
}
