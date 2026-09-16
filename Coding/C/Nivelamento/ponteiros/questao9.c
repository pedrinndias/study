// Declare uma variável, um ponteiro para essa variável e um ponteiro para o ponteiro. Atribua os endereços corretamente. Use o ponteiro para ponteiro para alterar o valor da variável original e imprima o resultado para confirmar a alteração.

#include<stdio.h>
int main(){
	int var;
	int *ptr;
	ptr = &var;
	int **ptrAux;
	ptrAux = &ptr;
	printf("Insira um valor para variavel=");
	scanf("%d", &var);
	**ptrAux = 20;
	printf("Novo valor da variavel = %d", var);	

	return 0;
}
