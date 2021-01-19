import moment from "moment";

const dateFormat: string = "DD/MM/YYYY";

export function formatDate(date: string) {
  return moment(new Date(date)).format(dateFormat);
}
