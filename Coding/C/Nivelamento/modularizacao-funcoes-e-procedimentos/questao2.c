//Escreva uma função chamada somar que recebe dois números inteiros como parâmetros e retorna a soma deles. Na função main, peça ao usuário para digitar dois números, chame a função somar e imprima o resultado.

#include<stdio.h>

int somar(int num1, int num2){
	int soma = num1 + num2;
	return soma;
}


int main(){
	int num1, num2;
	printf("Escreva um valor para variavel num1:");
	scanf("%d", &num1);
	printf("Escreva um valor para variavel num2:");
	scanf("%d", &num2);
	printf("A soma dos numeros eh = %d", somar(num1, num2));


	return 0;
}
