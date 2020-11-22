import axios from "./axios";

export function getClassrooms() {
  return axios.get("/api/classroom");
}

/**
 * Get members of the classroom with the given id.
 * @param {Number} classroomId
 */
export function getClassroomMembers(classroomId) {
  return axios.get(`/api/classroom/${classroomId}/students`);
}
