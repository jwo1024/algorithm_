#include <string>
#include <iostream>
#include <stack>

using namespace std;

bool solution(string s)
{
    bool answer = true;
    stack<char> brackets;
    
    for (string::iterator iter = s.begin(); iter != s.end(); iter++) {
        if (brackets.empty())
            brackets.push(*iter);
        else if (brackets.top() == '(' && *iter == ')')
            brackets.pop();
        else
            brackets.push(*iter);
    }
    if (!brackets.empty())
        answer = false;
    return answer;
}