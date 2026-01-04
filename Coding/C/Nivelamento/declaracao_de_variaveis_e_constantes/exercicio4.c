//Enunciado
//Declare três variáveis inteiras (nota1, nota2, nota3) na mesma linha para armazenar três notas de uma prova. 
//Atribua valores a elas e imprima cada uma em uma linha.

#include<stdio.h>
int main(){
    int nota[3];
    for(int i=0; i<3; i++){
        printf("\nEscreva a nota da prova[%d]: ", i+1);
        scanf("%d", &nota[i]);
    }
    for(int i=0; i<3; i++){
        printf("\nA nota da prova[%d] foi: %d", (i+1), nota[i]);
    }
    return 0;
}