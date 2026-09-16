// Escreva um programa que leia uma string e conte quantas vogais e quantas consoantes (letras do alfabeto que não são vogais) ela possui. Imprima os dois totais.

#include<stdio.h>
int main(){
	char str[100];
	printf("Escreva uma frase:");
	fgets(str,100,stdin);
	int count=0;
	for(int i=0; str[i] != '\n'; i++){
		if(str[i] == 'A'|| str[i] == 'E'|| str[i] == 'I'|| str[i] == 'O'|| str[i] == 'U'|| str[i] == 'a'|| str[i] == 'e'|| str[i] == 'i'|| str[i] == 'o'|| str[i] == 'u'){
			count++;
		}
	}
	printf("A string tem %d vogais\n", count);

	return 0;
}
