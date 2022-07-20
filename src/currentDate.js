const currentDate = () => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const month = [
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

  let today = new Date();
  const ee = today.getDate();
  const dd = weekday[today.getDay()];
  const mm = month[today.getMonth()];

  return `${dd}, ${ee} ${mm}`;
};

export { currentDate };
