import moment from 'moment';

const dateStart = moment('2020-01-15');
const dateEnd = moment('2020-03-18');

const currentDate = dateStart.clone();
const monthRange = [];
while (dateEnd > currentDate || currentDate.format('MM') === dateEnd.format('MM')) {
  monthRange.push({
    from: currentDate.startOf('month').format('YYYY-MM-DD').toString(),
    to: currentDate.endOf('month').format('YYYY-MM-DD').toString(),
  });
  currentDate.add(1, 'month');
}

console.log(monthRange);
