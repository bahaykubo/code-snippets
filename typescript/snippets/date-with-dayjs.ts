import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

/**
 * Run function only within given service hours
 *
 * @param serviceHours Service hours in 24hr format NZ time
 * @param function Function to run when triggered within service hours
 */
const runWithinServiceHours = async (options: {
  serviceHours: { start: number; end: number };
  function: () => Promise<void>;
}): Promise<void> => {
  if (options.serviceHours.start > options.serviceHours.end) {
    throw new Error(
      `Start service hour (${options.serviceHours.start}) must be less than the end service hour (${options.serviceHours.end}).`,
    );
  }

  if (options.serviceHours.start > 24 && options.serviceHours.end > 24) {
    throw new Error('Service hours cannot be set to more than 24 hr.');
  }

  dayjs.extend(utc);
  dayjs.extend(timezone);

  const currentDateTime = dayjs().tz('Pacific/Auckland');
  const startOfDay = currentDateTime.startOf('day');

  const isAfterServiceHoursStart = currentDateTime.isAfter(startOfDay.add(options.serviceHours.start, 'hours'));
  const isBeforeServiceHoursEnd = currentDateTime.isBefore(startOfDay.add(options.serviceHours.end, 'hours'));
  const withinServiceHours = isAfterServiceHoursStart && isBeforeServiceHoursEnd;

  console.info(
    `Checking if within service hours. start (${options.serviceHours.start}hr); end (${options.serviceHours.end}hr)`,
  );
  if (withinServiceHours) {
    console.log('Running test...');
    await options.function();
  } else {
    console.info('Outside service hours, will not run the test.');
  }
};

runWithinServiceHours({
  serviceHours: { start: 1, end: 2 },
  function: async () => {
    await new Promise(() => setTimeout(() => console.log('bingo'), 1000));
  },
});
