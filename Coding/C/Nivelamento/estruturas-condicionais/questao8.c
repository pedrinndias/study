//Escreva um programa que determine se um ano inserido pelo usuário é bissexto. 
//Um ano é bissexto se for divisível por 4, mas não por 100, a menos que também seja divisível por 400.
#include<stdio.h>
int main(){
    int ano;
    printf("Escreva um ano: ");
    scanf("%d", &ano);
    if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){
        printf("Este ano eh bissexto");
    }else{
        printf("Este ano nao eh bissexto");
    }
    
    return 0;
}