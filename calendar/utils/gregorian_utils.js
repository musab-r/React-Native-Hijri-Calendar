import moment from 'moment';

export const initialMoment = () => {
  return moment();
};

export const oneYearAhead = d => {
  return moment(d).add(1, 'year');
};

export const oneYearBack = d => {
  return moment(d).subtract(1, 'year');
};

export const tenYearsAhead = d => {
  return moment(d).add(10, 'year');
};

export const tenYearsBack = d => {
  return moment(d).subtract(10, 'year');
};

export const oneMonthAhead = d => {
  return moment(d).add(1, 'month');
};

export const oneMonthBack = d => {
  return moment(d).subtract(1, 'month');
};

export const monthHeader = d => {
  return moment(d).format('MMM');
};

export const yearHeader = d => {
  return moment(d).format('YYYY');
};

export const inputDate = d => {
  return moment(d).format('YYYY-MM-DD');
};

export const dateSelected = (d, date) => {
  return moment().year(d.year()).month(d.month()).date(date);
};

export const startingDate = d => {
  return moment().year(d.year()).month(d.month()).date('01');
};

export const diffDate = d => {
  const start = moment().year(d.year()).month(d.month()).date('01');
  const end = moment(start).endOf('month');
  return end.diff(start, 'days') + 1;
};

export const isSelectedDate = (d, s, date) => {
  if (moment(d).year() === moment(s).year() &&
    moment(d).month() === moment(s).month() &&
    date === moment(s).date()) {
    return true;
  }
  return false;
};
