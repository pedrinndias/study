//Desenvolva um programa que receba o comprimento de dois catetos de um triângulo retângulo. 
//Calcule e exiba o comprimento da hipotenusa utilizando a função hypot().

#include<stdio.h>
#include<math.h>
int main(){
    int cat1, cat2; // comprimento dos 2 catetos
    printf("Escrve o valor do cateto 1:");
    scanf("%d",&cat1);
    printf("Escrve o valor do cateto 2:");
    scanf("%d",&cat2);
    double resultado = hypot(cat1,cat2);
    printf("O valor da hipotenusa eh: %.0lf", resultado);
    return 0;
}