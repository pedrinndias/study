// Escreva uma função fatorial que recebe um número inteiro não negativo e retorna o seu fatorial. Lembre-se que o fatorial de 0 é 1.

#include<stdio.h>
int fatorial(int num){
	if(num==0){
		return 1;
	}
	int fatorial = 1;
	for(int i = num; i > 1; i--){
		fatorial *= i;
	}
	return fatorial;
}
int main(){
	int num;
	do{
		printf("Escreva um numero inteiro nao negativo: ");
		scanf("%d", &num);
		if(num < 0){
			printf("valor invalido, tente novamente˜\n");
		}

	}while(num<0);
	printf("Fatorial de %d eh = %d", num, fatorial(num));


	return 0;
}
