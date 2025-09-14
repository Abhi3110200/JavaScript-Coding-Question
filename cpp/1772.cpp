#include<bits/stdc++.h>
using namespace std;

int main(){
    int t;
    cin>>t;

    while(t--){
        string expr;
        cin >> expr;  // expression like "4+2"

        int a = expr[0] - '0';  // first digit
        int b = expr[2] - '0';  // third char (digit after '+')

        cout << a + b << endl;
    }
    return 0;
}