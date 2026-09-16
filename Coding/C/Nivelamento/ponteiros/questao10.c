// Crie um vetor de ponteiros para char (um vetor de strings). Inicialize-o com os nomes de 5 frutas. Crie uma função que receba este vetor de ponteiros e seu tamanho, e imprima todas as strings.

#include<stdio.h>
#include<stdlib.h>
void imprimir(char *str[], int tam){
	for(int i=0; i<tam; i++){
		printf("%s", str[i]);
	}
}

int main(){
	int tam=5;
	char *str[5];

	for(int i=0; i<tam; i++){
		str[i] = malloc(100 * sizeof(char));
		if(str[i] == NULL){
			return 1;
		}

		printf("Escreva o nome de uma fruta:");
		fgets(str[i], 100, stdin);
	}

	imprimir(str, tam);

	for(int i=0; i<tam; i++){
		free(str[i]);
	}
	return 0;
}
