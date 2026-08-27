//Escreva um programa que peça ao usuário um número N e gere os N primeiros termos da sequência de Fibonacci. A sequência começa com 0 e 1, e cada termo subsequente é a soma dos dois anteriores (0, 1, 1, 2, 3, 5, 8, ...).

#include<stdio.h>
int main(){
	int n;
	int penultimo = 1;
	int antepenultimo = 0;
	int aux;
	do{
		printf("Escreva um  numero (N) que vai gerar os N primeiros termos da sequencia de Fibonnaci:");
		scanf("%d", &n);
		if(n<0){printf("Valor de N invalido, tente novamente!\n");}

	}while(n<0);
	
	if(n == 0){
	
		printf("Index (%d) na seguencia de fibonacci = 0", n);

	}else{
		if(n == 1){

			printf("Index (%d) na sequencia de fibonacci = 1", n);

		}else{
			
			for(int i = 0; i < n; i++){
				if(i == 0){
					printf("Index (%d) na sequencia de fibonnaci = 0\n", i);
				
				}else{
					if(i == 1){
						printf("Index (%d) na sequencia de fibonacci = 1\n", i);

					}else{
						printf("Index (%d) na sequencia de fibonacci = %d\n", i, (antepenultimo + penultimo));
						aux = antepenultimo + penultimo;
						antepenultimo = penultimo;
						penultimo = aux;

					}

				}
			
			}
			
		}


	}

	return 0;
}
