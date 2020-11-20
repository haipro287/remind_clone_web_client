import dayjs from "dayjs";

/**
 *
 * @param {Date} inputDate
 */
export function formatMessageListDate(inputDate) {
  return dayjs(inputDate).format("MMM D, YYYY");
}

/**
 *
 * @param {Date | Number | String} date1
 * @param {Date | Number | String} date2
 */
export function isSameDay(date1, date2) {
  if (typeof date1 === "number" || typeof date1 === "string") {
    date1 = new Date(date1);
  }
  if (typeof date2 === "number" || typeof date2 === "string") {
    date2 = new Date(date2);
  }
  return date1.toDateString() === date2.toDateString();
}

/**
 * Format
 * @param {Date} inputDate
 */
export function formatMessageItemTimestamp(inputDate) {
  return dayjs(inputDate).format("h:mm A");
}
