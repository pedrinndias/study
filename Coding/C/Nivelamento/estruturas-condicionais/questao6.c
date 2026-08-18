// Faça um programa que leia um número inteiro de 1 a 7 e imprima o dia da semana correspondente, onde 1 é Domingo, 2 é 
// Segunda-feira, e assim por diante. Se o usuário digitar um número fora desse intervalo, o programa deve informar "Dia inválido".

#include<stdio.h>
int main(){
    int num;
    printf("Escreva um numeiro inteiro de 1 a 7: ");
    scanf("%d", &num);
    if(num < 1 || num > 7){
        printf("Este numero eh invalido para representar dias de semana.");
    }else{
        switch(num){
            case 1: printf("%d representa o Domingo!\n", num); break;
            case 2: printf("%d representa o Segunda-feira!\n", num); break;
            case 3: printf("%d representa o Terca-feira!\n", num); break;
            case 4: printf("%d representa o Quarta-feira!\n", num); break;
            case 5: printf("%d representa o Quinta-feira!\n", num); break;
            case 6: printf("%d representa o Sexta-feira!\n", num); break;
            case 7: printf("%d representa o Sabado!\n", num); break;
        }
    }

    return 0;
}