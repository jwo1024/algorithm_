#include <string>
#include <vector>
#include <deque>

#include <iostream>

using namespace std;

int solution(int bridge_length, int weight, vector<int> truck_weights) {
    int answer = 0;
    deque<pair<int, int> > bridge;
    int current_weight = 0;
    
    for (vector<int>::iterator iter = truck_weights.begin(); iter != truck_weights.end() || !bridge.empty();) {
        if (!bridge.empty() && bridge.front().second == answer - bridge_length) {
            //std::cout << "pop " <<  bridge.front().first << std::endl;
            current_weight -= bridge.front().first;
            bridge.pop_front();
        }
        if (iter != truck_weights.end() && \
            bridge.size() < bridge_length && current_weight + *iter <= weight) {
            //std::cout << "push " <<  *iter << std::endl;
            bridge.push_back(pair<int, int>(*iter, answer));
            current_weight += *iter;
            iter++;
        }
//        std::cout << answer << std::endl;
        answer++;
    }
    return answer;
}