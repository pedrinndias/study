//Crie um programa que peça ao usuário para inserir um número. 
//Use a função sqrt() da biblioteca math.h para calcular e exibir a raiz quadrada desse número.

#include<stdio.h>
#include<math.h>
int main(){
    double numero; // recebe o numero que o usuário vai digitar
    printf("Escreva um numero: ");
    scanf("%lf", &numero);
    if(numero>=0){printf("A raiz quadrada deste numero eh: %.2f", (sqrt(numero)));} 
    else{printf("Nao eh possivel calcular a raiz de um numero negativo");}
    return 0;
}