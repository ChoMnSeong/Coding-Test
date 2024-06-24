function solution(priorities, location) {
  const queue = [];
  for (let j = 0; j < priorities.length; j++) {
    queue.push({ index: j, priority: priorities[j] });
  }

  let count = 0;
  while (queue.length > 0) {
    const front = queue.shift();
    let isHigherPriority = false;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].priority > front.priority) {
        isHigherPriority = true;
        break;
      }
    }
    
    if (isHigherPriority) {
      queue.push(front);
    } else {
      count++;
      if (front.index === location) {
        return count;
      }
    }
  }
}
