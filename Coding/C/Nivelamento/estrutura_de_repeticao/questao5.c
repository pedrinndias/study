//Escreva um programa que leia as notas de um número indeterminado de alunos. O programa deve parar de ler notas quando o usuário digitar um valor negativo. Ao final, o programa deve calcular e exibir a média das notas inseridas.

#include<stdio.h>
int main(){
	int soma=0; // soma das notas
	int count=0; //  vai contar quantas notas teve
	int media; // variavel soma / count entregando a media
	int nota; // nota que o aluno vai digitar
	do{
		printf("Escreva uma nota:");
		scanf("%d", &nota);
		if(nota>=0){
			soma += nota;
			count++;
		}
	}while(nota>=0);
	media = soma/count;
	printf("A media de notas eh: %d", media);
	
	return 0;
}
