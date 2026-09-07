//screva uma função recursiva somaVetor que recebe um vetor (array) de inteiros e seu tamanho, e retorna a soma de todos os seus elementos. A cada chamada, a função pode somar o último elemento com o resultado da chamada recursiva para o restante do vetor (tamanho - 1).

#include<stdio.h>
#include<stdlib.h>
int somaVetor(int *array, int tam){
	if(tam == 0){
		return array[tam]; 
	}
	return (array[tam] + somaVetor(array, tam-1));
} 



int main(){
	int tam=1;
	int count=0;
	int temp;
	int *array=(int *)malloc(tam * sizeof(int));
	if(array == NULL){
		printf("Erro na alocacao dinamica de memoria\n");
		free(array);
		return 1;
	}
	printf("Escreva -1 para encerrar o loop\n");
	do{
		printf("Escreva um valor para array[%d]: ", count);
		scanf("%d", &temp);
		if(temp != -1){
			array[count] = temp;
			count++;
			if(count == tam){
				tam++;
				array = realloc(array, tam * sizeof(int));
			}	
		}
	}while(temp != -1);
	for(int i = 0; i < count; i++){
		printf("Array[%d] = %d\n", i, array[i]);
	}
	
	printf("A soma de todos os elementos do vetor eh = %d", somaVetor(array, count-1));
	return 0;
}
