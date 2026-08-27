// Escreva um programa que leia um vetor de 10 posições e conte quantos números pares ele possui. Imprima o resultado da contagem.

#include<stdio.h>
#include<stdlib.h>

int main(){
	int *array=(int *)malloc(10 * sizeof(int));
	int soma=0;
	for(int i = 0; i < 10; i++){
		printf("Escreva um valor para array[%d]:", i);
		scanf("%d", &array[i]);
	}	
	for(int i = 0; i < 10; i++){
		if(array[i] % 2 == 0){ soma++;}

	}	
	for(int i = 0; i < 10; i++){
		printf("Array[%d]: %d\n", i, array[i]);
	}
	printf("%d elementos pares que contem neste array", soma);
	

	return 0;
}
