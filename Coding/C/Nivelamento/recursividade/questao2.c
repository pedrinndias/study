// Escreva uma função recursiva fibonacci que recebe um inteiro n e retorna o n-ésimo termo da sequência de Fibonacci. Os casos base são fibonacci(0) = 0 e fibonacci(1) = 1. Para n > 1, fibonacci(n) = fibonacci(n-1) + fibonacci(n-2).

#include<stdio.h>
int fibonacci(int n){
	if(n==0){
		return 0;
	}else{
		if(n==1){
			return 1;
		}else{
			return (fibonacci(n-1) + fibonacci(n-2));
		}
	}
}


int main(){
	int n;
	printf("Escreva um numero inteiro positivo:");
	scanf("%d", &n);
	printf("O n-esimo numero na sequencian de fibonacci referente a posicao n eh: %d\n", fibonacci(n));
	return 0;
}
