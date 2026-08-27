// Crie um programa que leia dois vetores de 10 posições cada. Calcule e mostre o produto escalar dos dois vetores, que é a soma do produto dos elementos correspondentes de cada vetor ( (A[0]*B[0]) + (A[1]*B[1]) + ... ).

#include<stdio.h>
#include<stdlib.h>
#define TAM 10

int main(){
	int *A=(int *)malloc(TAM *sizeof(int));

	int *B=(int *)malloc(TAM *sizeof(int));
	
	int *C=(int *)calloc(TAM, sizeof(int));
	
	for(int i=0; i<TAM; i++){
		printf("Escreva um valor para A[%d]:", i);
		scanf("%d",  &A[i]);
		printf("\n");
		printf("Escreva um valor para B[%d]:", i);
		scanf("%d", &B[i]);
		printf("C[%d] = %d\n", i, C[i]);
	}
	

	return 0;
}
