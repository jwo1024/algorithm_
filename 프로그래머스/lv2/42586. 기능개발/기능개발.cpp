#include <string>
#include <vector>
#include <iostream>

using namespace std;
typedef vector<int>::iterator vec_iter;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    int answer_idx = 0;
    int max_time = 0;
    int cur_time = 0;
    
    // 총  걸걸리는 시간 계산하고, 숫자 저장해두고, 
    // 뒤에  계산하고 ,  적거나  같으면은 무시 ++해해주주기 , 많많으으면면은  계계싼싼하하기
    //answer.push_back(0);
    vec_iter progress = progresses.begin();
    vec_iter speed = speeds.begin();
    while (progress != progresses.end() || speed != speeds.end()) {
      //  std::cout << "p : " << *progress << " s : " << *speed << "\n";
        
        cur_time = (100 - *progress) / *speed;
        if ((100 - *progress) % *speed > 0)
            cur_time++;
        if (max_time < cur_time) {
            max_time = cur_time;
            answer.push_back(1);
        }
        else
            answer.back()++;
        progress++;
        speed++;
    }
    
    return answer;
}