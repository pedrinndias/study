 Crie um programa que leia uma string e a converta inteiramente para letras maiúsculas. Utilize a função toupper() da biblioteca <ctype.h>. Imprima a string resultante.


#include<stdio.h>
#include<ctype.h>
int main(){
	char str[100];
	printf("Escreva uma frase:");
	fgets(str,100,stdin);
	int count=0;
	for(int i=0; str[i] != '\n'; i++){
		str[i] = toupper(str[i]);	
	}
	printf("A string com letras maiusculas '%s'\n", str);

	return 0;
}
