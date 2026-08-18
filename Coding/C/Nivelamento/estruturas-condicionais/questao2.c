//Crie um programa que solicite a idade de uma pessoa e determine se ela está apta a votar. 
//No Brasil, o voto é obrigatório para maiores de 18 anos e facultativo para pessoas entre 16 e 18 anos e maiores de 70 anos. 
//Considere essas regras.

#include<stdio.h>
int main(){
    int idade;
    printf("Escreva sua idade: ");
    scanf("%d", &idade);
    if(idade<16){
        printf("A pessoa nao pode votar.");
    }else{
            if(idade>=18 && idade<=70){
                printf("o voto eh obrigatorio");
            }else{
                printf("O voto eh facultativo");
            }
        }
    return 0;
}