// Desenvolva um programa que leia uma string e a inverta. Por exemplo, se a string for "programar", o programa deve gerar a string "ramargorp". Você pode criar uma nova string para armazenar o resultado invertido.


#include<stdio.h>


int main(){
	char str[100];
	printf("Escreva uma frase: ");
	fgets(str,100,stdin);
	printf("A string = %s", str);
	int count=0;
	for(int i=0; str[i] != '\n'; i++){
		count++;
	}
	char strInvertida[count+1];
	for(int i=0; i<count; i++){
		strInvertida[i] = str[count-1-i];
	}
	strInvertida[count] = '\0';
	printf("A string invertida = %s", strInvertida);



	return 0;
}
