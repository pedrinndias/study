// Crie um programa que declare uma matriz 3x3 de inteiros. Peça ao usuário para digitar os valores para cada posição e, ao final, imprima a matriz na tela com a formatação correta (linhas e colunas).


#include<stdio.h>
#define TAM 3

int main(){
	int linha=TAM;
	int coluna=TAM;
	int matriz[linha][coluna];
	for(int i=0; i < linha; i++){
		for(int j=0; j < coluna; j++){
			printf("Insira um valor para matriz[%d][%d] = ", i, j);
			scanf("%d", &matriz[i][j]);
		}
	}	
	
	for(int i=0; i < linha; i++){
		for(int j=0; j <= coluna; j++){
			if(j == coluna){
				printf("\n");
			}else{
				printf("[%d][%d] = %d ", i, j, matriz[i][j]);
			}
		}
	}

	return 0;
}
