import moment from './moment-hijri';

export const initialMoment = () => {
  return moment().format('YYYY-MM-DD');
};

export const oneYearAhead = d => {
  return moment(d).add(1, 'iYear');
};

export const oneYearBack = d => {
  return moment(d).subtract(1, 'iYear');
};

export const tenYearsAhead = d => {
  return moment(d).add(10, 'iYear');
};

export const tenYearsBack = d => {
  return moment(d).subtract(10, 'iYear');
};

export const oneMonthAhead = d => {
  return moment(d).add(1, 'iMonth');
};

export const oneMonthBack = d => {
  return moment(d).subtract(1, 'iMonth');
};

export const monthHeader = d => {
  return moment(d).format('iMMM');
};

export const yearHeader = d => {
  return moment(d).format('iYYYY');
};

export const inputDate = d => {
  return moment(d).format('iYYYY-iMM-iDD');
};

export const dateSelected = (d, date) => {
  const year = moment(d).format('iYYYY');
  const month = moment(d).format('iMM');
 
  hijri_date = `${year}/${month}/${date}`   
  return hijri_date;
};

export const startingDate = d => {
  return moment(d).startOf('iMonth');
};

export const diffDate = d => {
  const start = moment(d).startOf('iMonth');
  const end = moment(start).endOf('iMonth');
  return end.diff(start, 'days') + 1;
};

export const isSelectedDate = (d, s, date) => {
  if (moment(d).iYear() === moment(s).iYear() &&
    moment(d).iMonth() === moment(s).iMonth() &&
    date === moment(s).iDate()) {
    return true;
  }
  return false;
};
