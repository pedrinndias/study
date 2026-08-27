// Objetivo: O Exercício 2 colocou o menor de todos na posição 0. Mas o resto do vetor ainda está bagunçado! Precisamos repetir aquela viagem várias vezes.
// Tarefa: Pegue o seu laço for do exercício 2 e coloque-o dentro de outro laço for (usando a variável i). O laço i vai ditar quantas viagens faremos. Ele deve rodar de 0 até TAM - 1.

#include <stdio.h>

void swap(int *array, int i, int j) {
	int temp = array[i];
	array[i]=array[j];
	array[j]=temp;
}

int main() {
    int TAM = 5;
    int array[5] = {50, 40, 30, 20, 10}; 
    
    // TODO: Crie o laço externo com 'i' (de 0 ate TAM-1) eh ate TAM - 1 porque se eu ordenar ate o penultimo, logicamente o ultimo vai estar ordenado
    // TODO: Cole o laço interno com 'j' do Exercicio 2 aqui dentro.
	for(int i=0; i < TAM-1; i++){
		for(int j=TAM-1; j>i; j--){
			if(array[j]<array[j-1]){swap(array, j, j-1);}
		}
	}

    
    
    // Verificando o resultado:
    printf("Vetor ordenado: ");
    for(int k=0; k<TAM; k++) printf("%d ", array[k]);
    // O esperado é: 10 20 30 40 50.
    return 0;
}
