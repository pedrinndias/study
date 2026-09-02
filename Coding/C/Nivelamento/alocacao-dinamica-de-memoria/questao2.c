// Refaça o exercício anterior, mas desta vez utilize calloc para alocar a memória. Após a alocação e antes de preencher o vetor com seus próprios valores, imprima o conteúdo do vetor para verificar que calloc inicializou todos os elementos com zero. Depois, prossiga para preencher, imprimir e liberar a memória.

#include<stdio.h>
#include<stdlib.h>

int main(){
	int tam;
	printf("Escreva um valor referente  ao tamanho do array de inteiros");
	scanf("%d", &tam);
	int *array=(int *)calloc(tam, sizeof(int));
	for(int i=0; i<tam; i++){
		printf("Array[%d] = %d\n", i, array[i]);
	}	
	for(int i=0; i<tam; i++){
		printf("Escreva um valor para array[%d]=", i);
		scanf("%d", &array[i]);
	}

	for(int i=0; i<tam; i++){
		printf("Array[%d] = %d\n", i, array[i]);
	}	



	return 0;
}
