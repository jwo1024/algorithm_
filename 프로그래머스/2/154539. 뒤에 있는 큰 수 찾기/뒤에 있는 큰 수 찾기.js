function solution(numbers) {
    const answer = [];
    const stack = [];

    for (let i = 0; i < numbers.length; i++) {
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }

    // 스택에 남아있는 값들은 다음으로 큰 수가 없는 값들이므로 -1로 채웁니다.
    while (stack.length > 0) {
        answer[stack.pop()] = -1;
    }

    return answer;
}