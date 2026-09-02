// Escreva um programa que pergunte ao usuário o número de elementos que ele deseja em um vetor de inteiros. Use malloc para alocar dinamicamente a quantidade de memória necessária. Preencha o vetor com valores (por exemplo, o índice de cada posição) e, em seguida, imprima o vetor. Não se esqueça de liberar a memória com free no final.

#include<stdio.h>
#include<stdlib.h>


int main(){
	int tam;
	printf("Escreva o número de elementos que ele deseja em um vetor de inteiros:");
	scanf("%d", &tam);
	int *array = (int *)malloc(tam * sizeof(int));
	for(int i=0; i<tam; i++){
		array[i]=i;
		printf("array[%d] = %d\n",i, array[i] );
	}
	
	free(array);
	return 0;
}
