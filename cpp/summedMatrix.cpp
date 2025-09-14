#include <bits/stdc++.h>
using namespace std;

int main(){
    long long n, q;

    cin>>n>>q;

    int count=0;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(i+j==q){
                count++;
            }
        }
    }

    cout<<count<<endl;
    return 0;
}