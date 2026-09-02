// Desenvolva uma função recursiva potencia que recebe dois inteiros, base e expoente, e retorna o resultado de base elevado ao expoente. Considere que o expoente será sempre não negativo. O caso base é quando o expoente é 0, retornando 1.

#include<stdio.h>

int potencia(int base, int expoente){
	if(expoente == 1){
		return base;

	}else{
		return (base * potencia(base,(expoente-1)));

	}


}


int main(){
	int base, expoente;
	printf("Escreva um valor para base:");	
	scanf("%d", &base);

	printf("Escreva um valor para o expoente:");	
	scanf("%d", &expoente);

	printf("Base^Expoente = %d"\n, potencia(base,expoente));
	return 0;
}
