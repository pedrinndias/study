//Exercício 3: Soma de Pares (For)
//Crie um programa que calcule e mostre a soma de todos os números pares de 1 a 100.

#include<stdio.h>
int main(){
    int num=0;
    for(int i=1; i<101; i++){
        if(i%2==0){
            num+=i;
        }
    }
    printf("A soma de todos os numeros pares de 1 a 100= %d", num);
    return 0;
}