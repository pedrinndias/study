//Exercício 8: Trocando Valores
//Enunciado: Declare duas variáveis, caixaA e caixaB, com valores 10 e 20, respectivamente. 
//O objetivo é trocar os valores entre elas. Você precisará de uma variável auxiliar. 
//Ao final, imprima os novos valores de caixaA e caixaB.

#include<stdio.h>
int main(){
    int caixaA = 10;
    int caixaB = 20;
    
    int aux=0;

    aux = caixaA;
    caixaA = caixaB;
    caixaB = aux;
    
    printf("O valor da caixaA eh: %d \n O Valor da caixaB eh: %d", caixaA,caixaB);
    return 0;
}