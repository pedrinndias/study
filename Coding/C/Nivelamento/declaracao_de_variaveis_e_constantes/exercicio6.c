//Enunciado
//Use #define para criar uma constante chamada PI com o valor 3.14159. 
//Depois, declare uma variável raio do tipo double, atribua um valor a ela e calcule a área do círculo (área = PI * raio * raio). 
//Imprima o resultado.

#include<stdio.h>
#include<math.h>
#define PI 3.14159

int main(){
    double raio;
    printf("Escreva um valor para o raio: ");
    scanf("%lf", &raio);
    printf("O valor da area do circulo: %.2lf", (PI * (pow(raio,2))));
    return 0;
}