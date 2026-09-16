// Escreva um programa que declare uma variável int com um valor inicial. Crie um ponteiro que aponte para essa variável. Usando apenas o ponteiro, altere o valor da variável original. Imprima o valor da variável antes e depois da alteração para confirmar que funcionou.

#include<stdio.h>
int main(){
	int var = 10;
	printf("Valor da variavel originalmente: %d\n", var);
	int *ptr;
	ptr = &var;
	*ptr = 20;
	printf("Valor da variavel modificada com ponteiro %d\n", var);
	



	return 0;
}
