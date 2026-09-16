// Crie uma função void moverPonto(struct Ponto *p, int deltaX, int deltaY). A função deve receber um ponteiro para uma struct Ponto e alterar seus valores x e y, somando deltaX e deltaY a eles. Na main, declare um ponto, imprima suas coordenadas, chame a função e imprima as novas coordenadas.

#include<stdio.h>

typedef struct Ponto{
	int x;
	int y;
} Ponto;



void moverPonto(Ponto *p, int deltaX, int deltaY){
	(*p).x += deltaX;
	(*p).y += deltaY;
}

int main(){
	Ponto p;
	Ponto *ptr = &p; // Ponteiro para a struct Ponto
	int deltaX, deltaY;

	printf("Escreva as coordenadas de um ponto p (X) e (Y): ");
	scanf("%d %d", &(*ptr).x, &(*ptr).y);
	
	printf("Escreva alguns valores para delta (X) e (Y): ");
	scanf("%d %d", &deltaX, &deltaY);
	
	moverPonto(ptr, deltaX, deltaY);
	printf("Os pontos movidos agora sao = (%d,%d)\n", (*ptr).x, (*ptr).y);

	return 0;
}
