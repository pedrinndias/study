// Crie um programa que leia duas strings do usuário. Calcule o tamanho necessário para armazenar a concatenação das duas. Aloque dinamicamente um novo espaço de memória com esse tamanho (usando malloc) e copie o conteúdo das duas strings para este novo espaço, criando a string concatenada. Imprima o resultado e libere a memória.

#include <stdio.h>
#include <stdlib.h>

int main()
{
	char str1[100];
	char str2[100];
	printf("Escreva uma string 1: ");
	scanf("%99[^\n]", str1);
	getchar(); // limpa o buffer do teclado para evitar que o próximo scanf leia o caractere de nova linha deixado pelo primeiro scanf

	printf("Escreva uma string 2: ");
	scanf("%99[^\n]", str2);
	getchar(); // limpa o buffer do teclado novamente para evitar problemas com a leitura da próxima entrada

	int count1 = 0;
	int count2 = 0;
	while (str1[count1] != '\0') // percorre a primeira string para contar o tamanho dela
	{
		count1++;
	}

	while (str2[count2] != '\0') // percorre a segunda string para contar o tamanho dela
	{
		count2++;
	}
	char *strConcatenada = (char *)malloc((count1 + count2 + 1) * sizeof(char)); // aloca dinamicamente o espaço necessário para a string concatenada, incluindo o caractere nulo '\0'
	if (strConcatenada == NULL)													 // verifica se a alocação de memória foi bem-sucedida
	{
		printf("Erro ao alocar memória.\n");
		return 1;
	}
	for (int i = 0; i < count1; i++) // copia o conteúdo da primeira string para a string concatenada
	{
		strConcatenada[i] = str1[i];
	}
	for (int i = 0; i < count2; i++) // copia o conteúdo da segunda string para a string concatenada, começando após o final da primeira string
	{
		strConcatenada[count1 + i] = str2[i];
	}
	strConcatenada[count1 + count2] = '\0';	   // adiciona o caractere nulo '\0' ao final da string concatenada para indicar o fim da string
	printf("Resultado: %s\n", strConcatenada); // imprime a string concatenada
	free(strConcatenada);
	return 0;
}
