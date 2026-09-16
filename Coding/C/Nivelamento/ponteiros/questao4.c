// Escreva uma função que receba dois números inteiros e dois ponteiros para int. A função deve calcular a soma e a subtração dos dois números e armazenar os resultados nos endereços de memória apontados pelos ponteiros. Na main, chame a função e imprima os resultados da soma e da subtração.

#include<stdio.h>
void calcular(int num1, int num2, int *ptr1, int *ptr2){
	*ptr1 = num1 + num2;
	*ptr2 = num1 - num2;
}


int main(){
	int soma, subtracao, num1, num2;
	int *ptr1;
	int *ptr2;
	ptr1 = &soma;
	ptr2 = &subtracao;
	printf("Escreva um numero para variavel 'num1' =");
	scanf("%d", &num1);

	printf("Escreva um numero para variavel 'num2' =");
	scanf("%d", &num2);
	
	calcular(num1, num2, ptr1, ptr2);
	printf("A soma dos numeros = %d\n A subtracao dos numeros = %d\n", soma, subtracao);	

	return 0;
}
