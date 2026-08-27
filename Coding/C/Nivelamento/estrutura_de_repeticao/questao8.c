//Desenvolva um jogo simples onde o programa "pensa" em um número secreto (por exemplo, 42). O programa deve pedir ao usuário para adivinhar o número. Use um laço do-while para continuar pedindo um palpite até que o usuário acerte. A cada palpite errado, informe se o número secreto é maior ou menor.

#include<stdio.h>
int main(){
	int num_secreto = 67;
	int entrada;
	do{
		printf("Escreva um numero:");
		scanf("%d", &entrada);
		if(entrada == num_secreto){
			printf("Voce acertou o numero secreto!");
			break;
		}else{
			if(entrada < num_secreto){ printf("Sua entrada esta abaixo do numero secreto!\n");} else {printf("Sua entrada esta acima do numero secreto!\n");}
		}

	}while(entrada!=num_secreto);

	return 0;
}
