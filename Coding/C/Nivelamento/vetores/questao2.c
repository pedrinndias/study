// Escreva um programa que leia 10 números inteiros, armazene-os em um vetor e, ao final, imprima qual é o maior e o menor valor contido no vetor.

#include<stdio.h>
int Maior(int *array, int tam){
	int maior = array[0];
	int indice;
	for(int i = 0; i < tam; i++){
		if(maior <= array[i]){	
			maior = array[i];
			indice = i;	
		}
	}	
	return indice;

}

int main(){
	int tam=10;
	int array[tam];
	for(int i = 0; i < 10; i++){
		printf("Escreva um numero inteiro para array[%d}:", i);
		scanf("%d", &array[i]);
	}
	printf("Maior numero do array eh : %d\n", array[Maior(array, tam)]);


	return 0;
}
