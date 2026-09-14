// Crie um programa que leia uma matriz 5x5. Encontre o maior valor presente na matriz e, em seguida, mostre a linha e a coluna onde ele se encontra.

#include<stdio.h>
#define TAM 5

int main(){
	int linha = TAM;
	int coluna = TAM;
	int maior;
	int linhaAux = 0;
	int colunaAux = 0;	
	int matriz[linha][coluna];
	for(int i = 0; i < linha; i++){
		for(int j = 0; j < coluna; j++){
			printf("insira um valor para matriz[%d][%d] = ", i, j);
			scanf("%d", &matriz[i][j]);			
		}
	}
	maior = matriz[linhaAux][colunaAux];
	for(int i = 0; i < linha; i++){
		for(int j = 0; j <= coluna; j++){
			if(j == coluna){
				printf("\n");
			}else{
				printf("Matriz[%d][%d] = %d ", i, j, matriz[i][j]);
				if(matriz[i][j] >= maior){
					linhaAux=i;
					colunaAux=j;
					maior = matriz[linhaAux][colunaAux];
				}	
			}
		}
	}
	printf("\nO maior elemento da matriz eh = %d localizado em Matriz[%d][%d]\n", maior, linhaAux, colunaAux);






	return 0;
}
