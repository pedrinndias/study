//Exercício 9: Perfil Simples
//Enunciado
//Crie variáveis para armazenar as seguintes informações: um número de matrícula (inteiro), a idade (inteiro), 
//o peso (float) e o tipo sanguíneo (char). Atribua valores e imprima todos eles de forma organizada.

#include<stdio.h>
int main(){
    int matricula;
    int idade;
    float peso;
    char tipo_sanguineo[2];

    printf("\n Sua Matricula: ");
    scanf("%d", &matricula);
    printf("\n Sua Idade: ");
    scanf("%d", &idade);
    printf("\n Seu Peso: ");
    scanf("%f", &peso);
    printf("\n Sua tipo sanguineo: ");
    scanf(" %s", tipo_sanguineo);
    
    printf("\n Sua Matricula eh: %d", matricula);
    printf("\n Sua Idade eh: %d", idade);
    printf("\n Seu Peso eh: %.2f", peso);
    printf("\n Seu tipo sanguineo eh: %s", tipo_sanguineo);
    
    return 0;
}