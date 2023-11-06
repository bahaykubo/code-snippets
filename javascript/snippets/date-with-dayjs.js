const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const dateTimeFormat = 'YYYY-MM-DDTHH:mm:ssZ';

const newDate = new Date('2020-08-15T00:00');
const newDateDaylightSaving = new Date('2020-10-15T00:00');

console.log(`Format dates with date-fns -> ${dayjs(newDate).format(dateTimeFormat)}`);
console.log(`Accounts for daylight saving time offset -> ${dayjs(newDateDaylightSaving).format(dateTimeFormat)}`);

console.log(`Set date to start of day -> ${dayjs(newDate).startOf('day').format(dateTimeFormat)}`);
console.log(`Add days to date -> ${dayjs(newDate).add(1, 'day').format(dateTimeFormat)}`);

console.log('Convert to timezone with date-fns-timezone and format with date-fns');
console.log(dayjs(newDate).tz('Asia/Manila').format(dateTimeFormat));
console.log(dayjs(newDate).tz('Australia/Sydney').format(dateTimeFormat));
console.log(dayjs(newDate).tz('Pacific/Auckland').format(dateTimeFormat));

// dayjs dates are immutable, compared to moment, which requires you to clone
setTimeout(() => {
  const addDaysToOriginalDate = dayjs(newDate).add(5, 'day');
  console.log(`Original date should still be "2020-08-15" -> ${dayjs(newDate).format(dateTimeFormat)}`);
  console.log(`Add days to date should be "2020-08-20" -> ${addDaysToOriginalDate.format(dateTimeFormat)}`);
}, 500);
