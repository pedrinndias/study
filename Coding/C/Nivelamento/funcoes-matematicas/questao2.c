// Escreva um programa que receba dois números do usuário: a base e o expoente. 
// Utilize a função pow() para calcular a potência e mostre o resultado.

#include<stdio.h>
#include<math.h>
int main(){
    int base, expoente;
    printf("Escreva uma base:");
    scanf("%d", &base);
    printf("Escreva um expoente:");
    scanf("%d", &expoente);
    double resultado = pow(base, expoente);
    printf("Resultado da operacao de potenciacao: %.0f", resultado);
    return 0;
}