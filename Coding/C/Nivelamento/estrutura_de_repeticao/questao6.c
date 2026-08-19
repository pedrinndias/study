// Faça um programa que peça um número inteiro não negativo ao usuário e calcule o seu fatorial. Lembre-se que o fatorial de 0 é 1. Exemplo: 5! = 5 * 4 * 3 * 2 * 1 = 120

#include <stdio.h>
int main()
{
	int num;
	long long fatorial = 1;
	do
	{
		printf("Escreva um numero inteiro nao negativo: ");
		scanf("%d", &num);
		if (num < 0)
		{
			printf("Valor invalido, tente novamente!\n");
		}
	} while (num < 0);
	for (int i = 1; i <= num; i++)
	{
		fatorial *= i;
	}
	printf("%d! = %lld", num, fatorial);
	return 0;
}
