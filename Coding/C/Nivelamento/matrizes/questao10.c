// Este é um clássico. Crie um programa que leia duas matrizes, A (2x3) e B (3x2), e calcule a matriz produto C (que será 2x2). Imprima a matriz resultante. Lembrete: O elemento C[i][j] é a soma dos produtos dos elementos da linha i de A pelos elementos da coluna j de B.

#include<stdio.h>
#include<stdlib.h>

int main(){
	int linha = 2;
	int coluna = 3;
	int matrizA[linha][coluna];
	int matrizB[coluna][linha];
	int matrizC[linha][linha];
	int *somaProdutoLinha=(int *)calloc(linha, sizeof(int));
	int *somaProdutoColuna=(int *)calloc(linha, sizeof(int));
	int produtoLinha[2];
	int produtoColuna[2];

	for(int i=0; i<linha; i++){
		produtoLinha[i]=1;
		produtoColuna[i]=1;
	}

	for(int i=0; i<linha; i++){
		for(int j=0; j<coluna; j++){
			printf("Insira um valor para matrizA[%d][%d] = ", i, j);
			scanf("%d", &matrizA[i][j]);
		}
	}

	for(int i=0; i<coluna; i++){
		for(int j=0; j<linha; j++){
			printf("Insira um valor para matrizB[%d][%d] = ", i, j);
			scanf("%d", &matrizB[i][j]);
		}
	}

	for(int i=0; i<linha; i++){
		for(int j=0; j<=coluna; j++){
			if(j == coluna){
				printf("\n");
			}else{
				printf("MatrizA[%d][%d] = %d  ", i, j, matrizA[i][j]);
				produtoLinha[i] *= matrizA[i][j];
			}
		}
	}

	for(int i=0; i<coluna; i++){
		for(int j=0; j<=linha; j++){
			if(j == linha){
				printf("\n");
			}else{
				printf("MatrizB[%d][%d] = %d  ", i, j, matrizB[i][j]);
				produtoColuna[j] *= matrizB[i][j];
			}
		}
	}

	for(int i = 0; i < linha; i++){
		for(int j = 0; j < linha; j++){
			matrizC[i][j] = 0; // Comeca a soma dos produtos para C[i][j].

			for(int k = 0; k < coluna; k++){
				// Multiplica a linha i de A pela coluna j de B e acumula o resultado.
				matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
			}
		}
	}

	printf("\nMatriz C (A x B):\n"); // Mostra a matriz resultante.
	for(int i = 0; i < linha; i++){
		for(int j = 0; j < linha; j++){
			printf("%d ", matrizC[i][j]); // Imprime cada elemento de C.
		}
		printf("\n"); // Quebra a linha ao terminar cada linha de C.
	}
	
	return 0;
}
