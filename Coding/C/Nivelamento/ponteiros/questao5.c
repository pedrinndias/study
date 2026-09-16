// Declare um vetor de 5 números inteiros. Crie um ponteiro que aponte para o primeiro elemento do vetor. Usando aritmética de ponteiros (incrementando o ponteiro), percorra o vetor e imprima cada um de seus elementos, sem usar o operador de colchetes [].

#include<stdio.h>

int main(){
	int array[5];
	int *ptr1;
	ptr1 = &array[0];
	for(int i=0; i< 5; i++){
		printf("Preencha com um valor o array[%d] = ", i);
		scanf("%d", &array[i]);
	}
	for(int i=0; i<5; i++){
		printf("Array[%d] = %d\n", i, *ptr1);
		ptr1++;
	}
	
	
	
	return 0;
}
