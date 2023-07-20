#include <string>
#include <vector>
#include <set>

using namespace std;
vector<int> solution(vector<string> operations) {
    vector<int> answer;

    multiset<int> numbers; // 기본 => less 내림차순 정렬
    
    for (vector<string>::iterator iter = operations.begin(); 
         iter != operations.end(); iter++) {
        if (*iter == "D 1" && !numbers.empty()) { // 최솟값 삭제
            numbers.erase(--(numbers.end()));
        }
        else if (*iter == "D -1" && !numbers.empty()){ // 최대값 삭제
            numbers.erase(numbers.begin());
        }
        else if ((*iter)[0] == 'I') {// 숫자 삽입
            (*iter).erase(0, 2);
            int i = stoi(*iter);
            numbers.insert(i);
        }
        else
            ;
    }
    if (numbers.empty()) {
        answer.push_back(0); //[0, 0]
        answer.push_back(0); //[0, 0]
    }
    else {
        answer.push_back(*(--(numbers.end())));
        answer.push_back(*numbers.begin());
    }
    return answer;
}