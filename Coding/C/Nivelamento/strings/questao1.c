// Escreva uma função que receba uma string como parâmetro e retorne o número de caracteres que ela contém. Desafio: não utilize a função strlen() da biblioteca <string.h>. Você deve percorrer o vetor de caracteres até encontrar o caractere nulo (\0).

#include<stdio.h>
#include<stdlib.h>

int  main(){
	int tam=1;
	int count=0;
	char temp;
	char *string=(char *)malloc(tam * sizeof(char));
	if (string == NULL) {
		return 1;
	}
	printf("Escreva uma frase: ");
	do{
		scanf("%c", &temp);
		if(temp != '\n'){
			if(count == tam - 1){
				tam++;
				string = realloc(string, tam * sizeof(char));
				if (string == NULL) {
					return 1;
				}
			}
			string[count] = temp;	
			count++;
		}
	
	}while(temp != '\n');	
	string[count] = '\0';
	for(int i=0; i <count; i++){
		printf("%c", string[i]);
	}
	printf("\nA string tem %d caracteres!", count);
	free(string);

	return 0;
}
