// Faça um programa que leia duas matrizes 2x3 de inteiros, A e B. Crie uma terceira matriz, C, que será a soma de A e B (ou seja, C[i][j] = A[i][j] + B[i][j]). Imprima a matriz C.

#include<stdio.h>

int main(){
	int linha = 2;
	int coluna =3;
	int matriz1[linha][coluna];
	int matriz2[linha][coluna];
	int matriz3[linha][coluna];
	for(int i = 0; i < linha; i++){
		for(int j = 0; j < coluna; j++){
			printf("Insira um valor para matriz1[%d][%d] =", i, j);
			scanf("%d", &matriz1[i][j]);
			printf("Insira um valor para matriz2[%d][%d] =", i, j);
			scanf("%d", &matriz2[i][j]);
			matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
		}
	} 

	for(int i = 0; i < linha; i++){
		for(int j = 0; j <= coluna; j++){
			if(j == coluna){
				printf("\n");
			}else{
				printf("Matriz1[%d][%d] = %d ", i, j, matriz1[i][j]);
			}
		}
	} 
	printf("\n");

	for(int i = 0; i < linha; i++){
		for(int j = 0; j <= coluna; j++){
			if(j == coluna){
				printf("\n");
			}else{
				printf("Matriz2[%d][%d] = %d ", i, j, matriz2[i][j]);
			}
		}
	} 
	printf("\n");
	
	for(int i = 0; i < linha; i++){
		for(int j = 0; j <= coluna; j++){
			if(j == coluna){
				printf("\n");
			}else{
				printf("Matriz3[%d][%d] = %d ", i, j, matriz3[i][j]);
			}
		}
	} 

	return 0;
}
