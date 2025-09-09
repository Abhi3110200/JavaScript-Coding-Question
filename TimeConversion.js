const Time = '12:01:03AM'


function timeConversion(s) {
    let [hh, mm, ss] = s.slice(0, 8).split(':');
    const modifier = s.slice(8);

    if (modifier === 'AM' && hh === '12') hh = '00';
    if (modifier === 'PM' && hh !== '12') hh = String(Number(hh) + 12).padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
}

// Example usage:
console.log(timeConversion('07:05:45PM')); // 19:05:45
console.log(timeConversion('12:01:00AM')); // 00:01:00

console.log(timeConversion(Time));