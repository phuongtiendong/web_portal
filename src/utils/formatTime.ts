import { FORMAT_DATE_YYYY_MM_DD } from "constant";
import { format, getTime, formatDistanceToNow } from "date-fns";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

export function fDate(date: string, newFormat?: string) {
  const fm = newFormat || "dd MMM yyyy";
  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date: string, newFormat?: string) {
  const fm = newFormat || "dd MMM yyyy p";

  return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date: string) {
  return date ? getTime(new Date(date)) : "";
}

export function fToNow(date: string) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : "";
}

export function formatDate_YYYY_MM_DD(
  date: string | number | undefined = "",
  format: string = FORMAT_DATE_YYYY_MM_DD
) {
  return (date ? dayjs(convertDate(date)) : dayjs())?.format(format);
}

export const convertDate = (date: string) => {
  const keys = date.split('/').reverse()
  return keys.join('-')
}