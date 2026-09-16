// Declare uma variável do tipo int. Em seguida, declare um ponteiro para int. Atribua o endereço da variável ao ponteiro. Imprima na tela: a) O valor da variável. b) O endereço da variável. c) O valor armazenado no ponteiro (que deve ser o endereço da variável). d) O valor da variável acessado através do ponteiro (usando o operador de dereferenciação *).

#include<stdio.h>
int main(){
	int var = 10;
	int *Ptr;
	Ptr = &var;
	printf("Valor da variavel = %d\n Endereco da variavel %p\n O valor armazenado no ponteiro = %d", var, &var, *Ptr);


	return 0;
}
