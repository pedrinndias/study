// Crie um programa que leia 10 elementos para um vetor A. Em seguida, crie um segundo vetor, B, que deverá conter os mesmos elementos de A, mas na ordem inversa. Exiba o vetor B.

#include<stdio.h>
int main(){
	int A[10];
	int B[10];
	for(int i = 0; i < 10; i++){
		printf("Escreva um valor para o array A[%d]:", i);
		scanf("%d", &A[i]);
	}
	printf("Conferir arrary A[]:\n");	
	for(int i = 0; i < 10; i++){
		printf("A[%d]: %d\n", i, A[i]);
	}
	for(int i = 0; i < 10; i++){
		B[(9-i)] = A[i];
	}
	for(int i = 0; i < 10; i++){
		printf("B[%d]: %d\n", i, B[i]);
	}


	return 0;
}
