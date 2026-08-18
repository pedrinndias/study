// Enunciado: Declare duas variáveis, caixaA e caixaB, com valores 10 e 20, respectivamente. 
//O objetivo é trocar os valores entre elas. Você precisará de uma variável auxiliar. 
//Ao final, imprima os novos valores de caixaA e caixaB.

#include<stdio.h>
int main(){
    int caixaA, caixaB;
    caixaA = 10;
    caixaB = 20;
    int aux;
    aux = caixaA;
    caixaA = caixaB;
    caixaB = aux;


    printf("A caixa A que era 10 agora vale %d, que era o valor original da caixa B e a caixa B que era 20 agora esta %d", caixaA, caixaB);

    return 0;
}