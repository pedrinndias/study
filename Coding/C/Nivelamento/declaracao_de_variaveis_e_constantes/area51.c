#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main(){
    srand(time(NULL));
    int num_aleatorio = (rand() % (150 - 40)) + 40;
    printf("Numero aleatorio: %d", num_aleatorio);
    return 0;
}
