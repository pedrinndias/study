// Faça um programa que preencha um vetor com 8 números reais. Em seguida, calcule e mostre a média de todos os elementos. Por fim, indique quantos elementos do vetor estão acima da média calculada.

#include<stdio.h>
int main(){
	float array[8];
	float media=0.0;
	int soma=0;
	for(int i = 0; i < 8; i++){
		printf("Escreva um numero real ara array[%d]:", i);
		scanf("%f", &array[i]);
		media += array[i];
	}
	media/=8.0;
	for(int i = 0; i < 8; i++){
		if(array[i] > media){soma++;}
	}
	for(int i = 0; i < 8; i++){
		printf("array[%d]: %.2f\n", i, array[i]);
	}
	printf("A media dos valores do array eh: %2.f\n", media);
	printf("A quantidade de elemntos acima da media eh: %d\n ", soma);

	return 0;
}
