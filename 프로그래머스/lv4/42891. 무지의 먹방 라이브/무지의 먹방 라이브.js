function solution(food_times, k) {
    let totalSum = food_times.reduce((sum, time) => sum + time, 0);
    if (totalSum <= k) return -1;

    let pq = food_times.map((time, index) => ({
        id: index + 1,
        time: time,
    })).sort((a,b)=>b.time-a.time);

    let length = food_times.length;
    let sumValue = 0;

   while ((pq[pq.length-1].time - sumValue) * length <= k) {
        let shortestTime = pq[pq.length-1].time;
        k -= (shortestTime - sumValue) * length;
        sumValue = shortestTime;

       while (pq[pq.length-1].time === shortestTime){
           pq.pop();
           length--;
       }
       
       if(pq.length == 0)
           return -1;
   }

   pq.sort((a,b)=>a.id-b.id);

   return pq[k % length].id;
}
