// Um palíndromo é uma palavra ou frase que se lê da mesma forma de trás para frente (desconsiderando espaços e acentos). Crie um programa que leia uma string e verifique se ela é um palíndromo. Exemplos: "arara", "ovo", "radar".

#include<stdio.h>


int main(){
	int verificador=1;
	char str1[100];
	char str2[100];
	printf("Escreva uma string: ");
	fgets(str1,100,stdin);
	int count1=0;
	int count2=0;
	printf("Escreva outra string: ");
	fgets(str2, 100, stdin);
	for(int i=0; str1[i] != '\n'; i++){
		count1++;
	}
	str1[count1 + 1] = '\0';
	for(int i=0; str2[i] != '\n'; i++){
		count2++;
	}

	str2[count2 + 1] = '\0';
	if(count1 == count2){
		do{
			if(str1[count1] != str2[count1]){
				verificador = 0;
			}
			if(verificador == 0){
				break;
			}
			count1--;
			
		}while(count1 !=0);		

	}else{
		verificador=0;
	}
	if(verificador == 1){
		printf("As frases sao um palindromo!\n");
	}else{
		printf("As frases nao sao um palindromo!\n");
	}



	return 0;
}
