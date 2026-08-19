// Crie um programa que calcule e mostre a soma de todos os números pares de 1 a 100.

#include<stdio.h>
int main(){
	int soma=0;
	for(int i=1;i<=100;i++){
		if(i%2==0){
			soma+=i;
			printf("Soma: %d + %d = %d\n", i, (soma-i),soma);
		}
	}

	return 0;
}
