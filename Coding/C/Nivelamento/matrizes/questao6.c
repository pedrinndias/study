// Escreva um programa que leia uma matriz 4x4. Depois, peça ao usuário para digitar um número X. O programa deve contar e exibir quantos valores na matriz são maiores que X.

#include<stdio.h>
#define TAM 4
int main(){
	int linha = TAM; 
	int coluna = TAM; 
	int matriz[linha][coluna];
	for(int i = 0; i < linha; i++){
		for(int j = 0; j < coluna; j++){
			printf("Insira um valor para matriz[%d][%d] =", i, j);
			scanf("%d", &matriz[i][j]);
		}
	}

	int x;
	int count=0;
	printf("Escreva um valor para X =");
	scanf("%d", &x);
	for(int i = 0; i < linha; i++){
		for(int j = 0; j <= coluna; j++){
			if(j == coluna){
				printf("\n");
			}else{
				if(matriz[i][j] > x){count++;}
				printf("Matriz[%d][%d] = %d", i, j, matriz[i][j]);
			}
		}
	}
	printf("%d valores sao maiores que o valor x [%d] na matriz\n", count, x);


	return 0;
}
