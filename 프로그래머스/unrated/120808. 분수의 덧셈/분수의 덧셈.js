function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    answer.push(numer1 * denom2 + numer2 * denom1);
    answer.push(denom1 * denom2);    
    let division = Math.floor(answer[1] / 2);
    while (division > 1) {
        if (answer[0] % division === 0 && answer[1] % division === 0) {
            answer[0] = answer[0] / division;
            answer[1] = answer[1] / division;
        }
        division--;
    }
    
    
    return answer;
}
