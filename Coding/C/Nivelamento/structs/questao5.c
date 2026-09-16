// Usando o vetor de structs do exercício anterior, crie uma função float calcularArea(struct Retangulo r) que retorna a área de um retângulo. Na main, use um laço para percorrer o vetor de retângulos e, para cada um, chame a função e imprima a área correspondente.

#include<stdio.h>

typedef struct Retangulo{
	float base;
	float altura;
} Retangulo;

float calcularArea(struct Retangulo r){
	return r.base * r.altura;
}


int main(){
	Retangulo array[3];
	for(int i=0; i<3; i++){
		printf("Escreva a (base) e a (altura) do retangulo[%d]:", i);
		scanf("%f %f", &array[i].base, &array[i].altura);
	}
	for(int i=0; i<3; i++){
		printf("\nRetangulo[%d]:\n -Base:%.2f\n -Altura:%.2f\n -Area:%.2f\n", i, array[i].base, array[i].altura, calcularArea(array[i]));
	}
	return 0;
}
