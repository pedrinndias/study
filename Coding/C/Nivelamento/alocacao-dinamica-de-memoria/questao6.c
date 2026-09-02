//Escreva um programa que leia uma sequência de números inteiros até que o usuário digite -1. Como você não sabe quantos números serão digitados, comece com um vetor pequeno (ex: tamanho 10) alocado dinamicamente. Se o vetor encher, use realloc para dobrar sua capacidade. Ao final, imprima todos os números digitados e a quantidade total. Libere a memória.

#include<stdio.h>
#include<stdlib.h>

int main(){
	int TAM=10;
	int *array=(int *)malloc(TAM * sizeof(int));
	int temp;
	int count=0;
	printf("Digite -1 para encerrar.\n");
	do{
		printf("Escreva um valor para array[%d]:", count);
		scanf("%d", &temp);
		if(temp != -1){
			array[count]=temp;
			count++;
			if(count == TAM){
				TAM+=1;
				array=(int *)realloc(array, TAM * sizeof(int));
			}	
		}else{
			for(int i=0; i<count; i++){
				printf("Array[%d] = %d\n", i, array[i]);
			}

		}


	}while(temp != -1);


	return 0;
}
