#include <stdio.h>
#include <stdlib.h>
typedef struct Predio
{
	int numero; // úmeros de identificação que não seguem uma ordem relacionada aos seus nomes
	char nome[30];
} Predio;

void swap(Predio *array, int i, int j)
{
	Predio aux = array[i];
	array[i] = array[j];
	array[j] = aux;
}

void ordenacaoSelecao(Predio *array, int N)
{
	for (int i = 0; i < N - 1; i++)
	{
		int menor = i;
		for (int j = i + 1; j < N; j++)
		{
			if (array[menor].nome[0] > array[j].nome[0])
			{
				menor = j;
			}
		}
		swap(array, menor, i);
	}
}

int pesquisaSequencial(Predio *array, int N, char Inicial)
{			  // como nenhuma incial de nome de predio se repete e para facilitar minha vida vou fazer uma pesquisa diante a inicial do nome
	int resp; // vai retornar o indice do array que eu estou buscando
	for (int i = 0; i < N; i++)
	{
		if (array[i].nome[0] == Inicial)
		{
			resp = i;
			break;
		}
	}

	return resp;
}

int main()
{
	int N; // (1 ≤ N ≤ 1000)
	int n; // pesquisa
	scanf("%d", &N);
	Predio *predio = (Predio *)malloc(N * sizeof(Predio));
	for (int i = 0; i < N; i++)
	{
		scanf("%d %29[^\n]", &predio[i].numero, predio[i].nome);
	}
	ordenacaoSelecao(predio, N);

	scanf("%d", &n);
	for (int i = 0; i < n; i++)
	{
		char pesquisa[30];
		scanf(" %29[^\n]", pesquisa); // correcao na leitura da string %s le ate o primeiro espaco, o correto é ler 29 carecteres ate o \n
		printf(" %s %d\n", predio[pesquisaSequencial(predio, N, pesquisa[0])].nome, predio[pesquisaSequencial(predio, N, pesquisa[0])].numero);
	}

	return 0;
}
