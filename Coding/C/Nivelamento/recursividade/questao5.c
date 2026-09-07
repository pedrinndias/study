// Crie um procedimento (função void) recursivo chamado inverterstring que recebe uma string (ponteiro para char) como parâmetro e a imprime na ordem inversa. A ideia é imprimir o caractere atual depois da chamada recursiva para o restante da string.

#include <stdio.h>
#include <stdlib.h>
void inverterstring(char *string, int tam){
	if (tam < 0){
		return; // A recursao termina quando o indice passa do primeiro caractere.
	}

	printf("%c", string[tam]);
	inverterstring(string, tam - 1); // Chama a funcao para o caractere anterior.
}

int main(void){ // void indica que main nao recebe argumentos.
	int tam = 1;
	char *string = malloc(tam * sizeof(char)); // Reserva espaco para a string.
	char temp;
	int count = 0;
	if (string == NULL){
		return 1;
	}

	printf("Escreva uma frase: ");
	do{
		scanf("%c", &temp);
		if(temp != '\n'){
			string[count]=temp;
			count++;
			if(count==tam){
				tam++; // Aumenta o espaco para o proximo caractere e o '\0'.
				string = realloc(string, tam * sizeof(char)); // Realoca diretamente a propria variavel string.
				if (string == NULL){ // Se falhar, string vira NULL e a memoria antiga nao pode mais ser recuperada.
					free(string); // Libera a memoria se o realloc falhar.
					return 1;
				}
			}
		}



	}while(temp != '\n');

	string[count] = '\0'; // Finaliza a string para o printf("%s").

	printf("String normal = %s\n", string);
	printf("String invertida = ");
	inverterstring(string, count - 1); // Usa o ultimo caractere lido, sem contar o '\0'.
	printf("\n");
	free(string); // Libera a memoria reservada quando ela nao e mais necessaria.

	return 0;
}
