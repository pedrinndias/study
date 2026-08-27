// Crie uma função chamada maiorValor que recebe três números do tipo float como parâmetros e retorna o maior entre eles.
#include<stdio.h>
float maiorValor(float n1, float n2, float n3){
	float maior = n1;
	if(maior <= n2){
		maior = n2;
	}
	if(maior <= n3){
		maior = n3;
	}
	
	return maior;
}


int main(){
	float n1, n2, n3;
	printf("Escreva um valor para n1:");
	scanf("%f", &n1);
	printf("Escreva um valor para n2:");
	scanf("%f", &n2);
	printf("Escreva um valor para n3:");
	scanf("%f", &n3);
	printf("O maior valor dentre os N's valores eh = %.2f\n", maiorValor(n1,n2,n3));


	return 0;
}
