// Crie uma função recursiva contarDigitos que recebe um número inteiro e retorna a quantidade de dígitos que ele possui. Por exemplo, contarDigitos(2548) deve retornar 4. O caso base ocorre quando o número é menor que 10.

#include<stdio.h>
#include<stdlib.h>


int contarDigitos(int num){
	if(num == 0){
		return 0;
	}
	
	return (1 + contarDigitos(num / 10));
} 

int main(){
	int num;
	printf("Escreva um numero:");
	scanf("%d", &num);
	printf("Este numero tem %d digitos\n", contarDigitos(num));


	return 0;
}
