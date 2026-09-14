// Crie um programa que leia duas strings do teclado. Usando a função strcmp(), determine e informe se as strings são iguais. Se não forem, informe qual delas vem primeiro na ordem alfabética.

#include<stdio.h>
#include<string.h>

int main(){
	char str1[100];
	char str2[100];
	printf("Escreva uma string: ");
	fgets(str1,100,stdin);
	printf("Escreva outra string: ");
	fgets(str2,100,stdin);
	if(strcmp(str1,str2)==0){
		printf("As strings sao iguais!\n");
	}else{
		printf("As strings sao diferentes\n");
	}


	return 0;
}
