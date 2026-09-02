// Crie uma função recursiva chamada fatorial que recebe um número inteiro não negativo n e retorna o seu fatorial. O caso base é quando n é 0, cujo fatorial é 1.

#include<stdio.h>

int fatorial(int num){
	if(num==0){
		return 1;
	}else{
		if(num == 1){
			return num;
		}else{
			return num*fatorial(num-1);
		}
	}
}


int main(){
	int num;
	do{
		printf("Escreva um numero:");
		scanf("%d", &num);
		printf("%d! = %d\n", num, fatorial(num));
	}while(num>=0);

	return 0;
}


// tudo errado, corrigir!
