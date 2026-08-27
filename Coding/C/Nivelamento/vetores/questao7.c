// Faça um programa que preencha um vetor com 10 números. Depois, peça para o usuário digitar um número. O programa deve fazer uma busca por esse número no vetor e informar se ele foi encontrado e, caso afirmativo, em qual posição (índice).
#include<stdio.h>
#include<stdlib.h>
int main(){
	int *array = (int *)malloc(10 * sizeof(int));
	int count=0;
	for(int i = 0; i < 10; i++){
		printf("Escreva um valor para array[%d]:", i);
		scanf("%d", &array[i]);
		if(array[i]==0){count++;}
	}
	int *countZero = (int *)malloc(count *sizeof(int));
	count=0;
	for(int i = 0; i < 10; i++){
		if(array[i] == 0){ 
			countZero[count] = i;
			count++;			//correcao: count nao estava mo if
		}
	}
	printf("Os indices do array que contem elementos zeros sao:\n");
	for(int i = 0; i < count; i++){
		printf("countZeros[%d] = %d\n", i, countZero[i]);
	}

	return 0;
}
