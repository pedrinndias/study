//Exercício 2: Tabuada (For)
// Peça ao usuário para inserir um número inteiro. 
//Em seguida, use um laço for para calcular e exibir a tabuada desse número, do 1 ao 10.

#include<stdio.h>
int main(){
    int num;
    printf("Escreva um numero: ");
    scanf("%d", &num);
    for(int i=1; i<11; i++){
        printf("%d * %d = %d\n", num, i ,(num*i));
    }
    return 0;
}