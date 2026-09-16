// Crie uma função que receba um vetor de inteiros, seu tamanho e um valor a ser procurado. A função deve retornar um ponteiro para a primeira ocorrência do valor no vetor. Se o valor não for encontrado, a função deve retornar NULL. Na main, teste a função e, se o retorno não for NULL, imprima o valor encontrado usando o ponteiro retornado.

#include<stdio.h>

int *pesquisa(int *ptr, int tam, int alvo){
	for(int i=0; i<tam; i++){
		if((*ptr) == alvo){
			return ptr;
		}
		ptr++;
	}
	return NULL;
}

int main(){
	int tam;
	
	printf("Insira um tamanho para o array =");
	scanf("%d", &tam);
	int array[tam];
	int *ptr;
	int alvo;
	ptr = &array[0];
	for(int i = 0; i<tam; i++){
		printf("Insira uma valor para array[%d]=", i);
		scanf("%d", &(*ptr));
		ptr++;	
	}
	ptr -= tam;
	printf("Insira um valor a ser procurado =");
	scanf("%d", &alvo);
	printf("O endereco de memoria do alvo no array eh %p", pesquisa(ptr,tam,alvo));
	return 0;
}
