#include <string>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

// input [작업이 요청되는 시점, 작업의 소요시간] 
struct my_compare {
    bool operator()(vector<int> t1, vector<int> t2){
        if (t1.size() != 2 || t2.size() != 2)
            return false;
        if (t1[1] > t2[1]) // 소요 시간 우선 비교
            return true;
        else if (t1[1] == t2[1] && t1[0] > t2[0])
            return true;
        else
            return false;
    }
};

typedef priority_queue< vector<int>, vector<vector<int> >, my_compare > time_compare_heap;

int solution(vector<vector<int>> jobs) {
    int answer = 0;
    int time = 0;
    int jobs_size = jobs.size();
    
    sort(jobs.rbegin(), jobs.rend()); // 내림차순 정렬
    time_compare_heap avaliable_jobs;
    
    while (1) {
        // 현재 시각 가능한 모든 애들 avaliable_jobs 에 때려 넣음
        while (!jobs.empty() && jobs.back()[0] <= time) {
            avaliable_jobs.push(jobs.back());
            jobs.pop_back();
        }
        // 실행시킴
        if (!avaliable_jobs.empty()) // 실행될 수 있는 job이 있으면
        {
            time += (avaliable_jobs.top())[1]; // 시간 업데이트 해주기
            answer += time - (avaliable_jobs.top())[0]; // 소요시간 더하기
            avaliable_jobs.pop();
        }
        else if (!jobs.empty()) // 현재 실행될 수 있는 job이 없으면 시간 업데이트
            time = jobs.back()[0];
        else // 둘다 비어있다면
            break ; 
    }
    return answer / jobs_size;
}