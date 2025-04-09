import { format, parseISO } from "date-fns";

export const convertTo12Hour = (time: string): string => {
  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;

  const formattedMinute = minute.toString().padStart(2, "0");
  return `${hour}:${formattedMinute} ${ampm}`;
};

export const formatDate = (date: string): string => {
  const parseDate = parseISO(date);
  const formatted = format(parseDate, "EEEE, MMMM do, yyyy");
  return formatted;
};
