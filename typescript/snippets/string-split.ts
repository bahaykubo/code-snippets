import moment from 'moment';

const example = 'Energy Company Ltd, 8 Feb 2021 - 11 Feb 2021';
const split = example.split(',');
const provider = split[0];
const dateRange = split[1];
const splitDates = dateRange.split('-');
const dateFrom = moment(splitDates[0].trim(), 'D MMM YYYY').format('DDMMYYYY');
const dateTo = moment(splitDates[1].trim(), 'D MMM YYYY').format('DDMMYYYY');

console.log({
  provider,
  dateFrom,
  dateTo,
});
