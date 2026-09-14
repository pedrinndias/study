// Desenvolva um programa que leia uma matriz 3x4. Crie e imprima a matriz transposta (uma matriz 4x3 onde as linhas da original se tornam as colunas da nova).

#include<stdio.h>


int main(){
	int linha = 3;
	int coluna = 4;
	int matriz[linha][coluna];
	int matrizT[coluna][linha];
	for(int i = 0; i < linha; i++){
		for(int j = 0; j < coluna; j++){
			printf("Insira um valor para matriz[%d][%d] =", i, j);
			scanf("%d", &matriz[i][j]);			
		}
	}

	for(int i = 0; i < linha; i++){
		for(int j = 0; j <= coluna; j++){
			if(j == coluna){
				printf("\n");
			}else{
				printf("Matriz[%d][%d] = %d  ", i, j, matriz[i][j]);
			}
		}
	}
	for(int i = 0; i < coluna; i++){
		for(int j = 0; j < linha; j++){
			matrizT[i][j] = matriz[j][i];
		}
	}

	for(int i = 0; i < coluna; i++){
		for(int j = 0; j <= linha; j++){

			if(j == linha){
				printf("\n");
			}else{
				printf("MatrizT[%d][%d] = %d  ", i, j, matrizT[i][j]);
			}
		}
	}
	

	return 0;
}
