//Exercício 1: Contagem Crescente (For)
//Escreva um programa que use um laço for para imprimir os números de 1 a 10, um em cada linha.

#include <stdio.h>
int main(){
    int num=1;
    for(int i=0; i<10; i++){
        printf("%d\n", num);
        num++;
    }
    return 0;
}