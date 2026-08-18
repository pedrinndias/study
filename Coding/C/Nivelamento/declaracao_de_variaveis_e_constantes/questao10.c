// Defina uma constante TAXA_CAMBIO_DOLAR com o valor 5.25 (reais por dólar). 
//Declare uma variável valor_reais com um valor qualquer. 
//Calcule o valor correspondente em dólares e armazene em uma variável valor_dolares. Imprima os três valores.

#include<stdio.h>
int main(){
    const float TAXA_CAMBIO_DOLAR = 5.25;
    int valor_real = 10;

    printf("O Valor de %d reais corresponde a %.2f dolares", valor_real, (valor_real/TAXA_CAMBIO_DOLAR));

    return 0; 
}