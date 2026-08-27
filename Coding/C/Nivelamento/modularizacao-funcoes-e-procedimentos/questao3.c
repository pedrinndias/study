// Crie um procedimento chamado imprimirTabuada que recebe um número inteiro como parâmetro e imprime a tabuada desse número (de 1 a 10). A função não deve retornar nenhum valor.

#include<stdio.h>

void imprimirTabuada(int num){
	for(int i=1; i<=10; i++){
		printf("%d * %d = %d\n", num, i, (num * i));

	}

}


int main(){
	int num;
	printf("Escreva um numero:");
	scanf("%d", &num);
	imprimirTabuada(num);

	return 0;
}
