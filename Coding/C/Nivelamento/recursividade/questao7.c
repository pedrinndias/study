// Implemente o Algoritmo de Euclides de forma recursiva para encontrar o Máximo Divisor Comum (MDC) entre dois números inteiros a e b. A regra é: mdc(a, b) é a se b for 0; caso contrário, mdc(a, b) é mdc(b, a % b).
#include <stdio.h>

int mdc(int a, int b) {
    // Caso base: se b for 0, o mdc é a
    if (b == 0) {
        return a;
    }
    // Passo recursivo
    else {
        return mdc(b, a % b);
    }
}

int main() {
    int num1 = 48, num2 = 18;
    printf("O MDC de %d e %d e: %d\n", num1, num2, mdc(num1, num2));
    
    num1 = 101, num2 = 103; // Primos entre si
    printf("O MDC de %d e %d e: %d\n", num1, num2, mdc(num1, num2));
    return 0;
}
