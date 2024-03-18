#include<stdio.h>

int main(){
    int num;
	scanf("%d", &num);
	for (int num1 = 1; num1 <= num; num1++) {
		long long int a;
		long long int b[95];
		long long int c = 2;
		b[0] = 0, b[1] = 1;
		scanf("%lld", &a);
		while (c <= a) {
			b[c] = b[c - 1] + b[c - 2];
			c++;
		}
		if (a == 0) {
			printf("1 0\n");
		}
		else if (a == 1) {
			printf("0 1\n");
		}
		else {
			printf("%lld %lld\n", b[a - 1], b[a]);
		}
	}
}