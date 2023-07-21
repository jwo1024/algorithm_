#include <string>
#include <vector>
#include <queue>

using namespace std;
typedef priority_queue<int, std::vector<int>, std::greater<int>> my_type_heap;

int pop_heap(my_type_heap &heap){
    int top = heap.top();
    heap.pop();
    return top;
}

int solution(vector<int> scoville, int K) {
    int answer = 0;
    int new_scoville = 0;
    
    if (scoville.empty())
        return -1;
    my_type_heap scoville_heap(scoville.begin(), scoville.end());
    while (scoville_heap.top() < K) {
        if (scoville_heap.size() < 2)
            return -1;
        new_scoville = (pop_heap(scoville_heap) + pop_heap(scoville_heap) * 2);
        scoville_heap.push(new_scoville);
        answer++;
    }
    return answer;
}
