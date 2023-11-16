// 괄호의 개수는 맞지만 짝이 맞지 안항
// 균형잡힌 괄호 문자열
// 올바른 괄호 문자열
// 

function turnRightStr (str) {
    // console.log("!", str);
    if (!str || str.length == 0)
        return '';
    
    let strU; // 균형잡힌 괄호 문자열 최소여야 함
    let strV;
    let isRight = true;
    let stack = [];
    
    for (let idx = 0; idx < str.length; idx++) {
        if (stack.length) {
            if (str[idx] == ')' && stack[stack.length -1] == '(') {
                stack.pop();
            }
            else if (str[idx] == '(' && stack[stack.length -1] == ')') {
                stack.pop();
                isRight = false;
            }
            else
               stack.push(str[idx]);
        }
        else
            stack.push(str[idx]);
        if (stack.length === 0) {
            strU = str.slice(0, idx + 1);
            strV = str.slice(idx + 1, str.length);
            break;
        }
    }

    if (isRight) {
        return strU + turnRightStr(strV);
    }
    else {
        let strNew = "(";
        strNew += turnRightStr(strV) + ")";
        strU = strU.length ? strU.slice(1, strU.length -1) : "";
        strU = strU.replaceAll('(', '.').replaceAll(')', '(').replaceAll('.', ')');
        return strNew + strU; // reverse bracket
    }

}

function solution(p) {
    var answer = '';
    
    // console.log(p.length);
    answer = turnRightStr(p)
    console.log(answer);
    
    return answer;
}