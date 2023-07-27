#include <vector>
#include <unordered_set>
using namespace std;

int solution(vector<int> nums)
{
    int answer = 0;

    std::unordered_set<int> num_set;
    for (std::vector<int>::iterator iter = nums.begin(); iter != nums.end(); iter++) {
        num_set.insert(*iter);
    }
    if (num_set.size() > nums.size() / 2)
        answer = nums.size() / 2;
    else
        answer = num_set.size();
    return answer;
}