// Desenvolva um programa que peça ao usuário para digitar uma senha. O programa deve continuar pedindo a senha enquanto o usuário não digitar a senha correta ("1234"). Quando a senha correta for digitada, exiba a mensagem "Acesso Permitido".

#include<stdio.h>
int main(){
	int senha;
	do {
	printf("Digite sua senha: ");
	scanf("%d", &senha);
	if(senha!=1234){
		printf("Senha incorreta, tente novamente!\n");
	}
	}while(senha!=1234);	
	printf("Senha correta, acesso liberado!");
	return 0;
}
