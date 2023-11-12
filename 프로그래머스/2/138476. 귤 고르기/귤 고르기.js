function solution(k, tangerine) {
    let answer = 0;
    const tDict = {};
    let arr = [];

    tangerine.forEach((tan) => {tDict[tan] = !tDict[tan] ? 1 : tDict[tan] + 1});
    
    arr = Object.values(tDict).sort((a, b) => b - a);

    let total = 0;
    for (let value of arr) {
        total += value;
        answer++;
        if (total >= k)
            break;
    }
    
    return answer;
}
