import dayjs from "dayjs";

export const timeFormat = (date) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm");
};
