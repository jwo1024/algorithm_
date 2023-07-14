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
            current_weight -= bridge.front().first;
            bridge.pop_front();
        }
        if (iter != truck_weights.end() && \
            bridge.size() < bridge_length && current_weight + *iter <= weight) {
            bridge.push_back(pair<int, int>(*iter, answer));
            current_weight += *iter;
            iter++;
        }
        answer++;
    }
    return answer;
}