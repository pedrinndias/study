// Exercício 10: Conversão de Moeda
// Enunciado
// Defina uma constante TAXA_CAMBIO_DOLAR com o valor 5.25 (reais por dólar). 
//Declare uma variável valor_reais com um valor qualquer. 
//Calcule o valor correspondente em dólares e armazene em uma variável valor_dolares. Imprima os três valores.

#include<stdio.h>
int main(){
    const float TAXA_CAMBIO_DOLAR = 5.25;
    int valor_reais = 10;
    printf("10 reais convertio para dolar na cotacao ($5.25) eh: %.2f", (TAXA_CAMBIO_DOLAR*valor_reais));

    return 0;
}