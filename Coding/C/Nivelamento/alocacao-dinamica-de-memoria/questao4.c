// Comece alocando um vetor para 5 inteiros usando malloc e preencha-o. Em seguida, peça ao usuário um novo tamanho para o vetor (maior que 5). Use realloc para redimensionar o vetor para o novo tamanho. Peça ao usuário para preencher as novas posições. Imprima o vetor completo e, por fim, libere a memória.

#include <stdio.h>
#include <stdlib.h>
#define TAM 5

int main()
{
	int *array = (int *)malloc(TAM * sizeof(int));
	for (int i = 0; i < TAM; i++)
	{
		printf("Escreva um valor para o array[%d]:", i);
		scanf("%d", &array[i]);
	}
	int newTAM;
	printf("Escreva um novo tamanho para o array que seja maior que 5:");
	scanf("%d", &newTAM);
	array = (int *)realloc(array, newTAM * sizeof(int)); // corrigi a alocação para usar realloc, que redimensiona o vetor existente
	if (array == NULL){ // verifica se a alocação de memória foi bem-sucedida
		printf("Erro ao alocar memória.\n");
		return 1;
	}
	for (int i = TAM; i < newTAM; i++)
	{
		printf("Escreva um valor para o array[%d]:", i);
		scanf("%d", &array[i]);
	}
	for (int i = 0; i < newTAM; i++)
	{
		printf("Array[%d]:%d\n", i, array[i]);
	}
	free(array);

	return 0;
}
