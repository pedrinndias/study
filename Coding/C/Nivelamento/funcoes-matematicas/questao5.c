//Crie um programa que peça um ângulo em radianos ao usuário. 
//Calcule e exiba o seno, o cosseno e a tangente desse ângulo utilizando as funções sin(), cos() e tan().

#include<stdio.h>
#include<math.h>
int main(){
    double ang_rad;
    printf("Escreva um angulo em radianos: ");
    scanf("%lf", &ang_rad);
    double seno = sin(ang_rad);
    double coss = cos(ang_rad);
    double tangente = tan(ang_rad);
    printf("O seno do angulo eh: %.4lf\n", seno);
    printf("O cosseno do angulo eh: %.4lf\n", coss);
    printf("O tangente do angulo eh: %.4lf\n", tangente);
    return 0;
}