// Defina uma struct Carro com marca (string), modelo (string) e ano (int). No programa, aloque dinamicamente memória para uma struct Carro usando malloc. Preencha os dados (usando o operador ->) e depois os imprima. Não se esqueça de liberar a memória com free.

#include<stdio.h>
#include<stdlib.h>

typedef struct Carro{
	char marca[100];
	char modelo[100];
	int ano;
} Carro;

int main(){
	Carro *car=(Carro *)malloc(sizeof(Carro));
	printf("Insira o marca do carro:");
	fgets(car -> marca,100,stdin);
	
	printf("Insira o modelo do carro:");
	fgets(car -> modelo,100,stdin);
	

	printf("Insira o ano do carro:");
	scanf("%d", &car -> ano);

	printf("Marca do carro: %s\n", car -> marca);
	
	printf("Modelo do carro: %s\n", car -> modelo);

	printf("Ano do carro: %d\n", car -> ano);

	return 0;
}
