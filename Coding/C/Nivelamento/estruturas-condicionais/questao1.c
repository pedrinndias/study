// Escreva um programa que peça ao usuário para inserir um número inteiro. 
//O programa deve então verificar e informar se o número é positivo, negativo ou zero.

#include<stdio.h>
int main(){
    int num;
    printf("Escreva um numero inteiro: ");
    scanf("%d", &num);
    if(num>0){printf("Este numero eh positivo");} else{
        if(num==0){printf("Este numero eh igual a zero");}else{
            printf("Este numero eh negativo");
        }
    }
    return 0;
}