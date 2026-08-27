// Escreva uma função chamada calcularMedia que recebe um array (vetor) de float e o seu tamanho como parâmetros. A função deve retornar a média dos valores contidos no array.

#include<stdio.h>
#include<stdlib.h>
float calcularMedia(float *array, int tam){
	float soma = 0.0;
	for(int i=0; i<tam; i++){
		soma += array[i];

	}
	return soma/tam;

}


int main(){
	int tam;
	float *array;							 //aqui to criando um ponteiro de array para fazer uma alocação dinamica de memoria com o tamanho que o usuario indicar para o array
	printf("Escreva o tamanho do seu array:");
	scanf("%d", &tam);
	array = (float *)malloc(tam * sizeof(float));			 // aqui estou alocando dinamicamente a memoria no ponteiro do array conforme o tamanho definido pelo usuario
	for(int i=0; i<tam; i++){ // laço de repetição para preencher o array
		printf("Escreva um valor para array[%d] =", i);
		scanf("%f", &array[i]);
	}
	printf("\nA media dos valores inseridos eh: %.2f", calcularMedia(array, tam));   // Tive que tirar o &array ara array, aparentemente estava errado
	free(array);	

	return 0;
}
