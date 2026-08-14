//Crie variáveis para armazenar as seguintes informações: um número de matrícula (inteiro), a idade (inteiro), 
//o peso (float) e o tipo sanguíneo (char). Atribua valores e imprima todos eles de forma organizada.

#include<stdio.h>
int main(){
    int matricula;
    int idade;
    float peso;
    char tipo_sanguineo;

    matricula = 837645637;
    idade = 20;
    peso = 68.7;
    tipo_sanguineo = 'O';

    printf("Matricula: %d \n Idade: %d \n Peso: %.2f \n Tipo sanguineo: %c \n",matricula, idade, peso, tipo_sanguineo);

    return 0;
}