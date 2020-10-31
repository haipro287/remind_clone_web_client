const axios = require("./axios");

const GET_CONVERSATION = "/api/user/conversations";

exports.getConversations = (token, classroomId) => {
  return axios.get(GET_CONVERSATION, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      classroomId,
    },
  });
};

// exports.getMessageList = (token, conversationId) => {};
