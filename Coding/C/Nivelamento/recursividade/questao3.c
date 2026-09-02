// Faça uma função recursiva somaAteN que recebe um inteiro positivo n e retorna a soma de todos os números de 1 até n. O caso base é quando n é 1, retornando 1.

#include<stdio.h>

int somaAteN(int n){
	if(n==1){
		return 1;
	}else{
		return n + somaAteN(n-1);
	}
}


int main(){
	int n;
	printf("Escreva um numero N, vamos fazer um somatorio: ");
	scanf("%d", &n);
	printf("Somatorio de 1 ate N: %d\n", somaAteN(n));



	return 0;
}
