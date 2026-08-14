//Use #define para criar uma constante chamada PI com o valor 3.14159. 
//Depois, declare uma variável raio do tipo double, atribua um valor a ela e calcule a área do círculo (área = PI * raio * raio). 
//Imprima o resultado.
#define PI 3.14159
#include<stdio.h>
int main(){
    double raio;
    raio = 3;
    printf("A area do circulo eh: %lf", (PI*raio*raio));

    return 0;
}