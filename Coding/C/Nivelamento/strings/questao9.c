// Escreva um programa que leia uma frase e conte quantas palavras ela contém. Considere que as palavras são separadas por um ou mais espaços em branco.

#include<stdio.h>
int main(){
	char str[100];
	printf("Escreva uma string:");
	fgets(str,100,stdin);
	int countPal=0;
	int dentroPalavra=0;
	for(int i=0; str[i] != '\0'; i++){
		if(str[i] != ' ' && str[i] != '\n'){
			if(dentroPalavra == 0){
				countPal++;
				dentroPalavra=1;
			}
		} else {
			dentroPalavra=0;
		}
	}
	printf("A frase ' %s ' tem %d palavras!\n", str, countPal);
	
	return 0;
}
