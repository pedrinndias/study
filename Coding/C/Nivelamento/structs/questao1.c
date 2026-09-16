// Defina uma struct chamada Ponto que contenha dois membros: int x e int y. Na função main, declare uma variável do tipo Ponto, peça ao usuário para digitar as coordenadas x e y, armazene-as na struct e, em seguida, imprima as coordenadas do ponto.

#include<stdio.h>

typedef struct Ponto{
	int x;	
	int y;
}Ponto;

int main(){
	Ponto ponto1;
	printf("Escreva as coordenadas X e Y de um ponto:");
	scanf("%d %d", &ponto1.x, &ponto1.y);
	printf("As coordenadas sao:\n - X = %d\n - Y = %d\n", ponto1.x, ponto1.y);



	return 0;
}
