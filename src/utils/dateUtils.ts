import moment from "moment";

const dateFormat: string = "DD/MM/YYYY";

export function formatDate(date: any) {
  return moment(new Date(date)).format(dateFormat);
}

export function subtractDates(date1: any, date2: any) {
  return Math.abs(date1 - date2);
}
