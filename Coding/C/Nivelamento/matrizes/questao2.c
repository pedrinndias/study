// Escreva um programa que leia uma matriz quadrada 4x4 de números reais. Calcule e imprima a soma dos elementos que estão na diagonal principal (onde o índice da linha é igual ao da coluna).

#include<stdio.h>
#define TAM 4

int main(){
	int linha = TAM;
	int coluna = TAM;
	int matriz[linha][coluna];
	int count=0;
	for(int i = 0; i < linha; i++){
		for(int j = 0; j < coluna; j++){
			printf("Insira um valor para matriz[%d][%d] = ", i, j);
			scanf("%d", &matriz[i][j]);
		}
	}

	for(int i = 0; i < linha; i++){
		for(int j = 0; j <= coluna; j++){
			if(j == coluna){
				printf("\n");
			}else{
				printf("matriz[%d][%d] = %d ", i, j, matriz[i][j]);
				if(i == j){
					count += matriz[i][j];
				}	
			}
		}
	}
	printf("\n A soma dos elementos da diagonal principal eh = %d", count);

	return 0;
}
