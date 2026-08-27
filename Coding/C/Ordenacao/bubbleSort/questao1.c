// Objetivo: Esquecer os laços de repetição (for) por um momento. Vamos focar apenas em comparar dois vizinhos e trocá-los.

// Tarefa: Dado um vetor de 5 posições, compare a última posição [4] com a penúltima [3]. Se a última for menor, troque-as de lugar


#include <stdio.h>

void swap(int *vetor, int i, int j) {
    int temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
}

int main() {
    int vetor[5] = {50, 40, 30, 20, 10}; // O 10 deveria estar no início!
    
    // TODO: Escreva um 'if' que compare vetor[4] e vetor[3].
    // Se vetor[4] for menor que vetor[3], chame a função swap.

	if(vetor[4]<vetor[3]){swap(vetor, 3, 4);}
    
    // Verificando o resultado:
    printf("Vetor apos verificacao: %d e %d\n", vetor[3], vetor[4]); 
    // O esperado é que vetor[3] seja 10 e vetor[4] seja 20.
    return 0;
}
