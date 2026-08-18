// Desenvolva um programa que leia três números inteiros e use estruturas if-else aninhadas para encontrar 
//e imprimir o maior dos três.

#include<stdio.h>
int main(){
    int num1, num2, num3;
    printf("Atribua um valor prara o num1: ");
    scanf("%d", &num1);
    printf("Atribua um valor prara o num2: ");
    scanf("%d", &num2);
    printf("Atribua um valor prara o num3: ");
    scanf("%d", &num3);
    if(num1>num2 && num1>num3){
        printf("Numero 1 eh o maior dos 3 numeros");
    }else{
        if(num2>num1 && num2>num3){
        printf("Numero 2 eh o maior dos 3 numeros");        
        }else{
        printf("Numero 3 eh o maior dos 3 numeros");
        }
    }
    return 0;
}