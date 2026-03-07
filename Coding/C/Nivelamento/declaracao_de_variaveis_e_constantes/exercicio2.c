//Enunciado
//Declare uma variável de ponto flutuante (float) para guardar a sua altura em metros. 
//Atribua um valor e imprima na tela, formatando para exibir apenas duas casas decimais.

#include<stdio.h>
#include<stdbool.h>


int main(){
    char texto[100];
    printf("Digite um \n texto: ");
    scanf("%[^\n]", texto);
    printf("Você digitou: %s\n", texto);
    return 0;
}