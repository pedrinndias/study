//Faça um programa que peça a idade de uma pessoa e use uma estrutura if-else-if para classificá-la em uma das seguintes categorias:

 //   0-12 anos: Criança
 //   13-17 anos: Adolescente
 //   18-59 anos: Adulto
 //   60 anos ou mais: Idoso
 #include<stdio.h>
 int main(){
    int idade;
    printf("Escreva sua idade: ");
    scanf("%d", &idade);
    if(idade>=0 && idade<13){
        printf("Voce eh uma crianca!");
    }else{
        if(idade>=13 && idade<18){
            printf("Voce eh um Adolescente!");
        }else{
            if(idade>=18 && idade<60){
                printf("Voce eh um Adulto!");
            }else{
                if(idade>=60){
                    printf("Voce eh um Idoso!");
                }
            }
        }
    }

    return 0;
 }
