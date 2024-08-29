function solution(x, y, n) {
    if (x === y) {
        return 0;
    }

    const dp = new Array(y + 1).fill(Infinity);
    dp[x] = 0;

    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) {
            continue;
        }

        if (i + n <= y) {
            dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        }

        if (i * 2 <= y) {
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        }

        if (i * 3 <= y) {
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
        }
    }

    return dp[y] === Infinity ? -1 : dp[y];
}

function solution(x, y, n){
        const calc=(a,num)=>{
        switch(num){
            case 0:
                return a-n;
            case 1:
                if(a%2===0){
                    return a/2;
                }
                else{
                    return 0;
                }
            case 2:
                if(a%3===0){
                    return a/3;
                }
                else{
                    return 0;
                }
        }
    }

    const bfs=()=>{
        let queue=[[y,0]];
        let visit={};
        visit[y]=1;

        while(queue.length){
            let [cur,count]=queue.shift();

            if(cur===x) return count;

            for(let i=0;i<3;++i){
                let next=calc(cur,i);
                if(next>=x && !visit[next]){
                    visit[next]=1;
                    queue.push([next,count+1]);
                }
            }
        }

        return -1;
    }


    return bfs();
}
