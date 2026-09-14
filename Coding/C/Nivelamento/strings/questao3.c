// Faça um programa que leia duas strings e, em seguida, crie uma terceira string que seja a concatenação das duas primeiras. Por exemplo, se as strings lidas forem "bom" e "dia", a nova string deverá ser "bomdia". Desafio: implemente a lógica de concatenação manualmente, sem usar a função strcat().

#include<stdio.h>
#include<stdlib.h>

int main(){
	int tam1 = 1;
	int count1 = 0;
	int tam2 = 1;
	int count2 = 0;
	char temp;
	char *str1=(char *)malloc(tam1 * sizeof(char));
	if(str1 == NULL){
		return 1;
	}
	char *str2=(char *)malloc(tam1 * sizeof(char));
	if(str2 == NULL){
		return 1;
	}
	printf("Escreva uma frase para str1:");
	do{
		scanf("%c", &temp);
		if(temp != '\n'){
			if(count1 == tam1 - 1){
				tam1++;
				str1 = realloc(str1, tam1 *sizeof(char));	
			}
			str1[count1] = temp;
			count1++;
		}
	}while(temp != '\n');
	str1[count1]= '\0';
	printf("Escreva uma frase para str2:");
	do{
		scanf("%c", &temp);
		if(temp != '\n'){
			if(count2 == tam2 - 1){
				tam2++;
				str2 = realloc(str2, tam2 *sizeof(char));	
			}
			str2[count2] = temp;
			count2++;
		}
	}while(temp != '\n');
	str2[count2]= '\0';
	
	char *str3=(char *)malloc((count1 + count2 + 1)*sizeof(char));
	if(str3 == NULL){
		return 1;
	}
	for(int i=0; i<count1; i++){
		str3[i] = str1[i];	
	}
	for(int i=0; i<count2; i++){
		str3[count1 + i] = str2[i];
	}
	str3[count1 + count2] = '\0';
	printf("A str1 + str 2 concatenada = %s", str3);
	free(str1);
	free(str2);
	free(str3);
	return 0;
}
