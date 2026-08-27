// Crie um programa que declare um vetor de 5 posições do tipo int. Peça ao usuário para digitar os 5 valores e, em seguida, imprima todos os elementos do vetor na tela.

#include<stdio.h>

int main(){
	int array[5];
	for(int i = 0; i < 5; i++){
		printf("Escreva uma valor para o array[%d]=", i);
		scanf("%d", &array[i]);	
	}
	for(int i = 0; i < 5; i++){
		printf("Array[%d]= %d\n", i, array[i]);	
	}
	return 0;
}
