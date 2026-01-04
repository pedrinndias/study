//Enunciado
//Declare uma variável de ponto flutuante (float) para guardar a sua altura em metros. 
//Atribua um valor e imprima na tela, formatando para exibir apenas duas casas decimais.

#include <stdio.h>
int main(){
    float altura;
    printf("Escreva sua altura (em metros): ");
    scanf("%f", &altura);
    printf("Sua altura eh: %.2f", altura);
    return 0;
}