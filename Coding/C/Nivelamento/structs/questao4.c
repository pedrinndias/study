// Defina uma struct chamada Retangulo com os membros base (float) e altura (float). Declare um vetor de 3 Retangulo. Peça ao usuário os dados para cada um dos 3 retângulos e armazene-os no vetor.

#include<stdio.h>

typedef struct Retangulo{
	float base;
	float altura;
} Retangulo;

int main(){
	Retangulo array[3];
	for(int i=0; i<3; i++){
		printf("Escreva a (base) e a (altura) do retangulo[%d]:", i);
		scanf("%f %f", &array[i].base, &array[i].altura);
	}
	for(int i=0; i<3; i++){
		printf("Retangulo[%d]:\n -Base:%.2f\n -Altura:%.2f\n", i, array[i].base, array[i].altura);
	}
	return 0;
}
