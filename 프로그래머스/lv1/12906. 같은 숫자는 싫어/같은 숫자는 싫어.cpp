#include <vector>

using namespace std;

vector<int> solution(vector<int> arr) 
{
    vector<int> answer;
    int num = -1;

    for (vector<int>::iterator iter = arr.begin(); iter != arr.end(); iter++) {     
        if (num != *iter)
            answer.push_back(*iter);
        num = *iter;
    }
    return answer;
}