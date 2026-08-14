//Crie um programa para uma loja que calcula um desconto. 
//Peça o valor total da compra. Se o valor for maior que R$100,00, aplique um desconto de 10%. Caso contrário, não há desconto. 
// Use o operador ternário para calcular e exibir o valor final.

#include<stdio.h>
int main(){
    double total_compra;
    printf("Escreva o valor total da compra: ");
    scanf("%lf", &total_compra);
    printf("O valor total da compra eh: %.2lf", (total_compra>100.00) ? (total_compra * 0.90) : total_compra);
    return 0;
}