import axios from "./axios";

export function getClassrooms() {
  return axios.get("/api/classroom");
}
