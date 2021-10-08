export const today = new Date(Date.now()).getMonth() + 1 + "/" + new Date(Date.now()).getDate() + "/" + new Date(Date.now()).getFullYear();

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const months = [
  {
    utc: 1,
    name: 'January',
    shortName: 'Jan',
    daysInMonth: 31
  },
  {
    utc: 2,
    name: 'February',
    shortName: 'Jan',
    daysInMonth: new Date(Date.now()).getFullYear() % 4 === 0 ? 29 : 28
  },
  {
    utc: 3,
    name: 'March',
    shortName: 'Mar',
    daysInMonth: 31
  },
  {
    utc: 4,
    name: 'April',
    shortName: 'Apr',
    daysInMonth: 30
  },
  {
    utc: 5,
    name: 'May',
    shortName: 'May',
    daysInMonth: 31
  },
  {
    utc: 6,
    name: 'June',
    shortName: 'Jun',
    daysInMonth: 30
  },
  {
    utc: 7,
    name: 'July',
    shortName: 'Jul',
    daysInMonth: 31
  },
  {
    utc: 8,
    name: 'August',
    shortName: 'Aug',
    daysInMonth: 31
  },
  {
    utc: 9,
    name: 'September',
    shortName: 'Sep',
    daysInMonth: 30
  },
  {
    utc: 10,
    name: 'October',
    shortName: 'Oct',
    daysInMonth: 31
  },
  {
    utc: 11,
    name: 'November',
    shortName: 'Nov',
    daysInMonth: 30
  },
  {
    utc: 12,
    name: 'December',
    shortName: 'Dec',
    daysInMonth: 31
  }
]