//Objetivo: Agora que você sabe trocar vizinhos, vamos fazer o menor elemento do vetor inteiro "flutuar" até a posição [0].
//Tarefa: Crie apenas um laço for. Use uma variável j. Esse laço deve começar no final do vetor (j = 4) e ir diminuindo até chegar na posição 1 (j > 0). Dentro do laço, compare vetor[j] com vetor[j-1] e troque se necessário.

#include <stdio.h>

void swap(int *vetor, int i, int j) {
    int temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
}

int main() {
    int TAM = 5;
    int vetor[5] = {50, 40, 30, 20, 10}; 
    
    // TODO: Crie um laço 'for' usando 'j'.
    // j começa em TAM-1.
    // O laço roda enquanto j > 0.
    // j diminui a cada passo (j--).
    // Dentro do laço, faça o if comparando vetor[j] com vetor[j-1].
    	for(int j = (TAM-1); j > 0; j--){
		if(vetor[j] < vetor[(j-1)]){swap(vetor, j, (j-1));}
	}
    
    
    // Verificando o resultado:
    printf("Vetor apos a 1a viagem: ");
    for(int k=0; k<TAM; k++) printf("%d ", vetor[k]);
    // O esperado é: 10 50 40 30 20. O '10' flutuou para a posição 0!
    return 0;
}
