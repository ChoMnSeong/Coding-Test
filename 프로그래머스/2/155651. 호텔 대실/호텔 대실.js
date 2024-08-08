function calculate(time) {
    const [hour, min] = time.split(':').map(Number);
    return hour * 60 + min;
}

function solution(book_time) {
    const events = [];

    book_time.forEach(([start, end]) => {
        events.push([calculate(start), 'start']);
        events.push([calculate(end) + 10, 'end']);
    });

    events.sort((a, b) => a[0] - b[0] || (a[1] === 'start' ? 1 : -1));

    let maxRooms = 0;
    let currentRooms = 0;

    events.forEach(([time, type]) => {
        if (type === 'start') {
            currentRooms++;
            maxRooms = Math.max(maxRooms, currentRooms);
        } else {
            currentRooms--;
        }
    });

    return maxRooms;
}

