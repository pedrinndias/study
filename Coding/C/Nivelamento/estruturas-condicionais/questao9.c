//Crie um programa que receba uma nota de um aluno (A, B, C, D ou F) e, usando switch-case, 
//imprima uma mensagem correspondente: A - Excelente, B - Ótimo, C - Bom, D - Regular, F - Reprovado.
#include<stdio.h>
int main(){
    char nota;
    printf("Escreva a nota do aluno: ");
    scanf("%c", &nota);
    switch(nota){
        case 'A': printf("A - Excelente"); break;
        case 'B': printf("B - Otimo"); break;
        case 'C': printf("C - Bom"); break;
        case 'D': printf("D - Regular"); break;
        case 'F': printf("F - Reprovado"); break;
        default: printf("Esta nota nao eh valida!"); break;
    }

    return 0;
}