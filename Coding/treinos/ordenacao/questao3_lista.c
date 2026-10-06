#include<stdio.h>
#include<stdlib.h>
typedef struct Aluno{
	char nome[100];
	float nota;
	int faltas;
}Aluno;
void swap(Aluno *array, int i, int j){
	Aluno aux = array[i];
	array[i] = array[j];
	array[j] = aux;
}
void ordenarSelecaoDec(Aluno *array, int N){
	for(int i=0; i < N-1; i++){
		int maior=i;
		for(int j=i+1; j<N; j++){
			if(array[maior].nota < array[j].nota){
				maior = j;	
			}else{
				if(array[maior].nota == array[j].nota){
					if(array[maior].faltas > array[j].faltas){
						maior = j;
					}else{
						if(array[maior].faltas == array[j].faltas){
							if(array[maior].nome[0] > array[j].nome[0]){
								maior = j;
							}	
						}
					}
				}
			}
		}
		swap(array, i, maior);
	}
}

int main(){
	int N;
	scanf("%d", &N);
	Aluno *aluno = malloc(N * sizeof(Aluno));
	if (aluno == NULL) {
		return 1;
	}
	for(int i=0; i<N; i++){
		scanf(" %99s %f %d", aluno[i].nome, &aluno[i].nota, &aluno[i].faltas);
	}
	ordenarSelecaoDec(aluno, N);
	for(int i=0; i<N; i++){
		printf("%d %s %.1f %d\n", (i+1), aluno[i].nome, aluno[i].nota, aluno[i].faltas);
	}	
	
	
	return 0;
}
