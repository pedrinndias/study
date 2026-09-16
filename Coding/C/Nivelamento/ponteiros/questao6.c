// Crie uma função que receba uma string (um ponteiro para char) e conte o número de vogais nela. Use um ponteiro para percorrer a string.

#include<stdio.h>
void countVogal(char *ptr){
	int count=0;
	while(*ptr != '\0'){
		if(*ptr == 'A' ||*ptr== 'E' || *ptr == 'I' ||  *ptr== 'O' || *ptr == 'U' || *ptr == 'a' || *ptr == 'e' || *ptr == 'i' || *ptr == 'o' || *ptr == 'u'){
			count++;
		}
		ptr++;
	}
	printf("A string tem %d vogais\n", count);
}


int main(){
	char str[100];
	char *ptr;
	ptr = &str[0];
	printf("Escreva uma string:");
	fgets(str,100,stdin);
	for(int i=0; str[i] != '\0'; i++){
		if(str[i] == '\n'){
			str[i] = '\0';
		}	
	}
	countVogal(ptr);
	
	
	return 0;
}
