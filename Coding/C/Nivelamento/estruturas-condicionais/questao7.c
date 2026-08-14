//Desenvolva uma calculadora simples que leia dois números e um operador (+, -, *, /). 
//O programa deve usar uma estrutura switch-case para realizar a operação desejada e imprimir o resultado. 
//Lembre-se de tratar a divisão por zero.

#include<stdio.h>
int main(){
    double num1, num2;
    int operador;
    printf("Escreva um numero (1): ");
    scanf("%lf", &num1);
    printf("Escreva outro numero (2): ");
    scanf("%lf", &num2);
    printf("*** Calculadora ***\n 1- Somar numeros\n 2- Subtrair num1 com num2\n 3- Multiplicar numeros\n 4- Dividir num1 com num2\n Digite sua opcao:");
    scanf("%d", &operador);
    switch(operador){
        case 1: printf("Soma: %.2lf", (num1 + num2)); break;
        case 2: printf("Subtracao: %.2lf", (num1 - num2)); break;
        case 3: printf("Multiplicacao: %.2lf", (num1 * num2)); break;
        case 4: printf("Divisao: %.2lf", (num1 / num2)); break;
    }
    return 0;
}