//Usando a struct Ponto do exercício anterior, crie uma função void imprimirPonto(struct Ponto p) que receba uma struct Ponto como parâmetro (passagem por valor) e imprima suas coordenadas no formato (x, y).

#include<stdio.h>

typedef struct Ponto{
	int x;
	int y;
}Ponto;

void imprimirPonto(struct Ponto p){
	printf("(%d,%d)\n", p.x, p.y);
} 


int main(){	
	Ponto p;
	printf("Escreva as coordenadas de um ponto (X) (Y):");
	scanf("%d %d", &p.x, &p.y);
	imprimirPonto(p);
	
	
	
	return 0;
}
