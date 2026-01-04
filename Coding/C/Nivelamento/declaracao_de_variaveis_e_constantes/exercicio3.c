//Enunciado
//Declare uma variável do tipo char para armazenar a primeira letra do seu nome. Atribua o valor e imprima na tela.

#include<stdio.h>
int main(){
    char Pnome;
    printf("Escreva seu nome: ");
    scanf("%c", &Pnome);
    printf("A primeira letra do seu nome eh: %c", Pnome);
    return 0;
}