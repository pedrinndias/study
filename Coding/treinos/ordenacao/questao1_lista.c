#include<stdio.h>
#include<stdlib.h>
void swap(int *array, int i, int j){
	int aux = array[i];
	array[i] = array[j];
	array[j] = aux;
}
void ordenarSelecao(int *array, int N){
	for(int i=0; i < N-1; i++){
		int menor=i;
		for(int j=i+1; j<N; j++){
			if(array[menor] > array[j]){
				menor=j;
			}
		}
		swap(array, menor, i);
	}
}


void ordenarSelecaoDec(int *array, int N){
	for(int i=0; i < N-1; i++){
		int maior=i;
		for(int j=i+1; j<N; j++){
			if(array[maior] < array[j]){
				maior=j;
			}
		}
		swap(array, maior, i);
	}
}

int main(){
	int N;
	scanf("%d", &N);
	int countPar=0;
	int countImpar=0;
	int *array=(int *)malloc(N * sizeof(int)); // todos os elementos
	for(int i=0; i<N; i++){
		scanf("%d", &array[i]);
		if(array[i] % 2 == 0){
			countPar++;
		}else{
			countImpar++;
		}
	}
	
	int *arrayPar=(int *)malloc(countPar * sizeof(int)); // todos os elementos pares
	int *arrayImpar=(int *)malloc(countImpar * sizeof(int)); // todos os elementos impar
	countPar=0;	
	countImpar=0;	
	for(int i=0; i<N; i++){
		if(array[i] % 2 == 0){
			arrayPar[countPar]=array[i];
			countPar++; // Erro: o contador dos impares estava sendo incrementado aqui.
		}else{
			arrayImpar[countImpar]=array[i];
			countImpar++; // Erro: o contador dos pares estava sendo incrementado aqui.
		}
	}
	ordenarSelecao(arrayPar, countPar);
	ordenarSelecaoDec(arrayImpar, countImpar);
	for(int i=0; i<N; i++){
		if(i < countPar){
			array[i] = arrayPar[i];
		}else{
			array[i] = arrayImpar[(i - countPar)];
		}
		printf("%d\n", array[i]); // Erro: quebra de linha e uma barra invertida, nao uma barra comum.
	}


	return 0;
}
