// Refatore o exercício da "Calculadora Simples" (dos exercícios de switch-case) para usar funções. Crie funções separadas para somar, subtrair, multiplicar e dividir. A função main será responsável por obter os dados do usuário e chamar a função apropriada com base na operação escolhida.

#include<stdio.h>
void somar(){
	float n1, n2;
	printf("Escreva n1:");
	scanf("%f", &n1);
	printf("Escreva n2:");
	scanf("%f", &n2);
	printf("A soma de n1[%f] + n2[%f] = %.2f\n", n1, n2, (n1+n2));
}

void subtrair(){
	float n1, n2;
	printf("Escreva n1:");
	scanf("%f", &n1);
	printf("Escreva n2:");
	scanf("%f", &n2);
	printf("A subtracao de n1[%f] - n2[%f] = %.2f\n", n1, n2, (n1-n2));
}

void multiplicar(){
	float n1, n2;
	printf("Escreva n1:");
	scanf("%f", &n1);
	printf("Escreva n2:");
	scanf("%f", &n2);
	printf("A multiplicacao de n1[%f] * n2[%f] = %.2f\n", n1, n2, (n1*n2));
}

void divisao(){
	float n1, n2;
	printf("Escreva n1:");
	scanf("%f", &n1);
	printf("Escreva n2:");
	scanf("%f", &n2);
	printf("A divisao de n1[%f] / n2[%f] = %.2f\n", n1, n2, (n1/n2));
}


int main(){
	int entrada;
	do{
		printf("*** Calculadora ***\n 1- Somar\n 2- Subtrair\n 3- Multiplicar\n 4- Dividir\n 5- Sair\n Escolha una opcao:");
		scanf("%d", &entrada);
		if(entrada < 1 || entrada > 5){
			printf("Entrada Invalida, tente novamente!\n");	
		}else{
			switch(entrada){
				case 1:
					somar();
					break;
				case 2:
					subtrair();
					break;
				case 3:
					multiplicar();
					break;
				case 4: 
					divisao();
					break;
				case 5:
					printf("Saindo...");
					break;

			}
		
		}
		
	}while(entrada!=5);	
	return 0;
}
