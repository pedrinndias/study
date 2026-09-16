// Defina uma struct Data com dia, mes e ano. Em seguida, defina uma struct Funcionario com nome (string), salario (float) e data_admissao (do tipo struct Data). Crie uma variável Funcionario, preencha todos os seus dados (incluindo os da data aninhada) e imprima-os na tela.


#include<stdio.h>

typedef struct Data{
	int dia;
	int mes;
	int ano;
} Data;

typedef struct Funcionario{
	char nome[100];
	float salario;
	Data data_admissao;
} Funcionario;


int main(){
	Funcionario funcionarios[3];
	for(int i=0; i<3; i++){
		printf("Insira o nome do funcionario[%d]:", i);
		fgets(funcionarios[i].nome,100,stdin);
		int j=0;
		while(funcionarios[i].nome[j] != '\0'){
			if(funcionarios[i].nome[j] == '\n'){
				funcionarios[i].nome[j] = '\0'; 
			} 
			j++;
		}		

		printf("Insira o salario do funcionario[%d]:", i);
		scanf("%f", &funcionarios[i].salario);

		printf("Insira o dia que o funcionario[%d] foi admitido:", i);
		scanf("%d", &funcionarios[i].data_admissao.dia);

		printf("Insira o mes que o funcionario[%d] foi admitido:", i);
		scanf("%d", &funcionarios[i].data_admissao.mes);

		printf("Insira o ano que o funcionario[%d] foi admitido:", i);
		scanf("%d", &funcionarios[i].data_admissao.ano);
		getchar();
	}
	
	
	for(int i=0; i<3; i++){
		printf("\nNome do funcionario[%d]: %s\n", i, funcionarios[i].nome);
		printf("Salario do funcionario[%d]: %.2f\n", i, funcionarios[i].salario);
		printf("Data que o funcionario[%d] foi admitido:\n -Dia: %d\n -Mes: %d\n -Ano: %d\n", i, funcionarios[i].data_admissao.dia, funcionarios[i].data_admissao.mes, funcionarios[i].data_admissao.ano );
	}
	
	return 0;
}
