// Crie um programa que leia dois vetores de 5 posições cada. Em seguida, crie um terceiro vetor, C, cujo valor de cada posição será a soma dos elementos correspondentes nos vetores A e B. (Ex: C[0] = A[0] + B[0]). Mostre o vetor C.

#include<stdio.h>
#include<stdlib.h>
#define TAM 5
int main(){
	int *A = (int *)malloc(TAM * sizeof(int));

	int *B = (int *)malloc(TAM * sizeof(int));

	int *C = (int *)malloc(TAM * sizeof(int));

	for(int i = 0; i < TAM; i++){
		printf("Insira um valor para A[%d]:", i);
		scanf("%d", &A[i]);
		printf("Insira um valor para B[%d]:", i);
		scanf("%d", &B[i]);
	}
	printf("Conferir Valores:\n");
	for(int i = 0; i < TAM; i++){
		printf("A[%d]: %d\n", i, A[i]);
		printf("B[%d]: %d\n", i, B[i]);
	}
	for(int i = 0; i < TAM; i++){
		C[i] = A[i] + B[i];
		printf("C[%d] = %d\n", i, C[i]);

	}



	return 0;
}
