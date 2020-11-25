import axios from "./axios";

export function getClassrooms() {
  return axios.get("/api/classroom");
}

/**
 * Get members of the classroom with the given id.
 * @param {Number} classroomId
 */
export function getClassroomStudents(classroomId) {
  return axios.get(`/api/classroom/${classroomId}/students`);
}
/**
 *
 * @param {Number} classroomId
 */
export function getClassroomMembers(classroomId) {
  return axios.get(`/api/classroom/${classroomId}/members`);
}

export function getClassroomInfo(classroomId) {
  return axios.get(`/api/classroom/${classroomId}`);
}

export function getClassroomOwners(classroomId) {
  return axios.get(`/api/classroom/${classroomId}/owners`);
}

export function leaveClassroom(classroomId) {
  return axios.post(`/api/classroom/${classroomId}/students/leave`);
}

export function deleteClassroom(classroomId) {
  return axios.delete(`/api/classroom/${classroomId}`);
}
