// Desenvolva um programa que leia um vetor de 15 posições. Em seguida, crie um novo vetor que contenha apenas os elementos do vetor original que não se repetem. Exiba o novo vetor. (Dica: para cada elemento, verifique se ele já foi inserido no novo vetor).

#include<stdio.h>
#include<stdlib.h>
#define TAM 15

int numRepete(int *array, int indice){						// return 1 se algum elemento se repete return 0 se nenhum elemento se repete
	for(int i=0;i<TAM;i++){
		if(indice != i){
			if(array[indice] == array[i]){return 1;}		// confere se o elemento do array[indice] se repete durante a iteracao de array[i]
		}
	}
	return 0;								// se nenhum elemento se repete return 0
}


int main(){
	int *array=(int *)malloc(TAM * sizeof(int));
	for(int i=0;i<TAM;i++){
		printf("Escreva um valor para array[%d:]:", i);
		scanf("%d", &array[i]);
	}

	for(int i=0; i<TAM; i++){
		if(numRepete(array, i) == 1){
			printf("O elemento array[%d] = %d se repete ao longo do array\n", i, array[i]);
		}	


	}



	return 0;
}
