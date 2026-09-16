// Usando a struct Data do exercício 6, crie uma função int compararDatas(struct Data d1, struct Data d2). A função deve retornar:

// -1 se a data d1 for anterior à d2.
// 0 se as datas forem iguais.
// 1 se a data d1 for posterior à d2.
// Teste a função com diferentes datas.

#include<stdio.h>


typedef struct Data{
	int dia;
	int mes;
	int ano;
} Data;

int compararDatas(Data d1, Data d2){
	if(d1.ano < d2.ano){
		return -1;
	}else{
		if(d1.ano == d2.ano){
			if(d1.mes < d2.mes){
				return -1;
			}else{
				if(d1.mes == d2.mes){
					if(d1.dia < d2.dia){
						return -1;
					}else{
						if(d1.dia == d2.dia){
							return 0;
						}else{
							return 1;
						}
					}
				}else{
					return 1;
				}
			}
		}else{
			return 1;
		}
	}
}


int main(){
	Data d1, d2;
	printf("Insira um dia para d1:");
	scanf("%d", &d1.dia);

	printf("Insira um mes para d1:");
	scanf("%d", &d1.mes);

	printf("Insira um ano para d1:");
	scanf("%d", &d1.ano);

	printf("Insira um dia para d2:");
	scanf("%d", &d2.dia);

	printf("Insira um mes para d2:");
	scanf("%d", &d2.mes);

	printf("Insira um ano para d2:");
	scanf("%d", &d2.ano);
	
	if((compararDatas(d1,d2)) == -1){
		printf("a data d1 for anterior à d2");
	}else{
		if((compararDatas(d1,d2)) == 0){
			printf("as datas sao iguais.");
		}else{
			if((compararDatas(d1,d2)) == 1){
				printf("d1 eh posterior a d2");
			}
		}
	}

	return 0;
}
