// Crie um programa que exiba um menu com as seguintes opções:
// Somar
// Subtrair
// Sair
// O programa deve permitir que o usuário escolha uma opção. Se a opção for 1 ou 2, ele deve pedir dois números, realizar a operação e mostrar o resultado. O programa deve continuar executando até que o usuário escolha a opção 3 (Sair). Garanta que o menu seja exibido pelo menos uma vez.

#include<stdio.h>
int main(){
	int entrada, num1, num2;
	do{
		printf("*** Calculadora ***\n 1- Soma\n 2- Subtracao\n 3- Sair\n Digite uma opcao valida:");
		scanf("%d", &entrada);
		if(entrada == 1 || entrada == 2 || entrada ==3){
			switch(entrada){
				case 1:
					printf("Escreva numero 1:");
					scanf("%d", &num1);
					printf("Escreva numero 2:");
					scanf("%d", &num2);
					printf("A soma do numero 1(%d) + numero 2(%d) = %d\n", num1, num2, (num1+num2));
					break;
				case 2:
					printf("Escreva numero 1:");
					scanf("%d", &num1);
					printf("Escreva numero 2:");
					scanf("%d", &num2);
					printf("A subtracao do numero 1(%d) - numero 2(%d) = %d\n", num1, num2, (num1-num2));
					break;
				case 3:
					printf("Saindo...");
					break;

			}
		}else{
			printf("Entrada Invalida, tente novamente!\n");
}
	


	}while(entrada!=3);

	return 0;
}
