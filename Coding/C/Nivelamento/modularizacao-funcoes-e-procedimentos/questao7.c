// Faça um procedimento chamado trocarValores que recebe dois ponteiros para inteiros como parâmetros e troca os valores das variáveis para as quais eles apontam. Na main, declare duas variáveis, imprima seus valores, chame a função e imprima os valores novamente para mostrar que foram trocados.

#include<stdio.h>
void trocarValores(int *n1, int *n2){
	int temp;
	temp = *n1;
	*n1 = * n2;
	*n2 = temp;
}

int main(){
	int n1, n2;
	printf("Escreva um valor para n1:");
	scanf("%d", &n1);
	printf("Escreva um valor para n2:");
	scanf("%d", &n2);
	trocarValores(&n1, &n2);
	printf("Com valores trocados n1 agora eh %d e n2 agora eh %d\n", n1, n2);


	return 0;
}
