// 3:10 ~

// U X 현재 선택된 행 - (X 칸 위)
// D X 현재 선택된 행 - (X 칸 아래)
// C 현재 선택된 행 삭제 후 바로 아래행 선택 // 삭제된 행이 가장 마지막이면 바로 윗 행
// Z 가장 최근에 삭제된 행을 복구 (선택된 행에는 영향 x)

function solution(n, k, cmd) {
    
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push({idx : i, pre : i - 1, next : i + 1});
    }
    arr[n - 1].next = -1; // 마지막도 -1
    // console.log (arr);
    let deleteStack = []; // {idx, next}
    let currentIdx = k;

    cmd.forEach((command) => {
        if (command[0] === 'U') {
            let num = Number(command.slice(1));
            // console.log(arr);
            // console.log("num", num, "currentIdx", currentIdx);
            currentIdx = moveCurrentIdxUp(arr, currentIdx, num);
            // console.log("moveCurrentIdxUp up", currentIdx);
        }
        else if (command[0] === 'D') {
            let num = Number(command.slice(1));
            // console.log(arr);
            // console.log("num", num, "currentIdx", currentIdx);
            currentIdx = moveCurrentIdxDown(arr, currentIdx, num);
            // console.log("moveCurrentIdxDown down", currentIdx);
        }
        else if (command[0] === 'C') {
            deleteStack.push(arr[currentIdx]);
            if (arr[currentIdx].pre !== -1)
                arr[arr[currentIdx].pre].next = arr[currentIdx].next;
            if (arr[currentIdx].next !== -1) {
                arr[arr[currentIdx].next].pre = arr[currentIdx].pre;
                currentIdx = arr[currentIdx].next;
            }
            else
                currentIdx = arr[currentIdx].pre;
        }
        else if (command[0] === 'Z' && deleteStack.length) {
            let pop = deleteStack.pop();
            if (pop.pre !== -1)
                arr[pop.pre].next = pop.idx;
            if (pop.next !== -1)
                arr[pop.next].pre = pop.idx;
        }
    })

    let answer = Array(n).fill('O');
    while (deleteStack.length) {
        answer[deleteStack.pop().idx] = 'X';
    }
    return answer.join('');
}

function moveCurrentIdxUp(arr, currentIdx, num) {
    for (let i = 0; i < num; i++) {
        // if (arr[currentIdx].pre )
        // console.log(arr);
        // console.log(currentIdx);
        if (arr[currentIdx])
            currentIdx = arr[currentIdx].pre;
    }
    return currentIdx;
}

function moveCurrentIdxDown(arr, currentIdx, num) {
    for (let i = 0; i < num; i++) {
        if (arr[currentIdx])
            currentIdx = arr[currentIdx].next;
    }
    return currentIdx;
}
