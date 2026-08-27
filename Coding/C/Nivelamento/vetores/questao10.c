// Implemente o algoritmo de ordenação "Bubble Sort" para ordenar um vetor de 10 números inteiros em ordem crescente. Ao final, imprima o vetor ordenado. (O Bubble Sort funciona comparando pares de elementos adjacentes e trocando-os de lugar se estiverem na ordem errada, repetindo o processo até que o vetor esteja ordenado).

#include <stdio.h>
#include <stdlib.h>
#define TAM 10

void swap(int *array, int i, int j)
{
	int temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

void bubbleSort(int *array, int tamanho)
{
	// A cada passagem, o menor valor da parte ainda nao ordenada vai para o inicio. Entao aqui delimita o que eh ordenado e oque nao eh ordenado
	for (int i = 0; i < tamanho - 1; i++)
	{
		// Comecamos pelo final e comparamos cada par de elementos vizinhos.
		for (int j = tamanho - 1; j > i; j--)
		{
			// Se o elemento anterior for maior, trocamos os dois.
			if (array[j - 1] > array[j])
			{
				swap(array, j - 1, j);
			}
		}
	}
}

int main()
{
	int *array = (int *)malloc(TAM * sizeof(int)); // criando vetor com malloc (apenas para treinar)
	for (int i = 0; i < TAM; i++)
	{
		printf("Escreva um valor para array[%d]:", i);
		scanf("%d", &array[i]);
	}
	printf("Conferir como esta o array: \n");

	for (int i = 0; i < TAM; i++)
	{
		printf("Array[%d] = %d\n", i, array[i]);
	}
	/* Algoritmo original:
	for(int i = (TAM-1); i > 0; i--){
		for(int j = (TAM-2); j>=0; j--){
			if(array[i] < array[j]){ // Erro: compara i com j, nao elementos vizinhos.
				swap(array, i, j); // Erro: troca posicoes que nao sao necessariamente adjacentes.
			}
		}
	}
	*/
	bubbleSort(array, TAM);

	printf("Conferir como esta o array: \n");

	for (int i = 0; i < TAM; i++)
	{
		printf("Array[%d] = %d\n", i, array[i]);
	}
	free(array);

	return 0;
}
