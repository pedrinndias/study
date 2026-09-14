// Faça um programa que leia uma matriz 3x3. Crie dois vetores: um para armazenar a soma de cada linha e outro para armazenar a soma de cada coluna. Imprima os dois vetores.

#include<stdio.h>
#include<stdlib.h>
#define TAM 3
int main (){
	int linha = TAM;
	int coluna = TAM;
	int matriz[linha][coluna];
	int *somaLinha=(int *)calloc(TAM, sizeof(int));
	int *somaColuna=(int *)calloc(TAM, sizeof(int));

	for(int i = 0; i < linha; i++){
		for(int j = 0; j < coluna; j++){
			printf("Insira um valor para matriz[%d][%d] = ", i, j);
			scanf("%d", &matriz[i][j]);
			somaLinha[i] += matriz[i][j];
			somaColuna[j] += matriz[i][j];
		}
	}

	for(int i = 0; i < linha; i++){
		for(int j = 0; j <= coluna; j++){
			if(j == coluna){
				printf("\n");
			}else{
				printf("matriz[%d][%d] = %d ", i, j, matriz[i][j]);
			}
		}
	}
	for(int i = 0; i < TAM; i++){
		printf("A soma da linha[%d] eh: %d\n", i, somaLinha[i]);
		printf("A soma da coluna[%d] eh: %d\n", i, somaColuna[i]);
	}

	return 0;
}
