function solution(fees, records) {
  const result = [];
  const ls = new Map();
  const totalPrice = new Map();
  const [minutes, price, unitMinutes, unitPrice] = fees;

  function calculateParkingFee(parkedTime) {
    if (parkedTime <= minutes) {
      return price;
    } else {
      const extraTime = parkedTime - minutes;
      const extraFee = Math.ceil(extraTime / unitMinutes) * unitPrice;
      return price + extraFee;
    }
  }

  records.forEach((record) => {
    const [time, num, type] = record.split(" ");
    const [hour, minute] = time.split(":").map(Number);

    if (type === "IN") {
      ls.set(num, hour * 60 + minute);
    } else {
      if (ls.has(num)) {
        const outTime = hour * 60 + minute;
        const inTime = ls.get(num);
        const parkedTime = outTime - inTime;
        if (totalPrice.has(num)) {
          totalPrice.set(num, totalPrice.get(num) + parkedTime);
        } else {
          totalPrice.set(num, parkedTime);
        }
        ls.delete(num);
      }
    }
  });

  // 아직 출차되지 않은 차량에 대한 처리
  ls.forEach((inTime, num) => {
    const outTime = 23 * 60 + 59; // 23:59
    const parkedTime = outTime - inTime;
    if (totalPrice.has(num)) {
      totalPrice.set(num, totalPrice.get(num) + parkedTime);
    } else {
      totalPrice.set(num, parkedTime);
    }
  });

  totalPrice.forEach((parkedTime, carNumber) => {
    const fee = calculateParkingFee(parkedTime);
    result.push({ carNumber, fee });
  });

  result.sort((a, b) => parseInt(a.carNumber) - parseInt(b.carNumber));

  return result.map((entry) => entry.fee);
}
