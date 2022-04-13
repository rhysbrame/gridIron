const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const addZero = (i) => {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

export const date = (dateString) => {
  const dateObject = new Date(dateString);

  const minutes = dateObject.getMinutes().toString().padStart(2, '0');
  const hours = addZero(dateObject.getHours());
  const weekday = days[dateObject.getDay()];
  const date = dateObject.getDate();
  const month = months[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  const formattedDateObject = {
    minutes: `${minutes}`,
    hours: `${hours}`,
    weekday: `${weekday}`,
    date: `${date}`,
    month: `${month}`,
    year: `${year}`,
  };

  return formattedDateObject;
};
