// Desenvolva uma função chamada ehPar que recebe um número inteiro e retorna 1 se o número for par e 0 se for ímpar. Na main, use esta função dentro de um if para informar ao usuário se o número digitado é par ou ímpar.

#include<stdio.h>
int ehPar(int num){
	if(num % 2 == 0){ 
		return 1;
	}else{
		return 0;
	}
}


int main(){
	int num;
	printf("Escreva um numero inteiro:");
	scanf("%d", &num);
	switch(ehPar(num)){
		case 1: 
			printf("O numero digitado eh par!\n");
			break;
		case 0:
			printf("O numero digitado eh impar!\n");
			break;
	}
	return 0;
}
