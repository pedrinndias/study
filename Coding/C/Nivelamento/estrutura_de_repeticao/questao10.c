// Crie um programa que peça ao usuário para inserir um número inteiro e, em seguida, conte e exiba quantos dígitos esse número possui. Por exemplo, o número 2548 tem 4 dígitos. (Dica: use divisões inteiras por 10).

#include<stdio.h>
int main(){
	int num;
	int count=0;
	printf("Insira um numero inteiro:");
	scanf("%d", &num);
	if(num == 0){count = 1;}else{
		do{
		
			num/=10;
			count++;

		}while(num != 0);
	}
	printf("O numero inteiro inserido tem %d algarismos!\n", count);
		
	
	return 0;
}
