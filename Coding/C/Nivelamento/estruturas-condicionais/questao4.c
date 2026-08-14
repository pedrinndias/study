//Escreva um programa que receba um número inteiro e, utilizando o operador ternário, mostre na tela se o número é par ou ímpar.
#include<stdio.h>
int main(){
    int num;
    printf("Escreva um numero inteiro: ");
    scanf("%d", &num);
    printf(" O numero %d eh %s", num, (num % 2 == 0) ? "Par" : "Impar"); // Operador Ternario

    return 0;
}