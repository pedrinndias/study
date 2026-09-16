// Escreva um programa que pergunte ao usuário o tamanho de um vetor. Em seguida, use malloc para alocar dinamicamente um vetor de float com o tamanho informado. Peça ao usuário para preencher o vetor, calcule a média dos valores e, por fim, libere a memória alocada com free.

#include<stdio.h>
#include<stdlib.h>

int main(){
	int tam;
	printf("Insira um tamanho para um array:");
	scanf("%d", &tam);
	float *array=(float *)malloc(tam * sizeof(float));
	if(array == NULL){
		return 1;
	}
	float media=0.0;
	for(int i=0; i<tam; i++){
		printf("Insira um valor para array[%d]=", i);
		scanf("%f", &array[i]);
		media += array[i];
	}
	
	for(int i=0; i<tam; i++){
		printf("Array[%d] = %.2f\n", i, array[i]);
	}
	
	printf("A media dos valores = %.2f", (media/tam));
	free(array);
	return 0;
}
