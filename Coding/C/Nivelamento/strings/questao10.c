// Crie um programa que leia uma string, um caractere a ser procurado e um caractere a ser inserido no lugar do primeiro. O programa deve substituir todas as ocorrências do caractere procurado pelo novo caractere. Exemplo: na string "banana", substituir 'a' por 'o' resultaria em "bonono".

#include<stdio.h>

int main(){
	char str[100];
	int count=0;
	char alvo;
	char substituto;
	printf("Escreva uma string: ");
	fgets(str,100,stdin);
	printf("Escreva uma letra que queira trocar:");
	scanf(" %c", &alvo);
	printf("Por qual letra voce quer que os caracteres '%c' sejam substituidos?", alvo);
	scanf(" %c", &substituto);
	for(int i=0; str[i] != '\0'; i++){
		if(str[i] == '\n'){
			str[i]='\0';
		}else{
			count++;
		}
	}
	for(int i=0; str[i] != '\0';i++){
		if(str[i] == alvo){
			str[i] = substituto;
		}
		printf("%c", str[i]);
	}
	printf("\n");

	return 0;
}
