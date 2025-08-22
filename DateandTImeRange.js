const startYear = new Date(2000, 10, 31);
const currentYear = new Date();
// i want to calculate the birthday calculate with the when i enter my birhtday then i should be how years, month, day, hour, min, sec in js
// Birthday Age Calculator: calculates years, months, days, hours, minutes, seconds from birthday
const readline = require('readline');

function calculateAgeComponents(birthday) {
  const now = new Date();
  let years = now.getFullYear() - birthday.getFullYear();
  let months = now.getMonth() - birthday.getMonth();
  let days = now.getDate() - birthday.getDate();
  let hours = now.getHours() - birthday.getHours();
  let minutes = now.getMinutes() - birthday.getMinutes();
  let seconds = now.getSeconds() - birthday.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    // Get days in previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
  return { years, months, days, hours, minutes, seconds };
}


function promptBirthdayAndShowAge() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter your birthday (YYYY-MM-DD HH:mm:ss or YYYY-MM-DD): ', (input) => {
    let birthday;
    if (/^\d{4}-\d{2}-\d{2}( \d{2}:\d{2}:\d{2})?$/.test(input.trim())) {
      birthday = new Date(input.trim());
    } else {
      console.log('Invalid format. Please use YYYY-MM-DD or YYYY-MM-DD HH:mm:ss');
      rl.close();
      return;
    }
    if (isNaN(birthday.getTime())) {
      console.log('Invalid date.');
      rl.close();
      return;
    }
    rl.close();
    console.clear();
    console.log('Press Ctrl+C to exit.');
    setInterval(() => {
      const age = calculateAgeComponents(birthday);
      process.stdout.write(`\rYou are ${age.years} years, ${age.months} months, ${age.days} days, ${age.hours}:${age.minutes}:${age.seconds}`);
    }, 1000);
  });
}

// Run the birthday calculator when this file is executed
promptBirthdayAndShowAge();