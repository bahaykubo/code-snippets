import { addDays, startOfDay } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';

// eslint-disable-next-line
const dateTimeFormat = "yyyy-MM-dd'T'HH:mmXXX";

const newDate = new Date('2020-08-15T00:00');
const newDateDaylightSaving = new Date('2020-10-15T00:00');

console.log(`Format dates with date-fns -> ${format(newDate, dateTimeFormat)}`);
console.log(`Accounts for daylight saving time offset -> ${format(newDateDaylightSaving, dateTimeFormat)}`);

console.log(`Set date to start of day -> ${format(startOfDay(newDate), dateTimeFormat)}`);
console.log(`Add days to date -> ${format(addDays(newDate, 1), dateTimeFormat)}`);

console.log('Convert to timezone with date-fns-timezone and format with date-fns');
console.log(format(utcToZonedTime(newDate, 'Asia/Manila'), dateTimeFormat, { timeZone: 'Asia/Manila' }));
console.log(format(utcToZonedTime(newDate, 'Australia/Sydney'), dateTimeFormat, { timeZone: 'Australia/Sydney' }));
console.log(format(utcToZonedTime(newDate, 'Pacific/Auckland'), dateTimeFormat, { timeZone: 'Pacific/Auckland' }));

// date-fns dates are immutable, compared to moment, which requires you to clone
setTimeout(() => {
  const addDaysToOriginalDate = addDays(newDate, 5);
  console.log(`Original date should still be "2020-08-15" -> ${newDate}`);
  console.log(`Add days to date should be "2020-08-20" -> ${addDaysToOriginalDate}`);
}, 500);
