//  Usando a struct Carro, pergunte ao usuário quantos carros ele deseja cadastrar. Aloque dinamicamente um vetor de struct Carro do tamanho informado. Peça ao usuário os dados de cada carro e, ao final, imprima uma lista com todos os carros cadastrados. Libere a memória no final.


#include<stdio.h>
#include<stdlib.h>

typedef struct Carro{
	char marca[100];
	char modelo[100];
	int ano;
} Carro;

int main(){
	int tam;
	printf("Quantos carros voce deseja cadastrar?");
	scanf("%d", &tam);
	getchar();
	Carro *car=(Carro *)malloc(tam * sizeof(Carro));

	for(int i=0; i<tam; i++){
	
		printf("Insira o marca do carro[%d]:", i);
		fgets((car+i) -> marca,100,stdin);
	
		printf("Insira o modelo do carro[%d]:", i);
		fgets((car+i) -> modelo,100,stdin);
	

		printf("Insira o ano do carro[%d]:", i);
		scanf("%d", &(car+i) -> ano);
		getchar();
	}

	for(int i=0; i<tam; i++){
	
		printf("\nMarca do carro[%d]: %s\n", i, (car+i) -> marca);
	
		printf("Modelo do carro[%d]: %s\n", i, (car+i) -> modelo);

		printf("Ano do carro[%d]: %d\n", i, (car+i) -> ano);
	
	}
	
	return 0;
}
