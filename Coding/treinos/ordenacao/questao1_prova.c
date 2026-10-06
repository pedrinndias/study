#include <stdio.h>
#include <stdlib.h>

typedef struct Participantes
{
	float altura;
	char nome[50];
} Participantes;

void swap(Participantes *array, int i, int j)
{
	Participantes aux = array[i];
	array[i] = array[j];
	array[j] = aux;
}

void ordenacaoSelecao(Participantes *array, int N)
{
	for (int i = 0; i < N - 1; i++)
	{
		int menor = i;
		for (int j = i + 1; j < N; j++)
		{
			if (array[menor].altura > array[j].altura)
			{
				menor = j;
			}
		}
		swap(array, menor, i);
	}
}

int main()
{
	int F; // fileiras
	int A; // assentos
	scanf("%d %d", &F, &A);
	int N = F * A;														   // o numero de participantes é refernte ao numeor de assentos do espaco
	Participantes *p = (Participantes *)malloc(N * sizeof(Participantes)); // alocacao dinamica referente a quantos assendo tem no espaco
	for (int i = 0; i < N; i++)
	{
		scanf(" %f %49[^\n]", &p[i].altura, p[i].nome); // correcao na leitura da string %s le ate o primeiro espaco, o correto é ler 49 carecteres ate o \n
	}
	ordenacaoSelecao(p, N);
	int countFileiras = 0; // Corrigi aqui comecando por zero
	for (int i = 0; i < N; i++)
	{
		if (i % A == 0)
		{
			countFileiras++;
		}
		printf("%d %.2f %s\n", countFileiras, p[i].altura, p[i].nome);
	}
	free(p); // lembrar de dar um free depois do codigo
	return 0;
}
