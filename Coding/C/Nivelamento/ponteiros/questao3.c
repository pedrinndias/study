// Crie uma função chamada troca que receba como parâmetros dois ponteiros para inteiros. A função deve trocar os valores das variáveis para as quais os ponteiros apontam. Na sua função main, declare duas variáveis, chame a função troca passando os seus endereços e, por fim, imprima os valores para verificar a troca.

#include<stdio.h>
void troca(int *ptr1, int *ptr2){
	int aux;
	aux = *ptr1;
	*ptr1 = *ptr2;
	*ptr2 = aux;
}


int main(){
	int var1, var2;
	printf("Escreva um valor para var1 =");
	scanf("%d", &var1); 	

	printf("Escreva um valor para var2 =");
	scanf("%d", &var2); 	
	int *ptr1, *ptr2;
	ptr1 = &var1;
	ptr2 = &var2;
	troca(ptr1, ptr2);
	printf("Os valores trocados sao:\n Var1 = %d\n Var2 = %d\n", var1, var2);
	
	
	return 0;
}
