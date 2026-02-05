# Nivelamento AEDS 1 - Linguagem C/C++

## Sumário

### C

* [Declaração de variáveis e constantes](#exercícios-focados-em-declaração-de-variáveis-e-constantes-em-c)

* [Estrutura de repetição](#exercícios-focados-em-estrutura-de-repetição-while--do-while--for)

* [Estrutura de condição](#exercícios-focados-em-estruturas-condicionais-if-else--operador-ternario--switch-case)

* [Funções matemáticas](#exercícios-focados-em-funções-matemáticas-utilizando-a-biblioteca-mathh--em-c)

* [Modularização](#exercícios-focados-em-modularização-funções-e-procedimentos)

* [Recursividade](#exercícios-focados-em-recursividade)

* [Vetores](#exercícios-focados-em-vetores)

* [Matrizes](#exercícios-focados-em-matrizes)

* [Strings](#exercícios-focados-em-strings)

* [Ponteiros](#exercícios-focados-em-ponteiros)

* [Funções](#exercícios-focados-em-funções)

* [Alocação Dinâmica de Memória](#exercícios-focados-em-alocação-dinâmica-de-memória)

* [Arquivos](#exercícios-focados-em-recursividade)

* [Structs](#exercícios-focados-em-structs)

---

### C++

* [Classe](#exercícios-focados-em-classe)
* [Herança](#exercícios-focados-em-herança)

## Exercícios focados em declaração de variáveis e constantes em C

### Exercício 1: Declarando uma Idade

### Enunciado
Declare uma variável do tipo inteiro para armazenar a sua idade, atribua um valor a ela e imprima o valor na tela.

### Resolução
```c
#include <stdio.h>

int main() {
    // Declaração de uma variável inteira chamada 'idade'
    int idade;

    // Atribuição do valor 25 à variável 'idade'
    idade = 25;

    // Impressão do valor da variável
    printf("A minha idade e: %d anos.\n", idade);

    return 0;
}

```

### Exercício 2: Armazenando a Altura

### Enunciado
Declare uma variável de ponto flutuante (float) para guardar a sua altura em metros. Atribua um valor e imprima na tela, formatando para exibir apenas duas casas decimais.

### Resolução
```c
#include <stdio.h>

int main() {
    // Declaração de uma variável float chamada 'altura' e atribuição de valor
    float altura = 1.75;

    // Impressão do valor com formatação para duas casas decimais (%.2f)
    printf("A minha altura e: %.2f metros.\n", altura);

    return 0;
}

```

**Saída esperada:** A minha altura e: 1.75 metros.

### Exercício 3: Guardando uma Inicial

### Enunciado
Declare uma variável do tipo char para armazenar a primeira letra do seu nome. Atribua o valor e imprima na tela.

### Resolução
```c
#include <stdio.h>

int main() {
    // Declaração de uma variável char. Note o uso de aspas simples.
    char inicial_nome = 'C';

    // Para imprimir um char, usamos o especificador de formato %c
    printf("A inicial do meu nome e: %c\n", inicial_nome);

    return 0;
}
```

**Saída esperada:**A inicial do meu nome e: C

### Exercício 4: Múltiplas Notas

### Enunciado
Declare três variáveis inteiras (nota1, nota2, nota3) na mesma linha para armazenar três notas de uma prova. Atribua valores a elas e imprima cada uma em uma linha.

### Resolução
```c
#include <stdio.h>

int main() {
    // Declaração de múltiplas variáveis do mesmo tipo em uma única linha
    int nota1, nota2, nota3;

    // Atribuição de valores
    nota1 = 10;
    nota2 = 8;
    nota3 = 7;

    printf("Nota 1: %d\n", nota1);
    printf("Nota 2: %d\n", nota2);
    printf("Nota 3: %d\n", nota3);

    return 0;
}

```
**Saída esperada:** 
Nota 1: 10
Nota 2: 8
Nota 3: 7

### Exercício 5: Soma Simples

### Enunciado
Declare duas variáveis inteiras, a e b. Atribua valores a elas. Declare uma terceira variável, soma, e guarde nela o resultado da soma de a e b. Imprima o resultado.

### Resolução
```c
#include <stdio.h>

int main() {
    int a = 5;
    int b = 7;

    // A variável 'soma' armazena o resultado da expressão 'a + b'
    int soma = a + b;

    printf("O resultado de %d + %d e: %d\n", a, b, soma);

    return 0;
}
```

**Saída esperada:**  O resultado de 5 + 7 e: 12

### Exercício 6: Constante PI para Área do Círculo

### Enunciado
Use #define para criar uma constante chamada PI com o valor 3.14159. Depois, declare uma variável raio do tipo double, atribua um valor a ela e calcule a área do círculo (área = PI * raio * raio). Imprima o resultado.

### Resolução
```c
#include <stdio.h>

// Definição de uma constante usando a diretiva #define
#define PI 3.14159

int main() {
    double raio = 5.0;
    double area;

    area = PI * raio * raio;

    printf("A area de um circulo com raio %.1f e: %f\n", raio, area);

    return 0;
}
```

**Saída esperada:** A area de um circulo com raio 5.0 e: 78.539750

### Exercício 7: Constante com a palavra-chave const

**Enunciado:** Declare uma constante inteira chamada `DIAS_SEMANA` usando a palavra-chave `const` e atribua o valor 7. Imprima uma frase que utilize essa constante.

**Resolução:**
```c
#include <stdio.h>

int main() {
    // Declaração de uma constante usando a palavra-chave 'const'
    // O valor de DIAS_SEMANA não pode ser alterado após esta linha.
    const int DIAS_SEMANA = 7;

    printf("Uma semana tem %d dias.\n", DIAS_SEMANA);

    // Tentar fazer DIAS_SEMANA = 8; resultaria em um erro de compilação.

    return 0;
}

```
**Saída esperada:** Uma semana tem 7 dias.

### Exercício 8: Trocando Valores

**Enunciado:** Declare duas variáveis, `caixaA` e `caixaB`, com valores 10 e 20, respectivamente. O objetivo é trocar os valores entre elas. Você precisará de uma variável auxiliar. Ao final, imprima os novos valores de `caixaA` e `caixaB`.

**Resolução:**
```c
#include <stdio.h>

int main() {
    int caixaA = 10;
    int caixaB = 20;
    int aux; // Variável auxiliar para guardar um valor temporariamente

    printf("Valores originais: caixaA = %d, caixaB = %d\n", caixaA, caixaB);

    // Processo de troca
    aux = caixaA;    // aux agora guarda o valor de caixaA (10)
    caixaA = caixaB; // caixaA recebe o valor de caixaB (20)
    caixaB = aux;    // caixaB recebe o valor que estava em aux (10)

    printf("Valores trocados: caixaA = %d, caixaB = %d\n", caixaA, caixaB);

    return 0;
}

```
**Saída esperada:**
Valores originais: caixaA = 10, caixaB = 20
Valores trocados: caixaA = 20, caixaB = 10

### Exercício 9: Perfil Simples

### Enunciado
Crie variáveis para armazenar as seguintes informações: um número de matrícula (inteiro), a idade (inteiro), o peso (float) e o tipo sanguíneo (char). Atribua valores e imprima todos eles de forma organizada.

### Resolução
```c
#include <stdio.h>

int main() {
    int matricula = 12345;
    int idade = 22;
    float peso = 68.5;
    char tipo_sanguineo = 'A'; // Supondo tipo A, fator Rh não incluso

    printf("--- Ficha do Aluno ---\n");
    printf("Matricula: %d\n", matricula);
    printf("Idade: %d anos\n", idade);
    printf("Peso: %.1f kg\n", peso);
    printf("Tipo Sanguineo: %c\n", tipo_sanguineo);
    printf("---------------------\n");

    return 0;
}

```

### Exercício 10: Conversão de Moeda

### Enunciado
Defina uma constante TAXA_CAMBIO_DOLAR com o valor 5.25 (reais por dólar). Declare uma variável valor_reais com um valor qualquer. Calcule o valor correspondente em dólares e armazene em uma variável valor_dolares. Imprima os três valores.

### Resolução
```c
#include <stdio.h>

int main() {
    const double TAXA_CAMBIO_DOLAR = 5.25;
    double valor_reais = 250.00;
    double valor_dolares;

    // Cálculo da conversão
    valor_dolares = valor_reais / TAXA_CAMBIO_DOLAR;

    printf("Taxa de cambio: R$ %.2f por dolar\n", TAXA_CAMBIO_DOLAR);
    printf("Valor em Reais: R$ %.2f\n", valor_reais);
    printf("Valor em Dolares: $ %.2f\n", valor_dolares);

    return 0;
}

```

---

## Exercícios focados em Funções matemáticas utilizando a biblioteca math.h  em C

### **Exercícios de Programação em C com `math.h`**

#### **Exercício 1: Calculadora de Raiz Quadrada**
Crie um programa que peça ao usuário para inserir um número. Use a função `sqrt()` da biblioteca `math.h` para calcular e exibir a raiz quadrada desse número.

**Função principal:** `sqrt()`
#include <stdio.h>
#include <math.h>

``` C
int main() {
    double numero, resultado;

    printf("Digite um numero para calcular a raiz quadrada: ");
    scanf("%lf", &numero);

    if (numero >= 0) {
        resultado = sqrt(numero);
        printf("A raiz quadrada de %.2lf e %.2lf\n", numero, resultado);
    } else {
        printf("Nao e possivel calcular a raiz quadrada de um numero negativo.\n");
    }

    return 0;
}

```

#### **Exercício 2: Potenciação**
Escreva um programa que receba dois números do usuário: a base e o expoente. Utilize a função `pow()` para calcular a potência e mostre o resultado.

**Função principal:** `pow()`

``` C
#include <stdio.h>
#include <math.h>

int main() {
    double base, expoente, resultado;

    printf("Digite o valor da base: ");
    scanf("%lf", &base);

    printf("Digite o valor do expoente: ");
    scanf("%lf", &expoente);

    resultado = pow(base, expoente);

    printf("%.2lf elevado a %.2lf e igual a %.2lf\n", base, expoente, resultado);

    return 0;
}

```


#### **Exercício 3: Calculadora de Hipotenusa**
Desenvolva um programa que receba o comprimento de dois catetos de um triângulo retângulo. Calcule e exiba o comprimento da hipotenusa utilizando a função `hypot()`.

**Função principal:** `hypot()`

``` C
#include <stdio.h>
#include <math.h>

int main() {
    double cateto1, cateto2, hipotenusa;

    printf("Digite o comprimento do primeiro cateto: ");
    scanf("%lf", &cateto1);

    printf("Digite o comprimento do segundo cateto: ");
    scanf("%lf", &cateto2);

    hipotenusa = hypot(cateto1, cateto2);

    printf("A hipotenusa do triangulo com catetos %.2lf e %.2lf e %.2lf\n", cateto1, cateto2, hipotenusa);

    return 0;
}

```

#### **Exercício 4: Arredondamento de Números**
Faça um programa que solicite um número decimal (float) ao usuário. Em seguida, mostre o número arredondado para cima usando a função `ceil()` e para baixo usando a função `floor()`.

**Funções principais:** `ceil()`, `floor()`

``` C
#include <stdio.h>
#include <math.h>

int main() {
    double numero, arredondado_cima, arredondado_baixo;

    printf("Digite um numero decimal (ex: 5.7): ");
    scanf("%lf", &numero);

    arredondado_cima = ceil(numero);
    arredondado_baixo = floor(numero);

    printf("Numero original: %.2lf\n", numero);
    printf("Arredondado para cima (ceil): %.2lf\n", arredondado_cima);
    printf("Arredondado para baixo (floor): %.2lf\n", arredondado_baixo);

    return 0;
}

```

#### **Exercício 5: Funções Trigonométricas Básicas**
Crie um programa que peça um ângulo em radianos ao usuário. Calcule e exiba o seno, o cosseno e a tangente desse ângulo utilizando as funções `sin()`, `cos()` e `tan()`.

**Funções principais:** `sin()`, `cos()`, `tan()`
**Dica:** Lembre-se que as funções trigonométricas em `math.h` trabalham com radianos.

``` C
#include <stdio.h>
#include <math.h>

int main() {
    double angulo_radianos, seno, cosseno, tangente;

    printf("Digite um angulo em radianos: ");
    scanf("%lf", &angulo_radianos);

    seno = sin(angulo_radianos);
    cosseno = cos(angulo_radianos);
    tangente = tan(angulo_radianos);

    printf("Para o angulo %.4lf radianos:\n", angulo_radianos);
    printf("Seno: %.4lf\n", seno);
    printf("Cosseno: %.4lf\n", cosseno);
    printf("Tangente: %.4lf\n", tangente);

    return 0;
}

``` 

#### **Exercício 6: Conversor de Coordenadas**
Escreva um programa que converta coordenadas polares (raio `r` e ângulo `theta` em radianos) para coordenadas cartesianas (`x`, `y`). As fórmulas são:
* `x = r * cos(theta)`
* `y = r * sin(theta)`

Peça ao usuário o raio e o ângulo e, em seguida, exiba as coordenadas `x` e `y` resultantes.

**Funções principais:** `cos()`, `sin()`

``` C
#include <stdio.h>
#include <math.h>

int main() {
    double r, theta, x, y;

    printf("--- Conversor de Coordenadas Polares para Cartesianas ---\n");
    printf("Digite o raio (r): ");
    scanf("%lf", &r);

    printf("Digite o angulo theta em radianos: ");
    scanf("%lf", &theta);

    x = r * cos(theta);
    y = r * sin(theta);

    printf("As coordenadas cartesianas (x, y) sao: (%.2lf, %.2lf)\n", x, y);

    return 0;
}

```


#### **Exercício 7: Logaritmos**
Faça um programa que peça um número positivo ao usuário. Calcule e mostre:
1.  O logaritmo natural (base *e*) do número, usando `log()`.
2.  O logaritmo base 10 do número, usando `log10()`.

**Funções principais:** `log()`, `log10()`

``` C
#include <stdio.h>
#include <math.h>

int main() {
    double numero, log_natural, log_base10;

    printf("Digite um numero positivo: ");
    scanf("%lf", &numero);

    if (numero > 0) {
        log_natural = log(numero);
        log_base10 = log10(numero);

        printf("Para o numero %.2lf:\n", numero);
        printf("Logaritmo Natural (base e): %.4lf\n", log_natural);
        printf("Logaritmo Base 10: %.4lf\n", log_base10);
    } else {
        printf("O logaritmo so e definido para numeros positivos.\n");
    }

    return 0;
}

```

#### **Exercício 8: Distância Euclidiana**
Crie um programa que receba as coordenadas (`x1`, `y1`) e (`x2`, `y2`) de dois pontos no plano cartesiano. Calcule e exiba a distância euclidiana entre eles. A fórmula da distância é:
`d = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))`

**Funções principais:** `sqrt()`, `pow()`

``` C
#include <stdio.h>
#include <math.h>

int main() {
    double x1, y1, x2, y2, distancia;

    printf("Digite as coordenadas do primeiro ponto (x1 y1): ");
    scanf("%lf %lf", &x1, &y1);

    printf("Digite as coordenadas do segundo ponto (x2 y2): ");
    scanf("%lf %lf", &x2, &y2);

    distancia = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));

    printf("A distancia euclidiana entre os pontos (%.2lf, %.2lf) e (%.2lf, %.2lf) e %.2lf\n", x1, y1, x2, y2, distancia);

    return 0;
}

```

#### **Exercício 9: Cálculo de Juros Compostos**
Desenvolva uma calculadora de juros compostos. O programa deve pedir ao usuário:
* O capital inicial (P)
* A taxa de juros anual (r)
* O número de vezes que o juro é capitalizado por ano (n)
* O número de anos (t)

Use a fórmula `A = P * pow((1 + r/n), n*t)` para calcular o montante final (A).

**Função principal:** `pow()`

``` C
#include <stdio.h>
#include <math.h>

int main() {
    double capital_inicial, taxa_juros_anual, montante_final, tempo_anos;
    int n_capitalizacoes;

    printf("Digite o capital inicial (P): ");
    scanf("%lf", &capital_inicial);

    printf("Digite a taxa de juros anual (r) (ex: 0.05 para 5%%): ");
    scanf("%lf", &taxa_juros_anual);

    printf("Digite o numero de vezes que o juro e capitalizado por ano (n): ");
    scanf("%d", &n_capitalizacoes);

    printf("Digite o numero de anos (t): ");
    scanf("%lf", &tempo_anos);

    montante_final = capital_inicial * pow((1 + taxa_juros_anual / n_capitalizacoes), n_capitalizacoes * tempo_anos);

    printf("O montante final apos %.1lf anos sera de: R$ %.2lf\n", tempo_anos, montante_final);

    return 0;
}

```

#### **Exercício 10: Bhaskara**
Escreva um programa que calcule as raízes de uma equação de segundo grau (`ax² + bx + c = 0`). Peça ao usuário os coeficientes `a`, `b` e `c`.
1.  Calcule o delta: `Δ = b² - 4ac`.
2.  Se o delta for negativo, informe que não há raízes reais.
3.  Se o delta for zero, calcule e mostre a única raiz.
4.  Se o delta for positivo, calcule e mostre as duas raízes distintas.

`x = (-b ± sqrt(Δ)) / (2a)`

**Funções principais:** `sqrt()`, `pow()` (para `b²`)

``` C
#include <stdio.h>
#include <math.h>

int main() {
    double a, b, c, delta, x1, x2;

    printf("Calculadora de equacao de segundo grau (ax^2 + bx + c = 0)\n");
    printf("Digite o coeficiente 'a': ");
    scanf("%lf", &a);
    printf("Digite o coeficiente 'b': ");
    scanf("%lf", &b);
    printf("Digite o coeficiente 'c': ");
    scanf("%lf", &c);

    if (a == 0) {
        printf("Nao e uma equacao de segundo grau.\n");
        return 1;
    }

    delta = pow(b, 2) - 4 * a * c;

    if (delta < 0) {
        printf("A equacao nao possui raizes reais (delta = %.2lf).\n", delta);
    } else if (delta == 0) {
        x1 = -b / (2 * a);
        printf("A equacao possui uma raiz real: x = %.2lf\n", x1);
    } else {
        x1 = (-b + sqrt(delta)) / (2 * a);
        x2 = (-b - sqrt(delta)) / (2 * a);
        printf("A equacao possui duas raizes reais:\n");
        printf("x1 = %.2lf\n", x1);
        printf("x2 = %.2lf\n", x2);
    }

    return 0;
}

```

---

## Exercícios focados em Estruturas condicionais (if-else / operador ternario / switch case)

### Exercício 1: Verificador de Número (if-else)
Escreva um programa que peça ao usuário para inserir um número inteiro. O programa deve então verificar e informar se o número é positivo, negativo ou zero.

### Exercício 1: Verificador de Número (if-else)
```c
#include <stdio.h>

int main() {
    int numero;

    printf("Digite um numero inteiro: ");
    scanf("%d", &numero);

    if (numero > 0) {
        printf("O numero %d e positivo.\n", numero);
    } else if (numero < 0) {
        printf("O numero %d e negativo.\n", numero);
    } else {
        printf("O numero e zero.\n");
    }

    return 0;
}
```

### Exercício 2: Elegibilidade para Votação (if-else)
Crie um programa que solicite a idade de uma pessoa e determine se ela está apta a votar. No Brasil, o voto é obrigatório para maiores de 18 anos e facultativo para pessoas entre 16 e 18 anos e maiores de 70 anos. Considere essas regras.

### Exercício 2: Elegibilidade para Votação (if-else)
```c
#include <stdio.h>

int main() {
    int idade;

    printf("Digite a sua idade: ");
    scanf("%d", &idade);

    if (idade >= 18 && idade <= 70) {
        printf("Com %d anos, o voto e obrigatorio.\n", idade);
    } else if ((idade >= 16 && idade < 18) || idade > 70) {
        printf("Com %d anos, o voto e facultativo.\n", idade);
    } else {
        printf("Com %d anos, voce nao pode votar.\n", idade);
    }

    return 0;
}
```

### Exercício 3: O Maior de Três (if-else aninhado)
Desenvolva um programa que leia três números inteiros e use estruturas `if-else` aninhadas para encontrar e imprimir o maior dos três.

### Exercício 3: O Maior de Três (if-else aninhado)
```c
#include <stdio.h>

int main() {
    int n1, n2, n3;

    printf("Digite tres numeros inteiros separados por espaco: ");
    scanf("%d %d %d", &n1, &n2, &n3);

    if (n1 >= n2) {
        if (n1 >= n3) {
            printf("O maior numero e: %d\n", n1);
        } else {
            printf("O maior numero e: %d\n", n3);
        }
    } else {
        if (n2 >= n3) {
            printf("O maior numero e: %d\n", n2);
        } else {
            printf("O maior numero e: %d\n", n3);
        }
    }

    return 0;
}
```

### Exercício 4: Par ou Ímpar (Operador Ternário)
Escreva um programa que receba um número inteiro e, utilizando o operador ternário, mostre na tela se o número é par ou ímpar.


### Exercício 4: Par ou Ímpar (Operador Ternário)
```c
#include <stdio.h>

int main() {
    int numero;

    printf("Digite um numero inteiro: ");
    scanf("%d", &numero);

    printf("O numero %d e %s.\n", numero, (numero % 2 == 0) ? "Par" : "Impar");

    return 0;
}
```




### Exercício 5: Calculadora de Desconto (Operador Ternário)
Crie um programa para uma loja que calcula um desconto. Peça o valor total da compra. Se o valor for maior que R$100,00, aplique um desconto de 10%. Caso contrário, não há desconto. Use o operador ternário para calcular e exibir o valor final.

### Exercício 5: Calculadora de Desconto (Operador Ternário)
```c
#include <stdio.h>

int main() {
    float valorCompra, valorFinal;

    printf("Digite o valor total da compra: R$ ");
    scanf("%f", &valorCompra);

    valorFinal = (valorCompra > 100.0) ? (valorCompra * 0.90) : valorCompra;

    printf("O valor final com desconto e: R$ %.2f\n", valorFinal);

    return 0;
}
```

### Exercício 6: Dia da Semana (switch-case)
Faça um programa que leia um número inteiro de 1 a 7 e imprima o dia da semana correspondente, onde 1 é Domingo, 2 é Segunda-feira, e assim por diante. Se o usuário digitar um número fora desse intervalo, o programa deve informar "Dia inválido".

### Exercício 6: Dia da Semana (switch-case)
```c
#include <stdio.h>

int main() {
    int dia;

    printf("Digite um numero de 1 a 7: ");
    scanf("%d", &dia);

    switch (dia) {
        case 1:
            printf("Domingo\n");
            break;
        case 2:
            printf("Segunda-feira\n");
            break;
        case 3:
            printf("Terca-feira\n");
            break;
        case 4:
            printf("Quarta-feira\n");
            break;
        case 5:
            printf("Quinta-feira\n");
            break;
        case 6:
            printf("Sexta-feira\n");
            break;
        case 7:
            printf("Sabado\n");
            break;
        default:
            printf("Dia invalido.\n");
            break;
    }

    return 0;
}
```

### Exercício 7: Calculadora Simples (switch-case)
Desenvolva uma calculadora simples que leia dois números e um operador (+, -, \*, /). O programa deve usar uma estrutura `switch-case` para realizar a operação desejada e imprimir o resultado. Lembre-se de tratar a divisão por zero.

### Exercício 7: Calculadora Simples (switch-case)
```c
#include <stdio.h>

int main() {
    char operador;
    float num1, num2;

    printf("Digite o primeiro numero: ");
    scanf("%f", &num1);

    printf("Digite o operador (+, -, *, /): ");
    scanf(" %c", &operador); // Espaço antes de %c para consumir a nova linha

    printf("Digite o segundo numero: ");
    scanf("%f", &num2);

    switch (operador) {
        case '+':
            printf("%.2f + %.2f = %.2f\n", num1, num2, num1 + num2);
            break;
        case '-':
            printf("%.2f - %.2f = %.2f\n", num1, num2, num1 - num2);
            break;
        case '*':
            printf("%.2f * %.2f = %.2f\n", num1, num2, num1 * num2);
            break;
        case '/':
            if (num2 != 0) {
                printf("%.2f / %.2f = %.2f\n", num1, num2, num1 / num2);
            } else {
                printf("Erro! Divisao por zero nao e permitida.\n");
            }
            break;
        default:
            printf("Operador invalido.\n");
            break;
    }

    return 0;
}
```


### Exercício 8: Ano Bissexto (Combinação de if-else)
Escreva um programa que determine se um ano inserido pelo usuário é bissexto. Um ano é bissexto se for divisível por 4, mas não por 100, a menos que também seja divisível por 400.

### Exercício 8: Ano Bissexto (Combinação de if-else)
```c
#include <stdio.h>

int main() {
    int ano;

    printf("Digite um ano: ");
    scanf("%d", &ano);

    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        printf("O ano %d e bissexto.\n", ano);
    } else {
        printf("O ano %d nao e bissexto.\n", ano);
    }

    return 0;
}
```

### Exercício 9: Conceito de Notas (switch-case)
Crie um programa que receba uma nota de um aluno (A, B, C, D ou F) e, usando `switch-case`, imprima uma mensagem correspondente: A - Excelente, B - Ótimo, C - Bom, D - Regular, F - Reprovado.

### Exercício 9: Conceito de Notas (switch-case)
```c
#include <stdio.h>
#include <ctype.h> // Para a função toupper

int main() {
    char nota;

    printf("Digite o conceito do aluno (A, B, C, D ou F): ");
    scanf(" %c", &nota);

    switch (toupper(nota)) { // Converte a nota para maiúscula
        case 'A':
            printf("Excelente\n");
            break;
        case 'B':
            printf("Otimo\n");
            break;
        case 'C':
            printf("Bom\n");
            break;
        case 'D':
            printf("Regular\n");
            break;
        case 'F':
            printf("Reprovado\n");
            break;
        default:
            printf("Conceito invalido.\n");
            break;
    }

    return 0;
}
```

### Exercício 10: Faixa Etária (if-else-if)
Faça um programa que peça a idade de uma pessoa e use uma estrutura `if-else-if` para classificá-la em uma das seguintes categorias:
* 0-12 anos: Criança
* 13-17 anos: Adolescente
* 18-59 anos: Adulto
* 60 anos ou mais: Idoso

### Exercício 10: Faixa Etária (if-else-if)
```c
#include <stdio.h>

int main() {
    int idade;

    printf("Digite a idade: ");
    scanf("%d", &idade);

    if (idade >= 0 && idade <= 12) {
        printf("Categoria: Crianca\n");
    } else if (idade >= 13 && idade <= 17) {
        printf("Categoria: Adolescente\n");
    } else if (idade >= 18 && idade <= 59) {
        printf("Categoria: Adulto\n");
    } else if (idade >= 60) {
        printf("Categoria: Idoso\n");
    } else {
        printf("Idade invalida.\n");
    }

    return 0;
}
```

## Exercícios focados em Estrutura de repetição (While / Do While / For)

### Exercício 1: Contagem Crescente (For)
Escreva um programa que use um laço `for` para imprimir os números de 1 a 10, um em cada linha.

### Exercício 1: Contagem Crescente (For)
```c
#include <stdio.h>

int main() {
    int i;
    printf("Contando de 1 a 10:\n");
    for (i = 1; i <= 10; i++) {
        printf("%d\n", i);
    }
    return 0;
}
```

### Exercício 2: Tabuada (For)
Peça ao usuário para inserir um número inteiro. Em seguida, use um laço `for` para calcular e exibir a tabuada desse número, do 1 ao 10.

### Exercício 2: Tabuada (For)
```c
#include <stdio.h>

int main() {
    int numero, i;

    printf("Digite um numero para ver sua tabuada: ");
    scanf("%d", &numero);

    printf("\nTabuada do %d:\n", numero);
    for (i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", numero, i, numero * i);
    }

    return 0;
}
```

### Exercício 3: Soma de Pares (For)
Crie um programa que calcule e mostre a soma de todos os números pares de 1 a 100.

### Exercício 3: Soma de Pares (For)
```c
#include <stdio.h>

int main() {
    int i;
    int soma = 0;

    for (i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            soma += i; // ou soma = soma + i;
        }
    }

    printf("A soma de todos os numeros pares de 1 a 100 e: %d\n", soma);

    return 0;
}
```

### Exercício 4: Validação de Senha (While)
Desenvolva um programa que peça ao usuário para digitar uma senha. O programa deve continuar pedindo a senha enquanto o usuário não digitar a senha correta ("1234"). Quando a senha correta for digitada, exiba a mensagem "Acesso Permitido".

### Exercício 4: Validação de Senha (While)
```c
#include <stdio.h>
#include <string.h> // Necessário para a função strcmp

int main() {
    char senha_digitada[20];
    const char *senha_correta = "1234";

    printf("Digite a senha: ");
    scanf("%s", senha_digitada);

    // strcmp retorna 0 se as strings forem iguais
    while (strcmp(senha_digitada, senha_correta) != 0) {
        printf("Senha incorreta. Tente novamente: ");
        scanf("%s", senha_digitada);
    }

    printf("Acesso Permitido.\n");

    return 0;
}
```

### Exercício 5: Média de Notas (While)
Escreva um programa que leia as notas de um número indeterminado de alunos. O programa deve parar de ler notas quando o usuário digitar um valor negativo. Ao final, o programa deve calcular e exibir a média das notas inseridas.

### Exercício 5: Média de Notas (While)
```c
#include <stdio.h>

int main() {
    float nota = 0, soma = 0;
    int contador = 0;

    printf("Digite as notas dos alunos (digite um numero negativo para parar):\n");

    while (1) { // Laço infinito que será quebrado internamente
        printf("Nota %d: ", contador + 1);
        scanf("%f", &nota);

        if (nota < 0) {
            break; // Sai do laço se a nota for negativa
        }

        soma += nota;
        contador++;
    }

    if (contador > 0) {
        float media = soma / contador;
        printf("\nForam inseridas %d notas.\n", contador);
        printf("A media das notas e: %.2f\n", media);
    } else {
        printf("\nNenhuma nota foi inserida.\n");
    }

    return 0;
}
```

### Exercício 6: Fatorial (While)
Faça um programa que peça um número inteiro não negativo ao usuário e calcule o seu fatorial. Lembre-se que o fatorial de 0 é 1.
*Exemplo: 5! = 5 \* 4 \* 3 \* 2 \* 1 = 120*

### Exercício 6: Fatorial (While)
```c
#include <stdio.h>

int main() {
    int numero;
    long long fatorial = 1; // Usar long long para fatoriais maiores

    printf("Digite um numero inteiro nao negativo: ");
    scanf("%d", &numero);

    if (numero < 0) {
        printf("Erro! Fatorial nao e definido para numeros negativos.\n");
    } else {
        int temp = numero;
        while (temp > 1) {
            fatorial *= temp;
            temp--;
        }
        printf("O fatorial de %d e: %lld\n", numero, fatorial);
    }

    return 0;
}
```

### Exercício 7: Menu de Opções (Do-While)
Crie um programa que exiba um menu com as seguintes opções:
1.  Somar
2.  Subtrair
3.  Sair

O programa deve permitir que o usuário escolha uma opção. Se a opção for 1 ou 2, ele deve pedir dois números, realizar a operação e mostrar o resultado. O programa deve continuar executando até que o usuário escolha a opção 3 (Sair). Garanta que o menu seja exibido pelo menos uma vez.

### Exercício 7: Menu de Opções (Do-While)
```c
#include <stdio.h>

int main() {
    int opcao;
    float num1, num2;

    do {
        // Exibição do menu
        printf("\n----- MENU -----\n");
        printf("1. Somar\n");
        printf("2. Subtrair\n");
        printf("3. Sair\n");
        printf("Escolha uma opcao: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("Digite dois numeros para somar: ");
                scanf("%f %f", &num1, &num2);
                printf("Resultado: %.2f\n", num1 + num2);
                break;
            case 2:
                printf("Digite dois numeros para subtrair: ");
                scanf("%f %f", &num1, &num2);
                printf("Resultado: %.2f\n", num1 - num2);
                break;
            case 3:
                printf("Saindo do programa...\n");
                break;
            default:
                printf("Opcao invalida! Tente novamente.\n");
                break;
        }
    } while (opcao != 3);

    return 0;
}
```

### Exercício 8: Adivinhe o Número (Do-While)
Desenvolva um jogo simples onde o programa "pensa" em um número secreto (por exemplo, 42). O programa deve pedir ao usuário para adivinhar o número. Use um laço `do-while` para continuar pedindo um palpite até que o usuário acerte. A cada palpite errado, informe se o número secreto é maior ou menor.

### Exercício 8: Adivinhe o Número (Do-While)
```c
#include <stdio.h>

int main() {
    int numero_secreto = 42;
    int palpite;

    printf("--- Jogo de Adivinhacao ---\n");
    printf("Tente adivinhar o numero secreto!\n");

    do {
        printf("Digite seu palpite: ");
        scanf("%d", &palpite);

        if (palpite < numero_secreto) {
            printf("Muito baixo! Tente um numero maior.\n");
        } else if (palpite > numero_secreto) {
            printf("Muito alto! Tente um numero menor.\n");
        }

    } while (palpite != numero_secreto);

    printf("Parabens! Voce acertou o numero secreto (%d)!\n", numero_secreto);

    return 0;
}
```

### Exercício 9: Sequência de Fibonacci (For)
Escreva um programa que peça ao usuário um número N e gere os N primeiros termos da sequência de Fibonacci. A sequência começa com 0 e 1, e cada termo subsequente é a soma dos dois anteriores (0, 1, 1, 2, 3, 5, 8, ...).

### Exercício 9: Sequência de Fibonacci (For)
```c
#include <stdio.h>

int main() {
    int n, i;
    int t1 = 0, t2 = 1, proximo_termo;

    printf("Quantos termos da sequencia de Fibonacci voce quer ver? ");
    scanf("%d", &n);

    printf("Os primeiros %d termos de Fibonacci sao:\n", n);

    for (i = 1; i <= n; i++) {
        printf("%d, ", t1);
        proximo_termo = t1 + t2;
        t1 = t2;
        t2 = proximo_termo;
    }
    printf("...\n");

    return 0;
}
```

### Exercício 10: Contagem de Dígitos (While)
Crie um programa que peça ao usuário para inserir um número inteiro e, em seguida, conte e exiba quantos dígitos esse número possui. Por exemplo, o número 2548 tem 4 dígitos. (Dica: use divisões inteiras por 10).

### Exercício 10: Contagem de Dígitos (While)
```c
#include <stdio.h>

int main() {
    int numero;
    int contador = 0;

    printf("Digite um numero inteiro: ");
    scanf("%d", &numero);

    // Caso especial para o número 0
    if (numero == 0) {
        contador = 1;
    } else {
        int temp = numero;
        // Torna o número positivo se for negativo para a contagem funcionar
        if (temp < 0) {
            temp = -temp;
        }
        
        while (temp != 0) {
            temp = temp / 10; // Divisão inteira remove o último dígito
            contador++;
        }
    }

    printf("O numero %d possui %d digitos.\n", numero, contador);

    return 0;
}
```

---

## Exercícios focados em Modularização (funções e procedimentos)
### Exercício 1: Função de Saudação
Crie um procedimento (uma função `void`) chamado `saudacao` que não recebe nenhum parâmetro e simplesmente imprime "Bem-vindo ao programa!" na tela. Chame este procedimento a partir da sua função `main`.

### Exercício 1: Função de Saudação
```c
#include <stdio.h>

// Procedimento (função void) para a saudação
void saudacao() {
    printf("Bem-vindo ao programa!\n");
}

int main() {
    // Chama o procedimento de saudação
    saudacao();
    return 0;
}
```


### Exercício 2: Função para Somar
Escreva uma função chamada `somar` que recebe dois números inteiros como parâmetros e retorna a soma deles. Na função `main`, peça ao usuário para digitar dois números, chame a função `somar` e imprima o resultado.

### Exercício 2: Função para Somar
```c
#include <stdio.h>

// Função que recebe dois inteiros e retorna a soma
int somar(int a, int b) {
    return a + b;
}

int main() {
    int num1, num2, resultado;

    printf("Digite o primeiro numero: ");
    scanf("%d", &num1);
    printf("Digite o segundo numero: ");
    scanf("%d", &num2);

    // Chama a função 'somar' e armazena o retorno
    resultado = somar(num1, num2);

    printf("A soma de %d e %d e: %d\n", num1, num2, resultado);

    return 0;
}
```

### Exercício 3: Procedimento para Tabuada
Crie um procedimento chamado `imprimirTabuada` que recebe um número inteiro como parâmetro e imprime a tabuada desse número (de 1 a 10). A função não deve retornar nenhum valor.

### Exercício 3: Procedimento para Tabuada
```c
#include <stdio.h>

// Procedimento que recebe um número e imprime sua tabuada
void imprimirTabuada(int numero) {
    printf("\nTabuada do %d:\n", numero);
    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", numero, i, numero * i);
    }
}

int main() {
    int n;
    printf("Digite um numero para ver a sua tabuada: ");
    scanf("%d", &n);
    imprimirTabuada(n); // Chama o procedimento
    return 0;
}
```

### Exercício 4: Função para Verificar Paridade
Desenvolva uma função chamada `ehPar` que recebe um número inteiro e retorna `1` se o número for par e `0` se for ímpar. Na `main`, use esta função dentro de um `if` para informar ao usuário se o número digitado é par ou ímpar.

### Exercício 4: Função para Verificar Paridade
```c
#include <stdio.h>

// Função que retorna 1 se for par, 0 se for ímpar
int ehPar(int numero) {
    if (numero % 2 == 0) {
        return 1; // É par
    } else {
        return 0; // É ímpar
    }
    // Alternativa: return (numero % 2 == 0);
}

int main() {
    int num;
    printf("Digite um numero inteiro: ");
    scanf("%d", &num);

    if (ehPar(num)) { // A função retorna um valor que o if interpreta como verdadeiro (1) ou falso (0)
        printf("O numero %d e par.\n", num);
    } else {
        printf("O numero %d e impar.\n", num);
    }

    return 0;
}
```

### Exercício 5: Função para Calcular Fatorial
Escreva uma função `fatorial` que recebe um número inteiro não negativo e retorna o seu fatorial. Lembre-se que o fatorial de 0 é 1.

### Exercício 5: Função para Calcular Fatorial
```c
#include <stdio.h>

// Função que calcula e retorna o fatorial de um número
long long fatorial(int n) {
    if (n < 0) {
        return -1; // Retorna -1 para indicar um erro (fatorial de negativo não existe)
    }
    if (n == 0) {
        return 1; // Fatorial de 0 é 1
    }

    long long resultado = 1;
    for (int i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

int main() {
    int numero;
    printf("Digite um numero para calcular o fatorial: ");
    scanf("%d", &numero);

    long long resultado = fatorial(numero);

    if (resultado == -1) {
        printf("Nao e possivel calcular o fatorial de um numero negativo.\n");
    } else {
        printf("O fatorial de %d e: %lld\n", numero, resultado);
    }

    return 0;
}
```

### Exercício 6: Função para Encontrar o Maior Valor
Crie uma função chamada `maiorValor` que recebe três números do tipo `float` como parâmetros e retorna o maior entre eles.

### Exercício 6: Função para Encontrar o Maior Valor
```c
#include <stdio.h>

// Função que retorna o maior entre três números float
float maiorValor(float a, float b, float c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

int main() {
    float n1, n2, n3, maior;
    printf("Digite tres numeros separados por espaco: ");
    scanf("%f %f %f", &n1, &n2, &n3);

    maior = maiorValor(n1, n2, n3);

    printf("O maior valor entre %.2f, %.2f e %.2f e: %.2f\n", n1, n2, n3, maior);

    return 0;
}
```
### Exercício 7: Procedimento com Parâmetros por Referência
Faça um procedimento chamado `trocarValores` que recebe dois ponteiros para inteiros como parâmetros e troca os valores das variáveis para as quais eles apontam. Na `main`, declare duas variáveis, imprima seus valores, chame a função e imprima os valores novamente para mostrar que foram trocados.

### Exercício 7: Procedimento com Parâmetros por Referência
```c
#include <stdio.h>

// Procedimento que troca os valores de duas variáveis usando ponteiros
void trocarValores(int *ptrA, int *ptrB) {
    int temp = *ptrA; // Armazena o valor apontado por ptrA
    *ptrA = *ptrB;    // O valor apontado por ptrA recebe o valor apontado por ptrB
    *ptrB = temp;     // O valor apontado por ptrB recebe o valor de temp
}

int main() {
    int x = 10;
    int y = 20;

    printf("Valores antes da troca: x = %d, y = %d\n", x, y);

    trocarValores(&x, &y); // Passa os endereços de memória de x e y

    printf("Valores depois da troca: x = %d, y = %d\n", x, y);

    return 0;
}
```

### Exercício 8: Função para Calcular Média
Escreva uma função chamada `calcularMedia` que recebe um array (vetor) de `float` e o seu tamanho como parâmetros. A função deve retornar a média dos valores contidos no array.

### Exercício 8: Função para Calcular Média
```c
#include <stdio.h>

#define TAMANHO 5 // Define uma constante para o tamanho do vetor

// Função que calcula a média de um vetor de floats
float calcularMedia(float vetor[], int tamanho) {
    if (tamanho <= 0) {
        return 0; // Evita divisão por zero
    }
    float soma = 0;
    for (int i = 0; i < tamanho; i++) {
        soma += vetor[i];
    }
    return soma / tamanho;
}

int main() {
    float notas[TAMANHO] = {7.5, 8.0, 6.5, 9.0, 7.0};
    
    printf("Notas: ");
    for(int i = 0; i < TAMANHO; i++){
        printf("%.1f ", notas[i]);
    }
    
    float media = calcularMedia(notas, TAMANHO);
    printf("\nA media das notas e: %.2f\n", media);

    return 0;
}
```
### Exercício 9: Calculadora com Funções
Refatore o exercício da "Calculadora Simples" (dos exercícios de `switch-case`) para usar funções. Crie funções separadas para `somar`, `subtrair`, `multiplicar` e `dividir`. A função `main` será responsável por obter os dados do usuário e chamar a função apropriada com base na operação escolhida.

### Exercício 9: Calculadora com Funções
```c
#include <stdio.h>

// Funções para as operações
float somar(float a, float b) { return a + b; }
float subtrair(float a, float b) { return a - b; }
float multiplicar(float a, float b) { return a * b; }
float dividir(float a, float b) {
    if (b != 0) {
        return a / b;
    } else {
        printf("Erro: Divisao por zero!\n");
        return 0; // Retorno de erro
    }
}

int main() {
    float num1, num2, resultado;
    char op;

    printf("Digite a operacao (ex: 5 * 3): ");
    scanf("%f %c %f", &num1, &op, &num2);

    switch (op) {
        case '+':
            resultado = somar(num1, num2);
            printf("Resultado: %.2f\n", resultado);
            break;
        case '-':
            resultado = subtrair(num1, num2);
            printf("Resultado: %.2f\n", resultado);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            printf("Resultado: %.2f\n", resultado);
            break;
        case '/':
            resultado = dividir(num1, num2);
            if(num2 != 0) { // Só imprime se a divisão foi válida
               printf("Resultado: %.2f\n", resultado);
            }
            break;
        default:
            printf("Operador invalido!\n");
    }

    return 0;
}
```

### Exercício 10: Função de Validação
Crie uma função chamada `lerNotaValida` que não recebe parâmetros, mas pede ao usuário para digitar uma nota entre 0 e 10. A função deve continuar pedindo a nota enquanto o valor digitado for inválido. Quando uma nota válida for inserida, a função deve retorná-la. Na `main`, chame esta função para ler uma nota e depois apenas a imprima.

### Exercício 10: Função de Validação
```c
#include <stdio.h>

// Função que lê e valida uma nota entre 0 e 10
float lerNotaValida() {
    float nota;
    do {
        printf("Digite uma nota (entre 0 e 10): ");
        scanf("%f", &nota);
        if (nota < 0 || nota > 10) {
            printf("Valor invalido! Tente novamente.\n");
        }
    } while (nota < 0 || nota > 10);
    return nota;
}

int main() {
    printf("Lendo a primeira nota.\n");
    float nota1 = lerNotaValida();

    printf("\nLendo a segunda nota.\n");
    float nota2 = lerNotaValida();

    printf("\nAs notas validas digitadas foram: %.2f e %.2f\n", nota1, nota2);

    return 0;
}
```

---

## Exercícios focados em Recursividade

### Exercício 1: Fatorial Recursivo
Crie uma função recursiva chamada `fatorial` que recebe um número inteiro não negativo `n` e retorna o seu fatorial. O caso base é quando `n` é 0, cujo fatorial é 1.

```c
#include <stdio.h>

long long fatorial(int n) {
    // Caso base: fatorial de 0 é 1
    if (n == 0) {
        return 1;
    }
    // Passo recursivo: n * (n-1)!
    else {
        return n * fatorial(n - 1);
    }
}

int main() {
    int numero = 5;
    printf("O fatorial de %d e: %lld\n", numero, fatorial(numero));
    
    numero = 10;
    printf("O fatorial de %d e: %lld\n", numero, fatorial(numero));
    return 0;
}
```

### Exercício 2: Sequência de Fibonacci Recursiva
Escreva uma função recursiva `fibonacci` que recebe um inteiro `n` e retorna o n-ésimo termo da sequência de Fibonacci. Os casos base são `fibonacci(0) = 0` e `fibonacci(1) = 1`. Para `n > 1`, `fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)`.

### Exercício 2: Sequência de Fibonacci Recursiva
```c
#include <stdio.h>

int fibonacci(int n) {
    // Casos base
    if (n == 0) return 0;
    if (n == 1) return 1;

    // Passo recursivo
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int termo = 10;
    printf("O %d-esimo termo da sequencia de Fibonacci e: %d\n", termo, fibonacci(termo));
    
    printf("Os 10 primeiros termos: ");
    for (int i = 0; i < 10; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\n");
    return 0;
}
```

### Exercício 3: Soma de 1 a N
Faça uma função recursiva `somaAteN` que recebe um inteiro positivo `n` e retorna a soma de todos os números de 1 até `n`. O caso base é quando `n` é 1, retornando 1.

### Exercício 3: Soma de 1 a N
```c
#include <stdio.h>

int somaAteN(int n) {
    // Caso base
    if (n == 1) {
        return 1;
    }
    // Passo recursivo
    else {
        return n + somaAteN(n - 1);
    }
}

int main() {
    int numero = 10;
    printf("A soma dos numeros de 1 a %d e: %d\n", numero, somaAteN(numero));
    
    numero = 100;
    printf("A soma dos numeros de 1 a %d e: %d\n", numero, somaAteN(numero));
    return 0;
}
```

### Exercício 4: Potenciação Recursiva
Desenvolva uma função recursiva `potencia` que recebe dois inteiros, `base` e `expoente`, e retorna o resultado de `base` elevado ao `expoente`. Considere que o expoente será sempre não negativo. O caso base é quando o `expoente` é 0, retornando 1.

### Exercício 4: Potenciação Recursiva
```c
#include <stdio.h>

long long potencia(int base, int expoente) {
    // Caso base
    if (expoente == 0) {
        return 1;
    }
    // Passo recursivo
    else {
        return base * potencia(base, expoente - 1);
    }
}

int main() {
    int base = 2;
    int expoente = 10;
    printf("%d elevado a %d e: %lld\n", base, expoente, potencia(base, expoente));
    
    base = 5;
    expoente = 3;
    printf("%d elevado a %d e: %lld\n", base, expoente, potencia(base, expoente));
    return 0;
}
```

### Exercício 5: Inversão de String
Crie um procedimento (função `void`) recursivo chamado `inverterString` que recebe uma string (ponteiro para `char`) como parâmetro e a imprime na ordem inversa. A ideia é imprimir o caractere atual *depois* da chamada recursiva para o restante da string.

### Exercício 5: Inversão de String
```c
#include <stdio.h>

void inverterString(char *str) {
    // Caso base: se o caractere atual for o terminador nulo
    if (*str == '\0') {
        return;
    }
    
    // Passo recursivo: chama a função para o resto da string
    inverterString(str + 1);
    
    // Imprime o caractere atual (na volta da recursão)
    printf("%c", *str);
}

int main() {
    char minhaString[] = "recursividade";
    printf("String original: %s\n", minhaString);
    printf("String invertida: ");
    inverterString(minhaString);
    printf("\n");
    return 0;
}
```

### Exercício 6: Soma dos Elementos de um Vetor
Escreva uma função recursiva `somaVetor` que recebe um vetor (array) de inteiros e seu tamanho, e retorna a soma de todos os seus elementos. A cada chamada, a função pode somar o último elemento com o resultado da chamada recursiva para o restante do vetor (tamanho - 1).

### Exercício 6: Soma dos Elementos de um Vetor
```c
#include <stdio.h>

int somaVetor(int vetor[], int tamanho) {
    // Caso base: se o vetor estiver vazio, a soma é 0
    if (tamanho <= 0) {
        return 0;
    }
    // Passo recursivo: soma o último elemento com a soma do resto do vetor
    return vetor[tamanho - 1] + somaVetor(vetor, tamanho - 1);
}

int main() {
    int meuVetor[] = {10, 20, 30, 40, 50};
    int tamanho = sizeof(meuVetor) / sizeof(meuVetor[0]);
    
    printf("A soma dos elementos do vetor e: %d\n", somaVetor(meuVetor, tamanho));
    return 0;
}
```

### Exercício 7: Máximo Divisor Comum (MDC)
Implemente o Algoritmo de Euclides de forma recursiva para encontrar o Máximo Divisor Comum (MDC) entre dois números inteiros `a` e `b`. A regra é: `mdc(a, b)` é `a` se `b` for 0; caso contrário, `mdc(a, b)` é `mdc(b, a % b)`.

### Exercício 7: Máximo Divisor Comum (MDC)
```c
#include <stdio.h>

int mdc(int a, int b) {
    // Caso base: se b for 0, o mdc é a
    if (b == 0) {
        return a;
    }
    // Passo recursivo
    else {
        return mdc(b, a % b);
    }
}

int main() {
    int num1 = 48, num2 = 18;
    printf("O MDC de %d e %d e: %d\n", num1, num2, mdc(num1, num2));
    
    num1 = 101, num2 = 103; // Primos entre si
    printf("O MDC de %d e %d e: %d\n", num1, num2, mdc(num1, num2));
    return 0;
}
```

### Exercício 8: Busca Binária Recursiva
Escreva uma função de busca binária recursiva, `buscaBinariaRec`, que procura por um valor em um vetor **ordenado**. A função deve receber o vetor, os índices de início e fim da busca, e o valor a ser procurado. Ela deve retornar o índice do valor se encontrado, ou -1 caso contrário.

### Exercício 8: Busca Binária Recursiva
```c
#include <stdio.h>

// Função de busca binária recursiva
int buscaBinariaRec(int vetor[], int inicio, int fim, int valor) {
    // Caso base: se o início ultrapassar o fim, o elemento não está no vetor
    if (inicio > fim) {
        return -1;
    }
    
    int meio = inicio + (fim - inicio) / 2; // Evita overflow para índices grandes

    // Caso base: o elemento foi encontrado no meio
    if (vetor[meio] == valor) {
        return meio;
    }
    
    // Passo recursivo: busca na metade apropriada
    if (vetor[meio] > valor) {
        return buscaBinariaRec(vetor, inicio, meio - 1, valor); // Busca na metade esquerda
    } else {
        return buscaBinariaRec(vetor, meio + 1, fim, valor);  // Busca na metade direita
    }
}

int main() {
    int vetorOrdenado[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int tamanho = sizeof(vetorOrdenado) / sizeof(vetorOrdenado[0]);
    int valorProcurado = 23;
    
    int indice = buscaBinariaRec(vetorOrdenado, 0, tamanho - 1, valorProcurado);
    
    if (indice != -1) {
        printf("Valor %d encontrado no indice %d.\n", valorProcurado, indice);
    } else {
        printf("Valor %d nao encontrado no vetor.\n", valorProcurado);
    }
    return 0;
}
```

### Exercício 9: Contagem de Dígitos de um Número
Crie uma função recursiva `contarDigitos` que recebe um número inteiro e retorna a quantidade de dígitos que ele possui. Por exemplo, `contarDigitos(2548)` deve retornar 4. O caso base ocorre quando o número é menor que 10.

### Exercício 9: Contagem de Dígitos de um Número
```c
#include <stdio.h>

int contarDigitos(int n) {
    // Torna o número positivo se for negativo, sem alterar o 0
    if (n < 0) n = -n;

    // Caso base: se o número tem apenas um dígito
    if (n < 10) {
        return 1;
    }
    
    // Passo recursivo: 1 + a contagem de dígitos do número dividido por 10
    return 1 + contarDigitos(n / 10);
}

int main() {
    int numero = 2548;
    printf("O numero %d tem %d digitos.\n", numero, contarDigitos(numero));
    
    numero = -98765;
    printf("O numero %d tem %d digitos.\n", numero, contarDigitos(numero));
    
    numero = 0;
    printf("O numero %d tem %d digitos.\n", numero, contarDigitos(numero));
    return 0;
}
```

### Exercício 10: Problema das Torres de Hanói
Implemente uma solução recursiva para o clássico problema das Torres de Hanói. Crie um procedimento `torresDeHanoi` que recebe o número de discos e os pinos de origem, destino e auxiliar. O procedimento deve imprimir os passos necessários para mover os discos do pino de origem para o de destino.

### Exercício 10: Problema das Torres de Hanói
```c
#include <stdio.h>

void torresDeHanoi(int n, char origem, char destino, char auxiliar) {
    // Caso base: se houver apenas um disco, mova-o diretamente
    if (n == 1) {
        printf("Mover disco 1 de %c para %c\n", origem, destino);
        return;
    }
    
    // Passo recursivo 1: mover n-1 discos da origem para o pino auxiliar
    torresDeHanoi(n - 1, origem, auxiliar, destino);
    
    // Mover o disco n (o maior) da origem para o destino
    printf("Mover disco %d de %c para %c\n", n, origem, destino);
    
    // Passo recursivo 2: mover n-1 discos do pino auxiliar para o destino
    torresDeHanoi(n - 1, auxiliar, destino, origem);
}

int main() {
    int numeroDeDiscos = 3;
    printf("Solucao para Torres de Hanoi com %d discos:\n", numeroDeDiscos);
    // Pinos são A (Origem), C (Destino), B (Auxiliar)
    torresDeHanoi(numeroDeDiscos, 'A', 'C', 'B');
    return 0;
}
```
---

## Exercícios focados em Vetores

### Exercício 1: Ler e Imprimir um Vetor
Crie um programa que declare um vetor de 5 posições do tipo `int`. Peça ao usuário para digitar os 5 valores e, em seguida, imprima todos os elementos do vetor na tela.

### Exercício 1: Ler e Imprimir um Vetor
```c
#include <stdio.h>

#define TAMANHO 5

int main() {
    int vetor[TAMANHO];
    int i;

    // Leitura dos valores do vetor
    printf("Digite %d valores inteiros:\n", TAMANHO);
    for (i = 0; i < TAMANHO; i++) {
        printf("Elemento %d: ", i);
        scanf("%d", &vetor[i]);
    }

    // Impressão dos valores do vetor
    printf("\nElementos do vetor:\n");
    for (i = 0; i < TAMANHO; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n");

    return 0;
}
```

### Exercício 2: Encontrar o Maior e o Menor Elemento
Escreva um programa que leia 10 números inteiros, armazene-os em um vetor e, ao final, imprima qual é o maior e o menor valor contido no vetor.

### Exercício 2: Encontrar o Maior e o Menor Elemento
```c
#include <stdio.h>

#define TAMANHO 10

int main() {
    int vetor[TAMANHO];
    int i, maior, menor;

    printf("Digite %d numeros inteiros:\n", TAMANHO);
    for (i = 0; i < TAMANHO; i++) {
        scanf("%d", &vetor[i]);
    }

    // Inicializa maior e menor com o primeiro elemento
    maior = vetor[0];
    menor = vetor[0];

    // Percorre o vetor a partir do segundo elemento para encontrar o maior e o menor
    for (i = 1; i < TAMANHO; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }

    printf("\nMaior elemento: %d\n", maior);
    printf("Menor elemento: %d\n", menor);

    return 0;
}
```

### Exercício 3: Média dos Elementos e Contagem
Faça um programa que preencha um vetor com 8 números reais. Em seguida, calcule e mostre a média de todos os elementos. Por fim, indique quantos elementos do vetor estão acima da média calculada.

### Exercício 3: Média dos Elementos e Contagem
```c
#include <stdio.h>

#define TAMANHO 8

int main() {
    float vetor[TAMANHO];
    float soma = 0.0, media;
    int i, acima_da_media = 0;

    printf("Digite %d numeros reais:\n", TAMANHO);
    for (i = 0; i < TAMANHO; i++) {
        scanf("%f", &vetor[i]);
        soma += vetor[i];
    }

    media = soma / TAMANHO;

    // Conta quantos elementos estão acima da média
    for (i = 0; i < TAMANHO; i++) {
        if (vetor[i] > media) {
            acima_da_media++;
        }
    }

    printf("\nMedia dos elementos: %.2f\n", media);
    printf("Quantidade de elementos acima da media: %d\n", acima_da_media);

    return 0;
}
```

### Exercício 4: Inverter um Vetor
Crie um programa que leia 10 elementos para um vetor `A`. Em seguida, crie um segundo vetor, `B`, que deverá conter os mesmos elementos de `A`, mas na ordem inversa. Exiba o vetor `B`.

### Exercício 4: Inverter um Vetor
```c
#include <stdio.h>

#define TAMANHO 10

int main() {
    int vetorA[TAMANHO], vetorB[TAMANHO];
    int i;

    printf("Digite os %d elementos do vetor A:\n", TAMANHO);
    for (i = 0; i < TAMANHO; i++) {
        scanf("%d", &vetorA[i]);
    }

    // Inverte o vetor A para o vetor B
    for (i = 0; i < TAMANHO; i++) {
        vetorB[i] = vetorA[TAMANHO - 1 - i];
    }

    printf("\nVetor B (inverso de A):\n");
    for (i = 0; i < TAMANHO; i++) {
        printf("%d ", vetorB[i]);
    }
    printf("\n");

    return 0;
}
```

### Exercício 5: Contar Números Pares
Escreva um programa que leia um vetor de 10 posições e conte quantos números pares ele possui. Imprima o resultado da contagem.

### Exercício 5: Contar Números Pares
```c
#include <stdio.h>

#define TAMANHO 10

int main() {
    int vetor[TAMANHO];
    int i, contador_pares = 0;

    printf("Digite %d numeros inteiros:\n", TAMANHO);
    for (i = 0; i < TAMANHO; i++) {
        scanf("%d", &vetor[i]);
    }

    // Conta os números pares
    for (i = 0; i < TAMANHO; i++) {
        if (vetor[i] % 2 == 0) {
            contador_pares++;
        }
    }

    printf("\nO vetor possui %d numeros pares.\n", contador_pares);

    return 0;
}
```

### Exercício 6: Somar Dois Vetores
Crie um programa que leia dois vetores de 5 posições cada. Em seguida, crie um terceiro vetor, `C`, cujo valor de cada posição será a soma dos elementos correspondentes nos vetores `A` e `B`. (Ex: `C[0] = A[0] + B[0]`). Mostre o vetor `C`.

### Exercício 6: Somar Dois Vetores
```c
#include <stdio.h>

#define TAMANHO 5

int main() {
    int vetorA[TAMANHO], vetorB[TAMANHO], vetorC[TAMANHO];
    int i;

    printf("Digite os elementos do Vetor A:\n");
    for (i = 0; i < TAMANHO; i++) scanf("%d", &vetorA[i]);

    printf("Digite os elementos do Vetor B:\n");
    for (i = 0; i < TAMANHO; i++) scanf("%d", &vetorB[i]);

    // Soma os vetores A e B para C
    for (i = 0; i < TAMANHO; i++) {
        vetorC[i] = vetorA[i] + vetorB[i];
    }

    printf("\nVetor C (soma de A e B):\n");
    for (i = 0; i < TAMANHO; i++) {
        printf("%d ", vetorC[i]);
    }
    printf("\n");

    return 0;
}
```

### Exercício 7: Busca por um Elemento
Faça um programa que preencha um vetor com 10 números. Depois, peça para o usuário digitar um número. O programa deve fazer uma busca por esse número no vetor e informar se ele foi encontrado e, caso afirmativo, em qual posição (índice).

### Exercício 7: Busca por um Elemento
```c
#include <stdio.h>

#define TAMANHO 10

int main() {
    int vetor[TAMANHO];
    int i, valor_busca, posicao = -1;

    printf("Digite %d numeros para preencher o vetor:\n", TAMANHO);
    for (i = 0; i < TAMANHO; i++) {
        scanf("%d", &vetor[i]);
    }

    printf("\nDigite o valor a ser buscado: ");
    scanf("%d", &valor_busca);

    // Realiza a busca linear
    for (i = 0; i < TAMANHO; i++) {
        if (vetor[i] == valor_busca) {
            posicao = i;
            break; // Para a busca assim que encontra o primeiro
        }
    }

    if (posicao != -1) {
        printf("Valor %d encontrado na posicao (indice) %d.\n", valor_busca, posicao);
    } else {
        printf("Valor %d nao encontrado no vetor.\n", valor_busca);
    }

    return 0;
}
```

### Exercício 8: Eliminar Elementos Repetidos
Desenvolva um programa que leia um vetor de 15 posições. Em seguida, crie um novo vetor que contenha apenas os elementos do vetor original que não se repetem. Exiba o novo vetor.
(Dica: para cada elemento, verifique se ele já foi inserido no novo vetor).

### Exercício 8: Eliminar Elementos Repetidos
```c
#include <stdio.h>

#define TAMANHO_ORIGINAL 15

int main() {
    int vetor_original[TAMANHO_ORIGINAL];
    int vetor_sem_repeticao[TAMANHO_ORIGINAL];
    int i, j, tamanho_novo = 0;
    int ja_existe;

    printf("Digite %d numeros para o vetor:\n", TAMANHO_ORIGINAL);
    for (i = 0; i < TAMANHO_ORIGINAL; i++) {
        scanf("%d", &vetor_original[i]);
    }

    for (i = 0; i < TAMANHO_ORIGINAL; i++) {
        ja_existe = 0;
        // Verifica se o elemento já está no vetor sem repetição
        for (j = 0; j < tamanho_novo; j++) {
            if (vetor_original[i] == vetor_sem_repeticao[j]) {
                ja_existe = 1;
                break;
            }
        }
        // Se não existe, adiciona
        if (!ja_existe) {
            vetor_sem_repeticao[tamanho_novo] = vetor_original[i];
            tamanho_novo++;
        }
    }

    printf("\nVetor sem elementos repetidos:\n");
    for (i = 0; i < tamanho_novo; i++) {
        printf("%d ", vetor_sem_repeticao[i]);
    }
    printf("\n");

    return 0;
}
```

### Exercício 9: Produto Escalar
Crie um programa que leia dois vetores de 10 posições cada. Calcule e mostre o produto escalar dos dois vetores, que é a soma do produto dos elementos correspondentes de cada vetor ( `(A[0]*B[0]) + (A[1]*B[1]) + ...` ).

### Exercício 9: Produto Escalar
```c
#include <stdio.h>

#define TAMANHO 10

int main() {
    int vetorA[TAMANHO], vetorB[TAMANHO];
    long long produto_escalar = 0;
    int i;

    printf("Digite os %d elementos do Vetor A:\n", TAMANHO);
    for (i = 0; i < TAMANHO; i++) scanf("%d", &vetorA[i]);

    printf("Digite os %d elementos do Vetor B:\n", TAMANHO);
    for (i = 0; i < TAMANHO; i++) scanf("%d", &vetorB[i]);
    
    // Calcula o produto escalar
    for (i = 0; i < TAMANHO; i++) {
        produto_escalar += (long long)vetorA[i] * vetorB[i];
    }
    
    printf("\nO produto escalar dos vetores e: %lld\n", produto_escalar);

    return 0;
}
```

### Exercício 10: Ordenação Simples (Bubble Sort)
Implemente o algoritmo de ordenação "Bubble Sort" para ordenar um vetor de 10 números inteiros em ordem crescente. Ao final, imprima o vetor ordenado.
(O Bubble Sort funciona comparando pares de elementos adjacentes e trocando-os de lugar se estiverem na ordem errada, repetindo o processo até que o vetor esteja ordenado).

### Exercício 10: Ordenação Simples (Bubble Sort)
```c
#include <stdio.h>

#define TAMANHO 10

int main() {
    int vetor[TAMANHO];
    int i, j, temp;

    printf("Digite %d numeros inteiros para ordenar:\n", TAMANHO);
    for (i = 0; i < TAMANHO; i++) {
        scanf("%d", &vetor[i]);
    }

    // Algoritmo Bubble Sort
    for (i = 0; i < TAMANHO - 1; i++) {
        for (j = 0; j < TAMANHO - 1 - i; j++) {
            // Compara elementos adjacentes
            if (vetor[j] > vetor[j + 1]) {
                // Troca os elementos de lugar
                temp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temp;
            }
        }
    }

    printf("\nVetor ordenado em ordem crescente:\n");
    for (i = 0; i < TAMANHO; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n");

    return 0;
}
```
---

## Exercícios focados em Matrizes

### Exercício 1: Ler e Imprimir uma Matriz
Crie um programa que declare uma matriz 3x3 de inteiros. Peça ao usuário para digitar os valores para cada posição e, ao final, imprima a matriz na tela com a formatação correta (linhas e colunas).

### Exercício 1: Ler e Imprimir uma Matriz
```c
#include <stdio.h>

#define LIN 3
#define COL 3

int main() {
    int matriz[LIN][COL];
    int i, j;

    // Leitura dos dados da matriz
    printf("Digite os valores para a matriz %dx%d:\n", LIN, COL);
    for (i = 0; i < LIN; i++) {
        for (j = 0; j < COL; j++) {
            printf("Elemento [%d][%d]: ", i, j);
            scanf("%d", &matriz[i][j]);
        }
    }

    // Impressão da matriz
    printf("\nMatriz digitada:\n");
    for (i = 0; i < LIN; i++) {
        for (j = 0; j < COL; j++) {
            printf("%d\t", matriz[i][j]); // \t para alinhar as colunas
        }
        printf("\n"); // Pula para a próxima linha
    }

    return 0;
}
```

### Exercício 2: Soma dos Elementos da Diagonal Principal
Escreva um programa que leia uma matriz quadrada 4x4 de números reais. Calcule e imprima a soma dos elementos que estão na diagonal principal (onde o índice da linha é igual ao da coluna).

### Exercício 2: Soma dos Elementos da Diagonal Principal
```c
#include <stdio.h>

#define ORDEM 4 // Matriz quadrada de ordem 4

int main() {
    float matriz[ORDEM][ORDEM];
    float soma_diagonal = 0.0;
    int i, j;

    printf("Digite os valores para a matriz %dx%d:\n", ORDEM, ORDEM);
    for (i = 0; i < ORDEM; i++) {
        for (j = 0; j < ORDEM; j++) {
            scanf("%f", &matriz[i][j]);
        }
    }
    
    // Soma os elementos da diagonal principal (onde i == j)
    for (i = 0; i < ORDEM; i++) {
        soma_diagonal += matriz[i][i];
    }
    
    printf("\nA soma dos elementos da diagonal principal e: %.2f\n", soma_diagonal);
    
    return 0;
}
```


### Exercício 3: Soma de Duas Matrizes
Faça um programa que leia duas matrizes 2x3 de inteiros, `A` e `B`. Crie uma terceira matriz, `C`, que será a soma de `A` e `B` (ou seja, `C[i][j] = A[i][j] + B[i][j]`). Imprima a matriz `C`.

### Exercício 3: Soma de Duas Matrizes
```c
#include <stdio.h>

#define LIN 2
#define COL 3

int main() {
    int A[LIN][COL], B[LIN][COL], C[LIN][COL];
    int i, j;

    printf("Digite os valores da Matriz A:\n");
    for (i = 0; i < LIN; i++) {
        for (j = 0; j < COL; j++) {
            scanf("%d", &A[i][j]);
        }
    }

    printf("Digite os valores da Matriz B:\n");
    for (i = 0; i < LIN; i++) {
        for (j = 0; j < COL; j++) {
            scanf("%d", &B[i][j]);
        }
    }
    
    // Calcula a soma das matrizes
    for (i = 0; i < LIN; i++) {
        for (j = 0; j < COL; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
    
    printf("\nMatriz C (Soma de A e B):\n");
    for (i = 0; i < LIN; i++) {
        for (j = 0; j < COL; j++) {
            printf("%d\t", C[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

### Exercício 4: Encontrar o Maior Valor e sua Posição
Crie um programa que leia uma matriz 5x5. Encontre o maior valor presente na matriz e, em seguida, mostre a linha e a coluna onde ele se encontra.

### Exercício 4: Encontrar o Maior Valor e sua Posição
```c
#include <stdio.h>

#define ORDEM 5

int main() {
    int matriz[ORDEM][ORDEM];
    int i, j;
    int maior_valor, linha_maior, coluna_maior;

    printf("Digite os valores para a matriz %dx%d:\n", ORDEM, ORDEM);
    for (i = 0; i < ORDEM; i++) {
        for (j = 0; j < COL; j++) {
            scanf("%d", &matriz[i][j]);
        }
    }

    // Inicializa com o primeiro elemento
    maior_valor = matriz[0][0];
    linha_maior = 0;
    coluna_maior = 0;
    
    // Procura pelo maior valor
    for (i = 0; i < ORDEM; i++) {
        for (j = 0; j < ORDEM; j++) {
            if (matriz[i][j] > maior_valor) {
                maior_valor = matriz[i][j];
                linha_maior = i;
                coluna_maior = j;
            }
        }
    }
    
    printf("\nO maior valor encontrado foi %d.\n", maior_valor);
    printf("Ele esta na linha %d e coluna %d.\n", linha_maior, coluna_maior);

    return 0;
}
```

### Exercício 5: Matriz Transposta
Desenvolva um programa que leia uma matriz 3x4. Crie e imprima a matriz transposta (uma matriz 4x3 onde as linhas da original se tornam as colunas da nova).

### Exercício 5: Matriz Transposta
```c
#include <stdio.h>

#define LIN_A 3
#define COL_A 4

int main() {
    int A[LIN_A][COL_A];
    int B[COL_A][LIN_A]; // Matriz transposta
    int i, j;

    printf("Digite os valores da matriz %dx%d:\n", LIN_A, COL_A);
    for (i = 0; i < LIN_A; i++) {
        for (j = 0; j < COL_A; j++) {
            scanf("%d", &A[i][j]);
        }
    }

    // Gera a matriz transposta
    for (i = 0; i < LIN_A; i++) {
        for (j = 0; j < COL_A; j++) {
            B[j][i] = A[i][j];
        }
    }
    
    printf("\nMatriz Transposta (%dx%d):\n", COL_A, LIN_A);
    for (i = 0; i < COL_A; i++) {
        for (j = 0; j < LIN_A; j++) {
            printf("%d\t", B[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

### Exercício 6: Contar Valores Acima de um Limite
Escreva um programa que leia uma matriz 4x4. Depois, peça ao usuário para digitar um número `X`. O programa deve contar e exibir quantos valores na matriz são maiores que `X`.

### Exercício 6: Contar Valores Acima de um Limite
```c
#include <stdio.h>

#define ORDEM 4

int main() {
    int matriz[ORDEM][ORDEM];
    int i, j, x, contador = 0;

    printf("Digite os valores da matriz %dx%d:\n", ORDEM, ORDEM);
    for (i = 0; i < ORDEM; i++) {
        for (j = 0; j < ORDEM; j++) {
            scanf("%d", &matriz[i][j]);
        }
    }
    
    printf("\nDigite um valor limite X: ");
    scanf("%d", &x);

    // Conta os valores maiores que X
    for (i = 0; i < ORDEM; i++) {
        for (j = 0; j < ORDEM; j++) {
            if (matriz[i][j] > x) {
                contador++;
            }
        }
    }
    
    printf("\nA matriz possui %d valores maiores que %d.\n", contador, x);
    
    return 0;
}
```

### Exercício 7: Verificar se uma Matriz é Simétrica
Uma matriz quadrada é dita simétrica se ela for igual à sua transposta (ou seja, `M[i][j] == M[j][i]` para todos os `i` e `j`). Crie um programa que leia uma matriz 3x3 e verifique se ela é simétrica, imprimindo "Sim" ou "Não".

### Exercício 7: Verificar se uma Matriz é Simétrica
```c
#include <stdio.h>

#define ORDEM 3

int main() {
    int matriz[ORDEM][ORDEM];
    int i, j, eh_simetrica = 1; // Flag, assume que é simétrica

    printf("Digite os valores da matriz %dx%d:\n", ORDEM, ORDEM);
    for (i = 0; i < ORDEM; i++) {
        for (j = 0; j < ORDEM; j++) {
            scanf("%d", &matriz[i][j]);
        }
    }

    // Verifica a simetria
    for (i = 0; i < ORDEM; i++) {
        for (j = 0; j < ORDEM; j++) {
            if (matriz[i][j] != matriz[j][i]) {
                eh_simetrica = 0; // Encontrou uma diferença, não é simétrica
                break; // Sai do laço interno
            }
        }
        if (!eh_simetrica) {
            break; // Sai do laço externo também
        }
    }
    
    if (eh_simetrica) {
        printf("\nA matriz e simetrica.\n");
    } else {
        printf("\nA matriz nao e simetrica.\n");
    }

    return 0;
}
```

### Exercício 8: Soma das Linhas e Colunas
Faça um programa que leia uma matriz 3x3. Crie dois vetores: um para armazenar a soma de cada linha e outro para armazenar a soma de cada coluna. Imprima os dois vetores.

### Exercício 8: Soma das Linhas e Colunas
```c
#include <stdio.h>

#define ORDEM 3

int main() {
    int matriz[ORDEM][ORDEM];
    int soma_linhas[ORDEM] = {0};
    int soma_colunas[ORDEM] = {0};
    int i, j;

    printf("Digite os valores da matriz %dx%d:\n", ORDEM, ORDEM);
    for (i = 0; i < ORDEM; i++) {
        for (j = 0; j < ORDEM; j++) {
            scanf("%d", &matriz[i][j]);
            soma_linhas[i] += matriz[i][j];
            soma_colunas[j] += matriz[i][j];
        }
    }
    
    printf("\nSoma das linhas:\n");
    for (i = 0; i < ORDEM; i++) {
        printf("Linha %d: %d\n", i, soma_linhas[i]);
    }
    
    printf("\nSoma das colunas:\n");
    for (j = 0; j < ORDEM; j++) {
        printf("Coluna %d: %d\n", j, soma_colunas[j]);
    }

    return 0;
}
```

### Exercício 9: "Jogo da Velha" - Verificação de Estado
Crie um programa que leia uma matriz 3x3 que representa um tabuleiro de Jogo da Velha. Os valores podem ser 1 (para o jogador 'X'), -1 (para o jogador 'O') ou 0 (para espaços vazios). O programa deve verificar e informar o estado do jogo: se o jogador 'X' venceu, se o jogador 'O' venceu, se houve empate ou se o jogo ainda não terminou.

### Exercício 9: "Jogo da Velha" - Verificação de Estado
```c
#include <stdio.h>

int main() {
    int tab[3][3], i, j;
    int vencedor = 0; // 0=ninguém, 1=X, -1=O
    int espacos_vazios = 0;

    printf("Digite o tabuleiro (1 para X, -1 para O, 0 para vazio):\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            scanf("%d", &tab[i][j]);
        }
    }

    // Verifica linhas e colunas
    for (i = 0; i < 3; i++) {
        if (tab[i][0] + tab[i][1] + tab[i][2] == 3) vencedor = 1; // Linha X
        if (tab[i][0] + tab[i][1] + tab[i][2] == -3) vencedor = -1; // Linha O
        if (tab[0][i] + tab[1][i] + tab[2][i] == 3) vencedor = 1; // Coluna X
        if (tab[0][i] + tab[1][i] + tab[2][i] == -3) vencedor = -1; // Coluna O
    }
    
    // Verifica diagonais
    if (tab[0][0] + tab[1][1] + tab[2][2] == 3) vencedor = 1;
    if (tab[0][0] + tab[1][1] + tab[2][2] == -3) vencedor = -1;
    if (tab[0][2] + tab[1][1] + tab[2][0] == 3) vencedor = 1;
    if (tab[0][2] + tab[1][1] + tab[2][0] == -3) vencedor = -1;

    if (vencedor == 1) {
        printf("Jogador 'X' venceu!\n");
    } else if (vencedor == -1) {
        printf("Jogador 'O' venceu!\n");
    } else {
        // Se não há vencedor, verifica se há empate ou se o jogo continua
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                if (tab[i][j] == 0) espacos_vazios++;
            }
        }
        if (espacos_vazios == 0) {
            printf("Empate!\n");
        } else {
            printf("O jogo ainda nao terminou.\n");
        }
    }

    return 0;
}
```

### Exercício 10: Multiplicação de Matrizes
Este é um clássico. Crie um programa que leia duas matrizes, `A` (2x3) e `B` (3x2), e calcule a matriz produto `C` (que será 2x2). Imprima a matriz resultante.
*Lembrete: O elemento `C[i][j]` é a soma dos produtos dos elementos da linha `i` de `A` pelos elementos da coluna `j` de `B`.*

### Exercício 10: Multiplicação de Matrizes
```c
#include <stdio.h>

// Dimensões: A(m x n), B(n x p) -> C(m x p)
#define M 2 // Linhas de A e C
#define N 3 // Colunas de A e Linhas de B
#define P 2 // Colunas de B e C

int main() {
    int A[M][N], B[N][P], C[M][P];
    int i, j, k;

    printf("Digite os valores da Matriz A (%dx%d):\n", M, N);
    for (i = 0; i < M; i++) {
        for (j = 0; j < N; j++) {
            scanf("%d", &A[i][j]);
        }
    }

    printf("Digite os valores da Matriz B (%dx%d):\n", N, P);
    for (i = 0; i < N; i++) {
        for (j = 0; j < P; j++) {
            scanf("%d", &B[i][j]);
        }
    }

    // Calcula a matriz produto C
    for (i = 0; i < M; i++) {
        for (j = 0; j < P; j++) {
            C[i][j] = 0; // Inicializa o elemento da matriz produto
            for (k = 0; k < N; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    printf("\nMatriz Produto C (%dx%d):\n", M, P);
    for (i = 0; i < M; i++) {
        for (j = 0; j < P; j++) {
            printf("%d\t", C[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

---

## Exercícios focados em Strings

### Exercício 1: Contagem de Caracteres
Escreva uma função que receba uma string como parâmetro e retorne o número de caracteres que ela contém. **Desafio:** não utilize a função `strlen()` da biblioteca `<string.h>`. Você deve percorrer o vetor de caracteres até encontrar o caractere nulo (`\0`).

### Exercício 1: Contagem de Caracteres
```c
#include <stdio.h>

// Função que conta os caracteres de uma string sem usar strlen()
int contar_caracteres(const char *str) {
    int contador = 0;
    // Percorre a string até encontrar o caractere nulo '\0'
    while (str[contador] != '\0') {
        contador++;
    }
    return contador;
}

void remover_nova_linha(char *str) {
    int i = 0;
    while(str[i] != '\n' && str[i] != '\0') i++;
    if (str[i] == '\n') str[i] = '\0';
}

int main() {
    char minha_string[100];

    printf("Digite uma string: ");
    fgets(minha_string, 100, stdin);
    remover_nova_linha(minha_string);

    int tamanho = contar_caracteres(minha_string);
    printf("A string \"%s\" possui %d caracteres.\n", minha_string, tamanho);

    return 0;
}
```

### Exercício 2: Comparação de Strings
Crie um programa que leia duas strings do teclado. Usando a função `strcmp()`, determine e informe se as strings são iguais. Se não forem, informe qual delas vem primeiro na ordem alfabética.

### Exercício 2: Comparação de Strings
```c
#include <stdio.h>
#include <string.h>

void remover_nova_linha(char *str) {
    str[strcspn(str, "\n")] = '\0';
}

int main() {
    char str1[100], str2[100];
    
    printf("Digite a primeira string: ");
    fgets(str1, 100, stdin);
    remover_nova_linha(str1);

    printf("Digite a segunda string: ");
    fgets(str2, 100, stdin);
    remover_nova_linha(str2);

    int resultado = strcmp(str1, str2);

    if (resultado == 0) {
        printf("As strings sao iguais.\n");
    } else if (resultado < 0) {
        printf("A primeira string (\"%s\") vem antes na ordem alfabetica.\n", str1);
    } else {
        printf("A segunda string (\"%s\") vem antes na ordem alfabetica.\n", str2);
    }

    return 0;
}
```

### Exercício 3: Concatenar Duas Strings
Faça um programa que leia duas strings e, em seguida, crie uma terceira string que seja a concatenação das duas primeiras. Por exemplo, se as strings lidas forem "bom" e "dia", a nova string deverá ser "bomdia". **Desafio:** implemente a lógica de concatenação manualmente, sem usar a função `strcat()`.

### Exercício 3: Concatenar Duas Strings
```c
#include <stdio.h>
#include <string.h>

void remover_nova_linha(char *str) {
    str[strcspn(str, "\n")] = '\0';
}

int main() {
    char str1[100], str2[100];
    char resultado[200]; // Deve ter tamanho suficiente para as duas
    int i = 0, j = 0;

    printf("Digite a primeira string: ");
    fgets(str1, 100, stdin);
    remover_nova_linha(str1);

    printf("Digite a segunda string: ");
    fgets(str2, 100, stdin);
    remover_nova_linha(str2);

    // Copia a primeira string para o resultado
    while (str1[i] != '\0') {
        resultado[i] = str1[i];
        i++;
    }

    // Copia a segunda string para o final do resultado
    while (str2[j] != '\0') {
        resultado[i] = str2[j];
        i++;
        j++;
    }
    
    // Adiciona o caractere nulo para finalizar a string
    resultado[i] = '\0';

    printf("String concatenada: %s\n", resultado);

    return 0;
}
```

### Exercício 4: Inverter uma String
Desenvolva um programa que leia uma string e a inverta. Por exemplo, se a string for "programar", o programa deve gerar a string "ramargorp". Você pode criar uma nova string para armazenar o resultado invertido.

### Exercício 4: Inverter uma String
```c
#include <stdio.h>
#include <string.h>

void remover_nova_linha(char *str) {
    str[strcspn(str, "\n")] = '\0';
}

int main() {
    char original[100];
    char invertida[100];
    int i, j;
    int tamanho;

    printf("Digite uma string para inverter: ");
    fgets(original, 100, stdin);
    remover_nova_linha(original);

    tamanho = strlen(original);
    j = 0;

    // Percorre a string original de trás para frente
    for (i = tamanho - 1; i >= 0; i--) {
        invertida[j] = original[i];
        j++;
    }
    
    // Adiciona o caractere nulo no final da string invertida
    invertida[j] = '\0';
    
    printf("String original: %s\n", original);
    printf("String invertida: %s\n", invertida);

    return 0;
}
```

### Exercício 5: Contar Vogais e Consoantes
Escreva um programa que leia uma string e conte quantas vogais e quantas consoantes (letras do alfabeto que não são vogais) ela possui. Imprima os dois totais.

### Exercício 5: Contar Vogais e Consoantes
```c
#include <stdio.h>
#include <ctype.h> // Para isalpha() e tolower()

void remover_nova_linha(char *str) {
    str[strcspn(str, "\n")] = '\0';
}

int main() {
    char str[100];
    int i = 0;
    int vogais = 0, consoantes = 0;

    printf("Digite uma frase: ");
    fgets(str, 100, stdin);
    remover_nova_linha(str);

    while (str[i] != '\0') {
        char c = tolower(str[i]); // Converte para minúscula para facilitar

        if (isalpha(c)) { // Verifica se é uma letra
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                vogais++;
            } else {
                consoantes++;
            }
        }
        i++;
    }

    printf("A frase contem %d vogais e %d consoantes.\n", vogais, consoantes);

    return 0;
}
```

### Exercício 6: Converter para Maiúsculas
Crie um programa que leia uma string e a converta inteiramente para letras maiúsculas. Utilize a função `toupper()` da biblioteca `<ctype.h>`. Imprima a string resultante.

### Exercício 6: Converter para Maiúsculas
```c
#include <stdio.h>
#include <ctype.h> // Para toupper()

void remover_nova_linha(char *str) {
    str[strcspn(str, "\n")] = '\0';
}

int main() {
    char str[100];
    int i = 0;

    printf("Digite uma string com letras minusculas e maiusculas: ");
    fgets(str, 100, stdin);
    remover_nova_linha(str);

    while(str[i] != '\0') {
        str[i] = toupper(str[i]);
        i++;
    }

    printf("String em maiusculas: %s\n", str);

    return 0;
}
```

### Exercício 7: Verificar se é um Palíndromo
Um palíndromo é uma palavra ou frase que se lê da mesma forma de trás para frente (desconsiderando espaços e acentos). Crie um programa que leia uma string e verifique se ela é um palíndromo. Exemplos: "arara", "ovo", "radar".

### Exercício 7: Verificar se é um Palíndromo
```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

void remover_nova_linha(char *str) {
    str[strcspn(str, "\n")] = '\0';
}

int main() {
    char str[100];
    int i, j, eh_palindromo = 1;
    int tamanho;

    printf("Digite uma palavra para verificar se e um palindromo: ");
    fgets(str, 100, stdin);
    remover_nova_linha(str);

    tamanho = strlen(str);
    i = 0;
    j = tamanho - 1;

    while (i < j) {
        // Ignora espaços (opcional, para frases)
        while (str[i] == ' ') i++;
        while (str[j] == ' ') j--;

        if (tolower(str[i]) != tolower(str[j])) {
            eh_palindromo = 0; // Não é palíndromo
            break;
        }
        i++;
        j--;
    }

    if (eh_palindromo) {
        printf("A string \"%s\" e um palindromo.\n", str);
    } else {
        printf("A string \"%s\" nao e um palindromo.\n", str);
    }

    return 0;
}
```

### Exercício 8: Remover Espaços Repetidos
Faça um programa que leia uma frase e crie uma nova string removendo os espaços em branco extras entre as palavras. Por exemplo, se a entrada for "Eu   gosto   de   programar", a saída deve ser "Eu gosto de programar".

### Exercício 8: Remover Espaços Repetidos
```c
#include <stdio.h>
#include <string.h>

void remover_nova_linha(char *str) {
    str[strcspn(str, "\n")] = '\0';
}

int main() {
    char original[200], limpa[200];
    int i = 0, j = 0;

    printf("Digite uma frase com espacos extras: ");
    fgets(original, 200, stdin);
    remover_nova_linha(original);

    while (original[i] != '\0') {
        // Copia o caractere se não for um espaço
        if (original[i] != ' ') {
            limpa[j++] = original[i];
        } else {
            // Se for um espaço, só copia se o caractere anterior na string limpa não for um espaço
            if (j > 0 && limpa[j-1] != ' ') {
                limpa[j++] = original[i];
            }
        }
        i++;
    }
    limpa[j] = '\0'; // Finaliza a string limpa
    
    printf("String original: \"%s\"\n", original);
    printf("String limpa:    \"%s\"\n", limpa);

    return 0;
}
```

### Exercício 9: Contar Palavras
Escreva um programa que leia uma frase e conte quantas palavras ela contém. Considere que as palavras são separadas por um ou mais espaços em branco.

### Exercício 9: Contar Palavras
```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

void remover_nova_linha(char *str) {
    str[strcspn(str, "\n")] = '\0';
}

int main() {
    char frase[200];
    int i = 0;
    int contador_palavras = 0;
    int no_meio_de_uma_palavra = 0; // Flag: 0 = não, 1 = sim

    printf("Digite uma frase para contar as palavras: ");
    fgets(frase, 200, stdin);
    remover_nova_linha(frase);

    while (frase[i] != '\0') {
        // Se o caractere não é um espaço e estamos fora de uma palavra
        if (!isspace(frase[i]) && no_meio_de_uma_palavra == 0) {
            contador_palavras++;
            no_meio_de_uma_palavra = 1;
        } 
        // Se o caractere é um espaço
        else if (isspace(frase[i])) {
            no_meio_de_uma_palavra = 0;
        }
        i++;
    }

    printf("A frase contem %d palavras.\n", contador_palavras);

    return 0;
}
```

### Exercício 10: Substituir um Caractere
Crie um programa que leia uma string, um caractere a ser procurado e um caractere a ser inserido no lugar do primeiro. O programa deve substituir todas as ocorrências do caractere procurado pelo novo caractere. Exemplo: na string "banana", substituir 'a' por 'o' resultaria em "bonono".

### Exercício 10: Substituir um Caractere
```c
#include <stdio.h>
#include <string.h>

void remover_nova_linha(char *str) {
    str[strcspn(str, "\n")] = '\0';
}

int main() {
    char str[100];
    char char_procurado, char_substituto;
    int i = 0;

    printf("Digite uma string: ");
    fgets(str, 100, stdin);
    remover_nova_linha(str);

    printf("Digite o caractere a ser procurado: ");
    scanf(" %c", &char_procurado);

    printf("Digite o caractere que ira substitui-lo: ");
    scanf(" %c", &char_substituto);

    while (str[i] != '\0') {
        if (str[i] == char_procurado) {
            str[i] = char_substituto;
        }
        i++;
    }

    printf("String resultante: %s\n", str);

    return 0;
}
```

---

## Exercícios focados em Ponteiros

### Exercício 1: Básico de Ponteiros
Declare uma variável do tipo `int`. Em seguida, declare um ponteiro para `int`. Atribua o endereço da variável ao ponteiro. Imprima na tela:
a) O valor da variável.
b) O endereço da variável.
c) O valor armazenado no ponteiro (que deve ser o endereço da variável).
d) O valor da variável acessado através do ponteiro (usando o operador de dereferenciação `*`).

### Exercício 1: Básico de Ponteiros
```c
#include <stdio.h>

int main() {
    int variavel = 42;
    int *ponteiro;

    // Atribui o endereço da variável ao ponteiro
    ponteiro = &variavel;

    printf("a) Valor da variavel: %d\n", variavel);
    printf("b) Endereco da variavel: %p\n", &variavel);
    printf("c) Valor armazenado no ponteiro: %p\n", ponteiro);
    printf("d) Valor acessado pelo ponteiro: %d\n", *ponteiro);

    return 0;
}
```

### Exercício 2: Alterando Variáveis com Ponteiros
Escreva um programa que declare uma variável `int` com um valor inicial. Crie um ponteiro que aponte para essa variável. Usando apenas o ponteiro, altere o valor da variável original. Imprima o valor da variável antes e depois da alteração para confirmar que funcionou.

### Exercício 2: Alterando Variáveis com Ponteiros
```c
#include <stdio.h>

int main() {
    int numero = 10;
    int *ptr_numero;

    ptr_numero = &numero;

    printf("Valor da variavel antes da alteracao: %d\n", numero);

    // Altera o valor da variável 'numero' usando o ponteiro
    *ptr_numero = 25;

    printf("Valor da variavel depois da alteracao: %d\n", numero);

    return 0;
}
```

### Exercício 3: Trocando Valores com Função e Ponteiros (Swap)
Crie uma função chamada `troca` que receba como parâmetros dois ponteiros para inteiros. A função deve trocar os valores das variáveis para as quais os ponteiros apontam. Na sua função `main`, declare duas variáveis, chame a função `troca` passando os seus endereços e, por fim, imprima os valores para verificar a troca.

### Exercício 3: Trocando Valores com Função e Ponteiros (Swap)
```c
#include <stdio.h>

void troca(int *ptr_a, int *ptr_b) {
    int temp = *ptr_a; // Armazena o valor de 'a'
    *ptr_a = *ptr_b;   // 'a' recebe o valor de 'b'
    *ptr_b = temp;     // 'b' recebe o valor armazenado de 'a'
}

int main() {
    int x = 100;
    int y = 200;

    printf("Valores antes da troca: x = %d, y = %d\n", x, y);

    // Passa os endereços de x e y para a função
    troca(&x, &y);

    printf("Valores depois da troca: x = %d, y = %d\n", x, y);

    return 0;
}
```

### Exercício 4: Ponteiros como Parâmetros de Saída
Escreva uma função que receba dois números inteiros e dois ponteiros para `int`. A função deve calcular a soma e a subtração dos dois números e armazenar os resultados nos endereços de memória apontados pelos ponteiros. Na `main`, chame a função e imprima os resultados da soma e da subtração.

### Exercício 4: Ponteiros como Parâmetros de Saída
```c
#include <stdio.h>

void calcular(int num1, int num2, int *resultado_soma, int *resultado_sub) {
    *resultado_soma = num1 + num2;
    *resultado_sub = num1 - num2;
}

int main() {
    int a = 20;
    int b = 8;
    int soma, subtracao;

    // Passa os endereços de 'soma' e 'subtracao' para a função
    calcular(a, b, &soma, &subtracao);

    printf("A soma de %d e %d e: %d\n", a, b, soma);
    printf("A subtracao de %d e %d e: %d\n", a, b, subtracao);

    return 0;
}
```

### Exercício 5: Percorrendo um Vetor com Ponteiros
Declare um vetor de 5 números inteiros. Crie um ponteiro que aponte para o primeiro elemento do vetor. Usando aritmética de ponteiros (incrementando o ponteiro), percorra o vetor e imprima cada um de seus elementos, sem usar o operador de colchetes `[]`.

### Exercício 5: Percorrendo um Vetor com Ponteiros
```c
#include <stdio.h>

#define TAMANHO 5

int main() {
    int vetor[TAMANHO] = {10, 20, 30, 40, 50};
    int *ptr_vetor;
    int i;

    // O ponteiro aponta para o início do vetor
    ptr_vetor = vetor;

    printf("Imprimindo o vetor usando ponteiro:\n");
    for (i = 0; i < TAMANHO; i++) {
        // Imprime o valor para o qual o ponteiro aponta e depois incrementa o ponteiro
        printf("%d ", *ptr_vetor);
        ptr_vetor++;
    }
    printf("\n");

    return 0;
}
```

### Exercício 6: Ponteiros e Strings
Crie uma função que receba uma string (um ponteiro para `char`) e conte o número de vogais nela. Use um ponteiro para percorrer a string.

### Exercício 6: Ponteiros e Strings
```c
#include <stdio.h>
#include <ctype.h> // Para a função tolower()

int contar_vogais(char *str) {
    int contador = 0;
    while (*str != '\0') { // Enquanto não chegar ao fim da string
        char c = tolower(*str); // Converte para minúscula
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            contador++;
        }
        str++; // Move o ponteiro para o próximo caractere
    }
    return contador;
}

int main() {
    char minha_string[] = "Linguagem C e Ponteiros";
    int num_vogais = contar_vogais(minha_string);
    printf("A string \"%s\" tem %d vogais.\n", minha_string, num_vogais);
    return 0;
}
```

### Exercício 7: Alocação Dinâmica para um Vetor
Escreva um programa que pergunte ao usuário o tamanho de um vetor. Em seguida, use `malloc` para alocar dinamicamente um vetor de `float` com o tamanho informado. Peça ao usuário para preencher o vetor, calcule a média dos valores e, por fim, libere a memória alocada com `free`.

### Exercício 7: Alocação Dinâmica para um Vetor
```c
#include <stdio.h>
#include <stdlib.h> // Para malloc() e free()

int main() {
    int tamanho;
    float *vetor;
    float soma = 0.0, media;
    int i;

    printf("Digite o tamanho do vetor: ");
    scanf("%d", &tamanho);

    // Aloca memória para o vetor de floats
    vetor = (float*) malloc(tamanho * sizeof(float));

    // Verifica se a alocação foi bem-sucedida
    if (vetor == NULL) {
        printf("Erro na alocacao de memoria!\n");
        return 1; // Termina o programa com erro
    }

    printf("Digite os %d valores do vetor:\n", tamanho);
    for (i = 0; i < tamanho; i++) {
        scanf("%f", &vetor[i]);
        soma += vetor[i];
    }

    media = soma / tamanho;
    printf("A media dos valores e: %.2f\n", media);

    // Libera a memória que foi alocada
    free(vetor);
    vetor = NULL; // Boa prática: anular o ponteiro após liberar

    return 0;
}
```

### Exercício 8: Encontrando um Endereço
Crie uma função que receba um vetor de inteiros, seu tamanho e um valor a ser procurado. A função deve retornar um *ponteiro* para a primeira ocorrência do valor no vetor. Se o valor não for encontrado, a função deve retornar `NULL`. Na `main`, teste a função e, se o retorno não for `NULL`, imprima o valor encontrado usando o ponteiro retornado.


### Exercício 8: Encontrando um Endereço
```c
#include <stdio.h>

#define TAMANHO 8

int* encontrar_valor(int *vetor, int tamanho, int valor_procurado) {
    int i;
    for (i = 0; i < tamanho; i++) {
        if (vetor[i] == valor_procurado) {
            return &vetor[i]; // Retorna o endereço do elemento encontrado
        }
    }
    return NULL; // Retorna NULL se não encontrar
}

int main() {
    int numeros[TAMANHO] = {2, 4, 6, 8, 10, 12, 14, 16};
    int valor_para_buscar = 10;
    int *ponteiro_resultado;

    ponteiro_resultado = encontrar_valor(numeros, TAMANHO, valor_para_buscar);

    if (ponteiro_resultado != NULL) {
        printf("Valor %d encontrado no endereco %p.\n", valor_para_buscar, ponteiro_resultado);
        printf("O valor encontrado e: %d\n", *ponteiro_resultado);
    } else {
        printf("Valor %d nao encontrado no vetor.\n", valor_para_buscar);
    }

    return 0;
}
```

### Exercício 9: Ponteiro para Ponteiro (Indireção Dupla)
Declare uma variável, um ponteiro para essa variável e um ponteiro para o ponteiro. Atribua os endereços corretamente. Use o ponteiro para ponteiro para alterar o valor da variável original e imprima o resultado para confirmar a alteração.

### Exercício 9: Ponteiro para Ponteiro (Indireção Dupla)
```c
#include <stdio.h>

int main() {
    int x = 99;
    int *ptr = &x;
    int **pptr = &ptr;

    printf("Valor original de x: %d\n", x);
    
    // Alterando o valor de x usando o ponteiro para ponteiro
    **pptr = 555;
    
    printf("Novo valor de x: %d\n", x);
    printf("Valor de x acessado via *ptr: %d\n", *ptr);
    printf("Valor de x acessado via **pptr: %d\n", **pptr);
    
    return 0;
}
```

### Exercício 10: Vetor de Ponteiros para Strings
Crie um vetor de ponteiros para `char` (um vetor de strings). Inicialize-o com os nomes de 5 frutas. Crie uma função que receba este vetor de ponteiros e seu tamanho, e imprima todas as strings.

### Exercício 10: Vetor de Ponteiros para Strings
```c
#include <stdio.h>

#define NUM_FRUTAS 5

void imprimir_strings(const char *vetor_de_ponteiros[], int tamanho) {
    int i;
    printf("Lista de Frutas:\n");
    for (i = 0; i < tamanho; i++) {
        printf("- %s\n", vetor_de_ponteiros[i]);
    }
}

int main() {
    // Cada elemento do vetor é um ponteiro que aponta para o início de uma string literal
    const char *frutas[NUM_FRUTAS] = {
        "Maca",
        "Banana",
        "Uva",
        "Pera",
        "Laranja"
    };

    imprimir_strings(frutas, NUM_FRUTAS);

    return 0;
}
```

---

## Exercícios focados em Funções

### Exercício 1: Somar Elementos de um Vetor (com Aritmética)
Crie uma função `int somarVetor(int *vetor, int tamanho)` que receba um ponteiro para o início de um vetor de inteiros e seu tamanho. Dentro da função, use um laço e aritmética de ponteiros (ex: `*vetor` e `vetor++`) para percorrer o vetor e somar todos os seus elementos. A função deve retornar a soma total.

### Exercício 1: Somar Elementos de um Vetor (com Aritmética)
```c
#include <stdio.h>

int somarVetor(int *vetor, int tamanho) {
    int soma = 0;
    int *ponteiro_final = vetor + tamanho; // Aponta para uma posição após o último elemento

    // O laço continua enquanto o ponteiro do vetor não alcançar o ponteiro final
    while (vetor < ponteiro_final) {
        soma += *vetor; // Soma o valor apontado pelo ponteiro
        vetor++;        // Avança o ponteiro para o próximo elemento
    }
    return soma;
}

int main() {
    int numeros[] = {10, 20, 30, 40, 50};
    int tamanho = sizeof(numeros) / sizeof(numeros[0]);
    int resultado = somarVetor(numeros, tamanho);

    printf("A soma dos elementos do vetor e: %d\n", resultado);

    return 0;
}
```

### Exercício 2: Inverter um Vetor "In-Place"
Desenvolva uma função `void inverterVetor(int *vetor, int tamanho)` que inverte a ordem dos elementos do próprio vetor que foi passado como parâmetro. Para isso, crie dois ponteiros: um apontando para o início (`inicio`) e outro para o fim (`fim`) do vetor. Em um laço, troque os valores para os quais eles apontam e avance o ponteiro `inicio` e recue o ponteiro `fim` até que eles se cruzem.

### Exercício 2: Inverter um Vetor "In-Place"
```c
#include <stdio.h>

void inverterVetor(int *vetor, int tamanho) {
    int *inicio = vetor;
    int *fim = vetor + tamanho - 1; // Ponteiro para o último elemento
    int temp;

    while (inicio < fim) {
        // Troca os valores
        temp = *inicio;
        *inicio = *fim;
        *fim = temp;

        // Move os ponteiros
        inicio++;
        fim--;
    }
}

int main() {
    int numeros[] = {1, 2, 3, 4, 5, 6, 7};
    int tamanho = sizeof(numeros) / sizeof(numeros[0]);
    int i;

    printf("Vetor original: ");
    for(i = 0; i < tamanho; i++) printf("%d ", numeros[i]);
    printf("\n");

    inverterVetor(numeros, tamanho);

    printf("Vetor invertido: ");
    for(i = 0; i < tamanho; i++) printf("%d ", numeros[i]);
    printf("\n");

    return 0;
}
```

### Exercício 3: Encontrar o Maior Elemento e Retornar seu Endereço
Faça uma função `int* encontrarMaior(int *vetor, int tamanho)` que receba um ponteiro para um vetor e seu tamanho. A função deve percorrer o vetor usando aritmética de ponteiros e retornar um *ponteiro* para o maior elemento encontrado. Na `main`, chame a função e use o ponteiro retornado para imprimir tanto o endereço quanto o valor do maior elemento.

### Exercício 3: Encontrar o Maior Elemento e Retornar seu Endereço
```c
#include <stdio.h>

int* encontrarMaior(int *vetor, int tamanho) {
    if (tamanho <= 0) {
        return NULL; // Retorna nulo se o vetor for vazio
    }

    int *ptr_maior = vetor; // Assume que o primeiro é o maior
    int i;

    for (i = 1; i < tamanho; i++) {
        // Compara o valor do elemento atual com o valor do maior encontrado
        if (*(vetor + i) > *ptr_maior) {
            ptr_maior = vetor + i; // Atualiza o ponteiro para o novo maior
        }
    }
    return ptr_maior;
}

int main() {
    int numeros[] = {15, 98, 23, 54, 71, 6};
    int tamanho = sizeof(numeros) / sizeof(numeros[0]);
    int *ponteiro_maior = encontrarMaior(numeros, tamanho);

    if (ponteiro_maior != NULL) {
        printf("O maior valor e %d e esta no endereco de memoria %p\n", *ponteiro_maior, ponteiro_maior);
    } else {
        printf("Vetor vazio.\n");
    }

    return 0;
}
```

### Exercício 4: Copiar uma String Usando Ponteiros
Crie uma função `void copiarString(char *destino, char *origem)`. A função deve copiar o conteúdo da string de `origem` para a string de `destino`. A implementação deve usar um laço `while` que continua enquanto o caractere de origem (acessado via `*origem`) não for o nulo (`\0`), copiando e incrementando ambos os ponteiros a cada iteração.

### Exercício 4: Copiar uma String Usando Ponteiros
```c
#include <stdio.h>

void copiarString(char *destino, char *origem) {
    // Esta é uma forma idiomática em C para copiar strings.
    // O laço copia o caractere e avança os ponteiros.
    // A condição do while é o próprio valor copiado, que será 0 (falso) no caractere nulo.
    while ((*destino++ = *origem++));
}

int main() {
    char string_origem[] = "Teste com ponteiros!";
    char string_destino[50]; // Espaço suficiente para a cópia

    copiarString(string_destino, string_origem);

    printf("String de origem: %s\n", string_origem);
    printf("String de destino: %s\n", string_destino);

    return 0;
}
```

### Exercício 5: Dividir um Vetor em Pares e Ímpares
Escreva uma função `void separarParesImpares(int *original, int tam, int *pares, int *tam_p, int *impares, int *tam_i)`. A função recebe um vetor original e seu tamanho, e ponteiros para outros dois vetores (um para pares, outro para ímpares). Ela também recebe ponteiros para os tamanhos dos vetores de pares e ímpares, que devem ser atualizados pela função. Percorra o vetor original com um ponteiro e, para cada número, coloque-o no vetor de pares ou ímpares usando os respectivos ponteiros e atualize o contador de tamanho correspondente.

### Exercício 5: Dividir um Vetor em Pares e Ímpares
```c
#include <stdio.h>

void separarParesImpares(int *original, int tam, int *pares, int *tam_p, int *impares, int *tam_i) {
    *tam_p = 0; // Zera o tamanho do vetor de pares
    *tam_i = 0; // Zera o tamanho do vetor de ímpares
    int i;
    for(i = 0; i < tam; i++) {
        if (*(original + i) % 2 == 0) {
            *(pares + *tam_p) = *(original + i);
            (*tam_p)++;
        } else {
            *(impares + *tam_i) = *(original + i);
            (*tam_i)++;
        }
    }
}

int main() {
    int original[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int tam_original = 10;
    int pares[10], impares[10];
    int tam_pares, tam_impares;
    int i;

    separarParesImpares(original, tam_original, pares, &tam_pares, impares, &tam_impares);

    printf("Pares (%d): ", tam_pares);
    for(i = 0; i < tam_pares; i++) printf("%d ", *(pares + i));
    printf("\n");

    printf("Impares (%d): ", tam_impares);
    for(i = 0; i < tam_impares; i++) printf("%d ", *(impares + i));
    printf("\n");

    return 0;
}
```

### Exercício 6: Preencher Vetor e Retornar Ponteiro para o Meio
Crie uma função `int* preencherVetor(int *vetor, int tamanho)` que preencha um vetor com os `tamanho` primeiros múltiplos de 5. A função deve usar aritmética de ponteiros para preencher os valores. Ao final, a função deve retornar um ponteiro para o elemento que está exatamente no meio do vetor. Se o tamanho for par, pode ser o primeiro elemento da segunda metade.

### Exercício 6: Preencher Vetor e Retornar Ponteiro para o Meio
```c
#include <stdio.h>

int* preencherVetor(int *vetor, int tamanho) {
    int i;
    for (i = 0; i < tamanho; i++) {
        *(vetor + i) = (i + 1) * 5;
    }
    return vetor + (tamanho / 2); // Retorna o endereço do elemento do meio
}

int main() {
    int numeros[9];
    int tamanho = 9;
    int *ptr_meio;
    int i;

    ptr_meio = preencherVetor(numeros, tamanho);

    printf("Vetor preenchido: ");
    for(i = 0; i < tamanho; i++) printf("%d ", numeros[i]);
    printf("\n");
    
    printf("O ponteiro do meio aponta para o endereco %p.\n", ptr_meio);
    printf("O valor do elemento do meio e: %d\n", *ptr_meio);

    return 0;
}
```

### Exercício 7: Concatenar Duas Strings Manualmente
Desenvolva uma função `void concatenarStrings(char *str1, char *str2)` que anexa a `str2` ao final da `str1`. Primeiro, use aritmética de ponteiros para mover um ponteiro até o final da `str1` (o caractere `\0`). Depois, use outro laço para copiar os caracteres de `str2` (a partir de onde o ponteiro da `str1` parou), também usando ponteiros. Assuma que `str1` tem espaço suficiente.

### Exercício 7: Concatenar Duas Strings Manualmente
```c
#include <stdio.h>

void concatenarStrings(char *str1, char *str2) {
    // 1. Move o ponteiro str1 até o final da string
    while (*str1 != '\0') {
        str1++;
    }
    // 2. Copia str2 para o final de str1
    while ((*str1++ = *str2++));
}

int main() {
    char parte1[100] = "Programando em C ";
    char parte2[] = "e divertido!";

    concatenarStrings(parte1, parte2);

    printf("String resultante: %s\n", parte1);
    
    return 0;
}
```

### Exercício 8: "Aparar" Espaços de uma String
Crie uma função `void trim(char *str)` que remove os espaços em branco do início e do fim de uma string, modificando a própria string.
1.  Use um ponteiro (`inicio`) para avançar pelas posições iniciais enquanto encontrar espaços.
2.  Use outro ponteiro (`fim`) para recuar a partir do final da string enquanto encontrar espaços, substituindo-os por `\0`.
3.  Finalmente, mova o restante da string (a partir de `inicio`) para o começo da string original.

### Exercício 8: "Aparar" Espaços de uma String
```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

void trim(char *str) {
    char *inicio = str;
    char *fim;

    // Remove espaços do início
    while (isspace((unsigned char)*inicio)) {
        inicio++;
    }

    // Se a string for só de espaços ou vazia
    if (*inicio == '\0') {
        *str = '\0';
        return;
    }

    // Remove espaços do fim
    fim = str + strlen(str) - 1;
    while (fim > inicio && isspace((unsigned char)*fim)) {
        fim--;
    }

    // Finaliza a nova string
    *(fim + 1) = '\0';

    // Move o bloco de texto para o início da string original
    // memmove é seguro para sobreposição de memória
    if (str != inicio) {
        memmove(str, inicio, strlen(inicio) + 1);
    }
}

int main() {
    char minha_string[] = "   Ola mundo, com espacos!   ";
    printf("Original: |%s|\n", minha_string);
    trim(minha_string);
    printf("Aparada:  |%s|\n", minha_string);
    return 0;
}
```

### Exercício 9: Calcular Média e Desvio Padrão
Faça uma função `void calcularEstatisticas(double *dados, int tamanho, double *media, double *desvio_padrao)`. A função deve:
1.  Percorrer o vetor `dados` com um ponteiro para calcular a `*media`.
2.  Percorrer o vetor uma segunda vez para calcular a soma dos quadrados das diferenças entre cada elemento e a média. O desvio padrão será a raiz quadrada dessa soma dividida pelo tamanho. Armazene o resultado em `*desvio_padrao`.

### Exercício 9: Calcular Média e Desvio Padrão
```c
#include <stdio.h>
#include <math.h> // Para sqrt() e pow()

void calcularEstatisticas(double *dados, int tamanho, double *media, double *desvio_padrao) {
    if (tamanho <= 0) return;

    double soma = 0.0;
    double soma_quadrados_diff = 0.0;
    double *ptr;
    
    // 1. Calcula a média
    for (ptr = dados; ptr < dados + tamanho; ptr++) {
        soma += *ptr;
    }
    *media = soma / tamanho;
    
    // 2. Calcula a soma dos quadrados das diferenças
    for (ptr = dados; ptr < dados + tamanho; ptr++) {
        soma_quadrados_diff += pow(*ptr - *media, 2);
    }
    
    // Calcula o desvio padrão
    *desvio_padrao = sqrt(soma_quadrados_diff / tamanho);
}

int main() {
    double amostra[] = {12.5, 15.3, 13.0, 14.8, 16.1, 15.5};
    int tam = 6;
    double media_res, dp_res;
    
    calcularEstatisticas(amostra, tam, &media_res, &dp_res);
    
    printf("Para os dados, a media e: %.2f\n", media_res);
    printf("E o desvio padrao e: %.2f\n", dp_res);

    return 0;
}
```

### Exercício 10: Encontrar o Ponto de Soma Mínima em um Vetor
Escreva uma função `int* encontrarPontoSomaMinima(int *vetor, int tamanho)` que encontre o "ponto de divisão" em um vetor onde a diferença absoluta entre a soma dos elementos à esquerda e a soma dos elementos à direita é a menor possível. A função deve retornar um ponteiro para o elemento que representa esse ponto de divisão. Use ponteiros para calcular as somas de forma eficiente à medida que percorre o vetor.

### Exercício 10: Encontrar o Ponto de Soma Mínima em um Vetor
```c
#include <stdio.h>
#include <stdlib.h> // Para abs()
#include <limits.h> // Para INT_MAX

int* encontrarPontoSomaMinima(int *vetor, int tamanho) {
    if (tamanho < 2) return NULL; // Não faz sentido para vetores pequenos

    long long soma_total = 0;
    int *ptr_atual;
    for(ptr_atual = vetor; ptr_atual < vetor + tamanho; ptr_atual++) {
        soma_total += *ptr_atual;
    }

    long long soma_esquerda = 0;
    long long soma_direita;
    int diff_minima = INT_MAX;
    int *ponto_otimo = NULL;
    
    // Itera até o penúltimo elemento, pois o último não pode ser um ponto de divisão
    for(ptr_atual = vetor; ptr_atual < vetor + tamanho - 1; ptr_atual++) {
        soma_esquerda += *ptr_atual;
        soma_direita = soma_total - soma_esquerda;
        int diff_atual = abs(soma_esquerda - soma_direita);

        if(diff_atual < diff_minima) {
            diff_minima = diff_atual;
            ponto_otimo = ptr_atual;
        }
    }
    return ponto_otimo;
}

int main() {
    int numeros[] = {3, 1, 4, 1, 5, 9, 2, 6}; // Soma total = 31
    int tamanho = 8;
    int *ponto = encontrarPontoSomaMinima(numeros, tamanho);

    if(ponto != NULL) {
        printf("O ponto de divisao otimo e o elemento de valor %d no endereco %p.\n", *ponto, ponto);
    }

    return 0;
}
```

---

## Exercícios focados em Alocação Dinâmica de Memória

### Exercício 1: Alocando um Vetor Simples (`malloc`)
Escreva um programa que pergunte ao usuário o número de elementos que ele deseja em um vetor de inteiros. Use `malloc` para alocar dinamicamente a quantidade de memória necessária. Preencha o vetor com valores (por exemplo, o índice de cada posição) e, em seguida, imprima o vetor. Não se esqueça de liberar a memória com `free` no final.

### Exercício 1: Alocando um Vetor Simples (`malloc`)
```c
#include <stdio.h>
#include <stdlib.h> // Necessário para malloc() e free()

int main() {
    int tamanho;
    int *vetor;
    int i;

    printf("Digite o tamanho do vetor: ");
    scanf("%d", &tamanho);

    // Aloca memória para 'tamanho' inteiros
    vetor = (int*) malloc(tamanho * sizeof(int));

    // Verifica se a alocação de memória falhou
    if (vetor == NULL) {
        printf("Erro na alocacao de memoria!\n");
        return 1; // Encerra o programa com erro
    }

    // Preenche e imprime o vetor
    printf("Preenchendo e imprimindo o vetor:\n");
    for (i = 0; i < tamanho; i++) {
        vetor[i] = i * i; // Preenche com o quadrado do índice
        printf("vetor[%d] = %d\n", i, vetor[i]);
    }

    // Libera a memória alocada
    free(vetor);
    vetor = NULL; // Boa prática: anular ponteiro após free

    return 0;
}
```

### Exercício 2: Inicialização com `calloc`
Refaça o exercício anterior, mas desta vez utilize `calloc` para alocar a memória. Após a alocação e antes de preencher o vetor com seus próprios valores, imprima o conteúdo do vetor para verificar que `calloc` inicializou todos os elementos com zero. Depois, prossiga para preencher, imprimir e liberar a memória.

### Exercício 2: Inicialização com `calloc`
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int tamanho;
    int *vetor;
    int i;

    printf("Digite o tamanho do vetor: ");
    scanf("%d", &tamanho);

    // Aloca e zera a memória para 'tamanho' inteiros
    vetor = (int*) calloc(tamanho, sizeof(int));

    if (vetor == NULL) {
        printf("Erro na alocacao de memoria!\n");
        return 1;
    }

    printf("Vetor apos calloc (inicializado com zeros):\n");
    for (i = 0; i < tamanho; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n");

    printf("\nPreenchendo o vetor com novos valores:\n");
    for (i = 0; i < tamanho; i++) {
        vetor[i] = i + 1;
        printf("%d ", vetor[i]);
    }
    printf("\n");

    free(vetor);
    vetor = NULL;

    return 0;
}
```

### Exercício 3: Concatenando Strings Dinamicamente
Crie um programa que leia duas strings do usuário. Calcule o tamanho necessário para armazenar a concatenação das duas. Aloque dinamicamente um novo espaço de memória com esse tamanho (usando `malloc`) e copie o conteúdo das duas strings para este novo espaço, criando a string concatenada. Imprima o resultado e libere a memória.

### Exercício 3: Concatenando Strings Dinamicamente
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char str1[100], str2[100];
    char *resultado;
    
    printf("Digite a primeira string: ");
    fgets(str1, 100, stdin);
    str1[strcspn(str1, "\n")] = 0; // Remove o \n

    printf("Digite a segunda string: ");
    fgets(str2, 100, stdin);
    str2[strcspn(str2, "\n")] = 0; // Remove o \n

    // Aloca memória para a nova string (tamanho das duas + 1 para o '\0')
    resultado = (char*) malloc(strlen(str1) + strlen(str2) + 1);

    if (resultado == NULL) {
        printf("Erro de alocacao!\n");
        return 1;
    }

    // Copia a primeira string e concatena a segunda
    strcpy(resultado, str1);
    strcat(resultado, str2);

    printf("String concatenada: %s\n", resultado);

    free(resultado);
    resultado = NULL;

    return 0;
}
```

### Exercício 4: Redimensionando um Vetor (`realloc`)
Comece alocando um vetor para 5 inteiros usando `malloc` e preencha-o. Em seguida, peça ao usuário um novo tamanho para o vetor (maior que 5). Use `realloc` para redimensionar o vetor para o novo tamanho. Peça ao usuário para preencher as novas posições. Imprima o vetor completo e, por fim, libere a memória.

### Exercício 4: Redimensionando um Vetor (`realloc`)
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int i;
    int *vetor = (int*) malloc(5 * sizeof(int));
    if (vetor == NULL) return 1;

    printf("Vetor inicial (tamanho 5):\n");
    for (i = 0; i < 5; i++) {
        vetor[i] = i * 10;
        printf("%d ", vetor[i]);
    }
    printf("\n");

    int novo_tamanho;
    printf("\nDigite o novo tamanho do vetor: ");
    scanf("%d", &novo_tamanho);
    
    // Redimensiona o vetor
    int *temp = (int*) realloc(vetor, novo_tamanho * sizeof(int));
    
    // Verifica se realloc funcionou
    if (temp == NULL) {
        printf("Erro ao redimensionar o vetor!\n");
        free(vetor); // Libera a memória original
        return 1;
    }
    vetor = temp;

    // Preenche as novas posições (se o vetor aumentou)
    if (novo_tamanho > 5) {
        printf("Preenchendo as novas posicoes:\n");
        for (i = 5; i < novo_tamanho; i++) {
            vetor[i] = i * 100;
        }
    }

    printf("Vetor final (tamanho %d):\n", novo_tamanho);
    for (i = 0; i < novo_tamanho; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n");

    free(vetor);
    vetor = NULL;

    return 0;
}
```


### Exercício 5: Matriz Dinâmica (Vetor de Ponteiros)
Faça um programa que pergunte ao usuário o número de linhas e colunas de uma matriz de `float`. Aloque a matriz dinamicamente. Para isso, você precisará de um ponteiro para ponteiro (`float **matriz`). Primeiro, aloque um vetor de ponteiros (as linhas). Depois, em um laço, aloque um vetor de `float` para cada linha. Preencha e imprima a matriz. Lembre-se de liberar a memória na ordem inversa (cada linha primeiro, depois o vetor de ponteiros).

### Exercício 5: Matriz Dinâmica (Vetor de Ponteiros)
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int linhas, colunas;
    float **matriz;
    int i, j;

    printf("Digite o numero de linhas: ");
    scanf("%d", &linhas);
    printf("Digite o numero de colunas: ");
    scanf("%d", &colunas);

    // Aloca o vetor de ponteiros (as linhas)
    matriz = (float**) malloc(linhas * sizeof(float*));
    if (matriz == NULL) return 1;

    // Aloca cada linha (vetor de floats)
    for (i = 0; i < linhas; i++) {
        matriz[i] = (float*) malloc(colunas * sizeof(float));
        if (matriz[i] == NULL) return 1;
    }

    // Preenche e imprime a matriz
    for (i = 0; i < linhas; i++) {
        for (j = 0; j < colunas; j++) {
            matriz[i][j] = (i * colunas) + j + 1.0;
            printf("%.1f\t", matriz[i][j]);
        }
        printf("\n");
    }

    // Libera a memória (ordem inversa da alocação)
    for (i = 0; i < linhas; i++) {
        free(matriz[i]);
    }
    free(matriz);
    matriz = NULL;

    return 0;
}
```

### Exercício 6: Lendo um Número Indeterminado de Dados
Escreva um programa que leia uma sequência de números inteiros até que o usuário digite `-1`. Como você não sabe quantos números serão digitados, comece com um vetor pequeno (ex: tamanho 10) alocado dinamicamente. Se o vetor encher, use `realloc` para dobrar sua capacidade. Ao final, imprima todos os números digitados e a quantidade total. Libere a memória.

### Exercício 6: Lendo um Número Indeterminado de Dados
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int capacidade = 10;
    int tamanho = 0;
    int *vetor = (int*) malloc(capacidade * sizeof(int));
    if (vetor == NULL) return 1;
    
    int numero;
    printf("Digite numeros inteiros (-1 para parar):\n");
    
    while (1) {
        scanf("%d", &numero);
        if (numero == -1) {
            break;
        }

        // Se o vetor está cheio, dobra a capacidade
        if (tamanho == capacidade) {
            capacidade *= 2;
            int *temp = realloc(vetor, capacidade * sizeof(int));
            if (temp == NULL) {
                printf("Erro ao realocar!\n");
                free(vetor);
                return 1;
            }
            vetor = temp;
        }

        vetor[tamanho] = numero;
        tamanho++;
    }

    printf("\nVoce digitou %d numeros:\n", tamanho);
    for (int i = 0; i < tamanho; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n");

    free(vetor);
    vetor = NULL;

    return 0;
}
```

### Exercício 7: Cópia Dinâmica de um Vetor
Crie uma função `int* copiaVetor(int *vetor_original, int tamanho)`. Esta função deve receber um vetor e seu tamanho, alocar dinamicamente um novo vetor do mesmo tamanho, copiar todos os elementos do original para o novo e retornar o ponteiro para o novo vetor. Na `main`, teste a função e não se esqueça de usar `free` no vetor retornado.

### Exercício 7: Cópia Dinâmica de um Vetor
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h> // Para memcpy

int* copiaVetor(int *vetor_original, int tamanho) {
    if (vetor_original == NULL || tamanho <= 0) {
        return NULL;
    }
    
    // Aloca memória para a cópia
    int *copia = (int*) malloc(tamanho * sizeof(int));
    if (copia == NULL) {
        return NULL;
    }

    // Copia o conteúdo da memória do original para a cópia
    memcpy(copia, vetor_original, tamanho * sizeof(int));

    return copia;
}

int main() {
    int original[] = {10, 20, 30, 40, 50};
    int tamanho = 5;
    
    int *vetor_copiado = copiaVetor(original, tamanho);

    if (vetor_copiado != NULL) {
        printf("Vetor copiado: ");
        for (int i = 0; i < tamanho; i++) {
            printf("%d ", vetor_copiado[i]);
        }
        printf("\n");

        free(vetor_copiado);
        vetor_copiado = NULL;
    }

    return 0;
}
```

### Exercício 8: Alocação de `struct`
Defina uma `struct` chamada `Produto` que contenha um `char nome[50]`, um `int codigo` e um `float preco`. Crie um programa que aloque dinamicamente a memória para **um** `Produto`. Preencha os dados da `struct` usando o ponteiro e depois imprima esses dados. Libere a memória.

### Exercício 8: Alocação de `struct`
```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char nome[50];
    int codigo;
    float preco;
} Produto;

int main() {
    // Aloca memória para UMA struct Produto
    Produto *p = (Produto*) malloc(sizeof(Produto));
    if (p == NULL) return 1;

    printf("Digite o nome do produto: ");
    fgets(p->nome, 50, stdin);
    p->nome[strcspn(p->nome, "\n")] = 0;

    printf("Digite o codigo do produto: ");
    scanf("%d", &p->codigo);

    printf("Digite o preco do produto: ");
    scanf("%f", &p->preco);

    printf("\n--- Produto Cadastrado ---\n");
    printf("Nome: %s\n", p->nome);
    printf("Codigo: %d\n", p->codigo);
    printf("Preco: R$ %.2f\n", p->preco);
    
    free(p);
    p = NULL;

    return 0;
}
```

### Exercício 9: Vetor Dinâmico de `structs`
Usando a mesma `struct Produto` do exercício anterior, peça ao usuário para informar quantos produtos ele quer cadastrar. Aloque dinamicamente um vetor de `struct Produto` com o tamanho informado. Peça para o usuário preencher os dados de todos os produtos. Ao final, imprima os dados de todos os produtos cadastrados e libere a memória.

### Exercício 9: Vetor Dinâmico de `structs`
```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char nome[50];
    int codigo;
} Produto;

int main() {
    int n, i;
    printf("Quantos produtos deseja cadastrar? ");
    scanf("%d", &n);

    // Aloca um vetor de 'n' structs Produto
    Produto *catalogo = (Produto*) malloc(n * sizeof(Produto));
    if (catalogo == NULL) return 1;

    for (i = 0; i < n; i++) {
        printf("\n--- Produto %d ---\n", i + 1);
        printf("Nome: ");
        scanf(" %[^\n]", catalogo[i].nome); // Lê string com espaços
        printf("Codigo: ");
        scanf("%d", &catalogo[i].codigo);
    }
    
    printf("\n--- Catalogo de Produtos ---\n");
    for (i = 0; i < n; i++) {
        printf("Produto %d: %s (Codigo: %d)\n", i + 1, catalogo[i].nome, catalogo[i].codigo);
    }

    free(catalogo);
    catalogo = NULL;

    return 0;
}
```

### Exercício 10: Juntando dois vetores ordenados
Escreva uma função que receba dois vetores de inteiros já ordenados (`v1` e `v2`) e seus respectivos tamanhos. A função deve alocar dinamicamente um terceiro vetor com tamanho suficiente para conter todos os elementos de `v1` e `v2`. Em seguida, ela deve preencher este novo vetor com os elementos de `v1` e `v2` de forma que o novo vetor também fique ordenado. Retorne o ponteiro para o novo vetor. Libere a memória na `main`.

### Exercício 10: Juntando dois vetores ordenados
```c
#include <stdio.h>
#include <stdlib.h>

int* juntarVetoresOrdenados(int *v1, int tam1, int *v2, int tam2) {
    int *resultado = (int*) malloc((tam1 + tam2) * sizeof(int));
    if (resultado == NULL) return NULL;

    int i = 0, j = 0, k = 0;

    // Mescla os dois vetores enquanto ambos tiverem elementos
    while (i < tam1 && j < tam2) {
        if (v1[i] < v2[j]) {
            resultado[k++] = v1[i++];
        } else {
            resultado[k++] = v2[j++];
        }
    }

    // Copia os elementos restantes de v1, se houver
    while (i < tam1) {
        resultado[k++] = v1[i++];
    }

    // Copia os elementos restantes de v2, se houver
    while (j < tam2) {
        resultado[k++] = v2[j++];
    }

    return resultado;
}

int main() {
    int v1[] = {1, 3, 5, 7};
    int v2[] = {2, 4, 6, 8, 10};
    int tam1 = 4, tam2 = 5;

    int *vetor_final = juntarVetoresOrdenados(v1, tam1, v2, tam2);

    if (vetor_final != NULL) {
        printf("Vetor final ordenado: ");
        for (int i = 0; i < (tam1 + tam2); i++) {
            printf("%d ", vetor_final[i]);
        }
        printf("\n");
        free(vetor_final);
    }

    return 0;
}
```

---

## Exercícios focados em Arquivos

### Exercício 1: Escrevendo em um Arquivo de Texto
Crie um programa que peça ao usuário para digitar uma frase. Em seguida, o programa deve abrir um arquivo chamado `frase.txt` em modo de escrita (`"w"`) e salvar a frase digitada pelo usuário dentro dele. Feche o arquivo e verifique se o conteúdo foi salvo corretamente.

### Exercício 1: Escrevendo em um Arquivo de Texto
```c
#include <stdio.h>
#include <stdlib.h> // Para exit()

int main() {
    FILE *arquivo;
    char frase[100];

    // Abre o arquivo em modo de escrita ("w")
    arquivo = fopen("frase.txt", "w");

    // Verifica se o arquivo foi aberto com sucesso
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo!\n");
        exit(1);
    }

    printf("Digite uma frase para salvar no arquivo: ");
    fgets(frase, 100, stdin);

    // Salva a string no arquivo
    fprintf(arquivo, "%s", frase);
    // Alternativa: fputs(frase, arquivo);

    // Fecha o arquivo
    fclose(arquivo);

    printf("Frase salva com sucesso no arquivo 'frase.txt'.\n");

    return 0;
}
```

### Exercício 2: Lendo de um Arquivo de Texto
Escreva um programa que abra o arquivo `frase.txt` criado no exercício anterior em modo de leitura (`"r"`). Leia o conteúdo do arquivo e exiba-o na tela do console. O programa deve também tratar o caso em que o arquivo não existe.

### Exercício 2: Lendo de um Arquivo de Texto
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *arquivo;
    char linha[100];

    // Abre o arquivo em modo de leitura ("r")
    arquivo = fopen("frase.txt", "r");

    if (arquivo == NULL) {
        printf("Erro! Nao foi possivel abrir o arquivo 'frase.txt'.\n");
        exit(1);
    }

    printf("\nConteudo do arquivo:\n");
    // Lê e imprime o conteúdo do arquivo linha por linha
    while (fgets(linha, 100, arquivo) != NULL) {
        printf("%s", linha);
    }

    fclose(arquivo);

    return 0;
}
```

### Exercício 3: Contando Linhas de um Arquivo
Faça um programa que abra um arquivo de texto qualquer e conte quantas linhas ele possui. Para fazer isso, leia o arquivo caractere por caractere (com `fgetc`) e incremente um contador toda vez que encontrar um caractere de nova linha (`\n`).

### Exercício 3: Contando Linhas de um Arquivo
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *arquivo;
    char nome_arquivo[50];
    int contador_linhas = 0;
    char caractere;

    printf("Digite o nome do arquivo de texto: ");
    scanf("%s", nome_arquivo);

    arquivo = fopen(nome_arquivo, "r");

    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo %s.\n", nome_arquivo);
        exit(1);
    }

    // Lê caractere por caractere até o final do arquivo (EOF)
    while ((caractere = fgetc(arquivo)) != EOF) {
        if (caractere == '\n') {
            contador_linhas++;
        }
    }
    
    // Adiciona 1 se o arquivo não estiver vazio (para contar a última linha se não terminar com \n)
    // fseek volta o cursor ao início para verificar se o arquivo tem algum conteúdo.
    fseek(arquivo, 0, SEEK_END);
    if (ftell(arquivo) > 0) {
        contador_linhas++;
    }


    fclose(arquivo);

    printf("O arquivo '%s' possui %d linhas.\n", nome_arquivo, contador_linhas);

    return 0;
}
```

### Exercício 4: Adicionando Conteúdo a um Arquivo (Append)
Desenvolva um programa que funcione como um diário simples. Peça ao usuário para digitar uma entrada para o diário. O programa deve abrir um arquivo `diario.txt` em modo de adição (`"a"`) e adicionar a nova entrada no final do arquivo, sem apagar o conteúdo anterior.

### Exercício 4: Adicionando Conteúdo a um Arquivo (Append)
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h> // Para registrar data e hora

int main() {
    FILE *arquivo;
    char entrada[256];
    
    // Abre em modo de adição ("a")
    arquivo = fopen("diario.txt", "a");

    if (arquivo == NULL) {
        printf("Erro ao abrir o diario!\n");
        exit(1);
    }

    printf("Digite sua entrada para o diario de hoje:\n");
    fgets(entrada, 256, stdin);

    // Adiciona a nova entrada no final do arquivo
    fprintf(arquivo, "\n---\n%s", entrada);

    fclose(arquivo);

    printf("Entrada adicionada ao diario com sucesso!\n");

    return 0;
}
```

### Exercício 5: Salvando Dados Formatados
Crie um programa que receba de vários usuários o nome, a idade e a altura. Para cada usuário, salve esses dados em um arquivo chamado `pessoas.txt`, com cada informação em uma linha separada. Ex:
Maria
30
1.65
Joao
25
1.80

### Exercício 5: Salvando Dados Formatados
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *arquivo;
    char nome[50];
    int idade;
    float altura;
    char continuar;

    // Usar "a" (append) para não apagar dados existentes
    arquivo = fopen("pessoas.txt", "a");
    if (arquivo == NULL) exit(1);

    do {
        printf("\nDigite o nome: ");
        scanf(" %[^\n]", nome); // Lê string com espaços
        printf("Digite a idade: ");
        scanf("%d", &idade);
        printf("Digite a altura (ex: 1.75): ");
        scanf("%f", &altura);

        fprintf(arquivo, "%s\n%d\n%f\n", nome, idade, altura);

        printf("\nDeseja adicionar outra pessoa? (s/n): ");
        scanf(" %c", &continuar);

    } while (continuar == 's' || continuar == 'S');

    fclose(arquivo);
    printf("Dados salvos em 'pessoas.txt'.\n");

    return 0;
}
```

### Exercício 6: Lendo Dados Formatados e Calculando a Média
Escreva um programa que leia o arquivo `pessoas.txt` do exercício anterior. Para cada pessoa, leia o nome, a idade e a altura. Ao final, calcule e exiba a idade média e a altura média de todas as pessoas listadas no arquivo.

### Exercício 6: Lendo Dados Formatados e Calculando a Média
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *arquivo;
    char nome[50];
    int idade, contador_pessoas = 0;
    float altura;
    float soma_idades = 0, soma_alturas = 0;

    arquivo = fopen("pessoas.txt", "r");
    if (arquivo == NULL) {
        printf("Erro: arquivo 'pessoas.txt' nao encontrado.\n");
        exit(1);
    }

    // fscanf retorna o número de itens lidos com sucesso
    while (fscanf(arquivo, " %[^\n]\n%d\n%f\n", nome, &idade, &altura) == 3) {
        printf("Lido: Nome=%s, Idade=%d, Altura=%.2f\n", nome, idade, altura);
        soma_idades += idade;
        soma_alturas += altura;
        contador_pessoas++;
    }

    fclose(arquivo);

    if (contador_pessoas > 0) {
        printf("\n--- Estatisticas ---\n");
        printf("Numero de pessoas: %d\n", contador_pessoas);
        printf("Idade media: %.1f anos\n", soma_idades / contador_pessoas);
        printf("Altura media: %.2f m\n", soma_alturas / contador_pessoas);
    } else {
        printf("Nenhum dado encontrado no arquivo.\n");
    }

    return 0;
}
```

### Exercício 7: Gravando uma `struct` em Arquivo Binário
Defina uma `struct Aluno` com os campos `nome` (string), `matricula` (int) e `nota` (float). Crie um programa que leia os dados de um aluno, armazene-os em uma variável do tipo `struct Aluno` e, em seguida, grave essa `struct` em um arquivo binário chamado `aluno.bin` usando `fwrite`.

### Exercício 7: Gravando uma `struct` em Arquivo Binário
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char nome[50];
    int matricula;
    float nota;
} Aluno;

int main() {
    FILE *arquivo;
    Aluno aluno1;

    // Coleta os dados
    strcpy(aluno1.nome, "Joao Silva");
    aluno1.matricula = 12345;
    aluno1.nota = 8.7;

    // Abre em modo de escrita binária ("wb")
    arquivo = fopen("aluno.bin", "wb");
    if (arquivo == NULL) exit(1);

    // Escreve a struct inteira de uma vez no arquivo
    fwrite(&aluno1, sizeof(Aluno), 1, arquivo);

    fclose(arquivo);
    printf("Struct Aluno gravada com sucesso em 'aluno.bin'.\n");

    return 0;
}
```

### Exercício 8: Lendo uma `struct` de um Arquivo Binário
Faça um programa que leia a `struct Aluno` do arquivo `aluno.bin` criado no exercício anterior. Use `fread` para carregar os dados do arquivo para uma variável `struct`. Exiba os dados do aluno na tela para confirmar que a leitura foi bem-sucedida.

### Exercício 8: Lendo uma `struct` de um Arquivo Binário
```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char nome[50];
    int matricula;
    float nota;
} Aluno;

int main() {
    FILE *arquivo;
    Aluno aluno_lido;

    // Abre em modo de leitura binária ("rb")
    arquivo = fopen("aluno.bin", "rb");
    if (arquivo == NULL) {
        printf("Erro ao abrir 'aluno.bin'.\n");
        exit(1);
    }

    // Lê a struct do arquivo para a variável
    if (fread(&aluno_lido, sizeof(Aluno), 1, arquivo) == 1) {
        printf("--- Dados do Aluno Lido ---\n");
        printf("Nome: %s\n", aluno_lido.nome);
        printf("Matricula: %d\n", aluno_lido.matricula);
        printf("Nota: %.1f\n", aluno_lido.nota);
    } else {
        printf("Erro ao ler a struct do arquivo.\n");
    }

    fclose(arquivo);

    return 0;
}
```

### Exercício 9: Acessando um Registro Específico com `fseek`
Modifique o exercício 7 para permitir cadastrar vários alunos (adicionando-os ao final do arquivo `aluno.bin` em modo `"ab"`). Depois, crie um novo programa que peça ao usuário o número do registro que ele deseja ler (ex: o 2º aluno). Use `fseek` para posicionar o "cursor" do arquivo diretamente nesse registro, leia-o com `fread` e exiba seus dados.

### Exercício 9: Acessando um Registro Específico com `fseek`
```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char nome[50];
    int matricula;
    float nota;
} Aluno;

int main() {
    FILE *arquivo;
    Aluno aluno_temp;
    int num_registro;

    // Supondo que o arquivo "aluno.bin" já existe com alguns registros.
    // Para testar, você pode rodar o ex. 7 várias vezes modificando os dados,
    // ou criar um programa para adicionar vários alunos em modo "ab".
    
    arquivo = fopen("aluno.bin", "rb");
    if (arquivo == NULL) exit(1);
    
    printf("Digite o numero do registro a ser lido (ex: 1, 2, 3...): ");
    scanf("%d", &num_registro);
    
    // Posiciona o cursor no início do registro desejado
    if (fseek(arquivo, (num_registro - 1) * sizeof(Aluno), SEEK_SET) != 0) {
        printf("Erro ao posicionar no registro %d.\n", num_registro);
        fclose(arquivo);
        exit(1);
    }

    // Lê o registro da posição atual
    if (fread(&aluno_temp, sizeof(Aluno), 1, arquivo) == 1) {
        printf("\n--- Registro %d ---\n", num_registro);
        printf("Nome: %s\n", aluno_temp.nome);
        printf("Matricula: %d\n", aluno_temp.matricula);
        printf("Nota: %.1f\n", aluno_temp.nota);
    } else {
        printf("Nao foi possivel ler o registro %d. Ele existe?\n", num_registro);
    }
    
    fclose(arquivo);
    return 0;
}
```

### Exercício 10: Copiando o Conteúdo de um Arquivo
Escreva um programa que faça uma cópia de um arquivo. O programa deve pedir ao usuário o nome do arquivo de origem e o nome do arquivo de destino. Ele deve ler o conteúdo do arquivo de origem e escrevê-lo no arquivo de destino. Faça a cópia em modo binário para garantir que funcione para qualquer tipo de arquivo (texto, imagem, etc.).


### Exercício 10: Copiando o Conteúdo de um Arquivo
```c
#include <stdio.h>
#include <stdlib.h>

#define TAMANHO_BUFFER 512

int main() {
    char nome_origem[100], nome_destino[100];
    FILE *arq_origem, *arq_destino;
    unsigned char buffer[TAMANHO_BUFFER];
    size_t bytes_lidos;

    printf("Digite o nome do arquivo de origem: ");
    scanf("%s", nome_origem);
    printf("Digite o nome do arquivo de destino: ");
    scanf("%s", nome_destino);

    // Abre os arquivos em modo binário
    arq_origem = fopen(nome_origem, "rb");
    if (arq_origem == NULL) {
        printf("Erro ao abrir arquivo de origem!\n");
        exit(1);
    }
    
    arq_destino = fopen(nome_destino, "wb");
    if (arq_destino == NULL) {
        printf("Erro ao criar arquivo de destino!\n");
        fclose(arq_origem);
        exit(1);
    }

    // Lê do origem e escreve no destino em blocos (chunks)
    while ((bytes_lidos = fread(buffer, 1, TAMANHO_BUFFER, arq_origem)) > 0) {
        fwrite(buffer, 1, bytes_lidos, arq_destino);
    }

    printf("Arquivo copiado com sucesso!\n");

    fclose(arq_origem);
    fclose(arq_destino);

    return 0;
}
```

## Exercícios focados em Structs

### Exercício 1: Cadastro Básico de um Ponto
Defina uma `struct` chamada `Ponto` que contenha dois membros: `int x` e `int y`. Na função `main`, declare uma variável do tipo `Ponto`, peça ao usuário para digitar as coordenadas `x` e `y`, armazene-as na `struct` e, em seguida, imprima as coordenadas do ponto.

### Exercício 1: Cadastro Básico de um Ponto
```c
#include <stdio.h>

// Definição da struct Ponto
struct Ponto {
    int x;
    int y;
};

int main() {
    // Declaração de uma variável do tipo Ponto
    struct Ponto p1;

    printf("Digite a coordenada x do ponto: ");
    scanf("%d", &p1.x);

    printf("Digite a coordenada y do ponto: ");
    scanf("%d", &p1.y);

    printf("\nAs coordenadas do ponto sao: (%d, %d)\n", p1.x, p1.y);

    return 0;
}
```


### Exercício 2: Função para Imprimir uma `struct`
Usando a `struct Ponto` do exercício anterior, crie uma função `void imprimirPonto(struct Ponto p)` que receba uma `struct Ponto` como parâmetro (passagem por valor) e imprima suas coordenadas no formato `(x, y)`.

### Exercício 2: Função para Imprimir uma `struct`
```c
#include <stdio.h>

struct Ponto {
    int x;
    int y;
};

// Função que recebe a struct por valor
void imprimirPonto(struct Ponto p) {
    printf("Coordenadas: (%d, %d)\n", p.x, p.y);
}

int main() {
    struct Ponto meuPonto = {10, 20}; // Inicialização direta
    
    imprimirPonto(meuPonto);

    return 0;
}
```

### Exercício 3: Alterando uma `struct` com Ponteiros
Crie uma função `void moverPonto(struct Ponto *p, int deltaX, int deltaY)`. A função deve receber um *ponteiro* para uma `struct Ponto` e alterar seus valores `x` e `y`, somando `deltaX` e `deltaY` a eles. Na `main`, declare um ponto, imprima suas coordenadas, chame a função e imprima as novas coordenadas.

### Exercício 3: Alterando uma `struct` com Ponteiros
```c
#include <stdio.h>

struct Ponto {
    int x;
    int y;
};

// Recebe um ponteiro para a struct
void moverPonto(struct Ponto *p, int deltaX, int deltaY) {
    // Usa o operador '->' para acessar membros através de um ponteiro
    p->x += deltaX;
    p->y += deltaY;
}

int main() {
    struct Ponto p1 = {5, 10};

    printf("Coordenadas originais: (%d, %d)\n", p1.x, p1.y);

    // Passa o endereço da struct para a função
    moverPonto(&p1, 3, -2);

    printf("Novas coordenadas: (%d, %d)\n", p1.x, p1.y);

    return 0;
}
```

### Exercício 4: Vetor de `structs` (Cadastro de Retângulos)
Defina uma `struct` chamada `Retangulo` com os membros `base` (float) e `altura` (float). Declare um vetor de 3 `Retangulo`. Peça ao usuário os dados para cada um dos 3 retângulos e armazene-os no vetor.

### Exercício 4: Vetor de `structs` (Cadastro de Retângulos)
```c
#include <stdio.h>

struct Retangulo {
    float base;
    float altura;
};

int main() {
    struct Retangulo retangulos[3];
    int i;

    // Preenche o vetor de structs
    for (i = 0; i < 3; i++) {
        printf("\n--- Retangulo %d ---\n", i + 1);
        printf("Digite a base: ");
        scanf("%f", &retangulos[i].base);
        printf("Digite a altura: ");
        scanf("%f", &retangulos[i].altura);
    }
    
    printf("\n--- Dados dos Retangulos ---\n");
    for (i = 0; i < 3; i++) {
        printf("Retangulo %d: Base=%.2f, Altura=%.2f\n", 
               i + 1, retangulos[i].base, retangulos[i].altura);
    }

    return 0;
}
```

### Exercício 5: Função que Calcula a Área
Usando o vetor de `structs` do exercício anterior, crie uma função `float calcularArea(struct Retangulo r)` que retorna a área de um retângulo. Na `main`, use um laço para percorrer o vetor de retângulos e, para cada um, chame a função e imprima a área correspondente.

### Exercício 5: Função que Calcula a Área
```c
#include <stdio.h>

struct Retangulo {
    float base;
    float altura;
};

float calcularArea(struct Retangulo r) {
    return r.base * r.altura;
}

int main() {
    struct Retangulo retangulos[3] = {{5.0, 3.0}, {10.0, 2.0}, {4.5, 4.5}};
    int i;

    for (i = 0; i < 3; i++) {
        float area = calcularArea(retangulos[i]);
        printf("A area do retangulo %d (base %.2f, altura %.2f) e: %.2f\n", 
               i + 1, retangulos[i].base, retangulos[i].altura, area);
    }

    return 0;
}
```

### Exercício 6: `structs` Aninhadas (Funcionário e Data)
Defina uma `struct Data` com `dia`, `mes` e `ano`. Em seguida, defina uma `struct Funcionario` com `nome` (string), `salario` (float) e `data_admissao` (do tipo `struct Data`). Crie uma variável `Funcionario`, preencha todos os seus dados (incluindo os da data aninhada) e imprima-os na tela.

### Exercício 6: `structs` Aninhadas (Funcionário e Data)
```c
#include <stdio.h>

struct Data {
    int dia;
    int mes;
    int ano;
};

struct Funcionario {
    char nome[50];
    float salario;
    struct Data data_admissao;
};

int main() {
    struct Funcionario f1;

    printf("Digite o nome do funcionario: ");
    scanf(" %[^\n]", f1.nome);
    printf("Digite o salario: ");
    scanf("%f", &f1.salario);
    printf("Digite o dia de admissao: ");
    scanf("%d", &f1.data_admissao.dia);
    printf("Digite o mes de admissao: ");
    scanf("%d", &f1.data_admissao.mes);
    printf("Digite o ano de admissao: ");
    scanf("%d", &f1.data_admissao.ano);

    printf("\n--- Dados do Funcionario ---\n");
    printf("Nome: %s\n", f1.nome);
    printf("Salario: R$ %.2f\n", f1.salario);
    printf("Data de Admissao: %02d/%02d/%d\n", 
           f1.data_admissao.dia, f1.data_admissao.mes, f1.data_admissao.ano);

    return 0;
}
```

### Exercício 7: Alocação Dinâmica de uma `struct`
Defina uma `struct Carro` com `marca` (string), `modelo` (string) e `ano` (int). No programa, aloque dinamicamente memória para **uma** `struct Carro` usando `malloc`. Preencha os dados (usando o operador `->`) e depois os imprima. Não se esqueça de liberar a memória com `free`.

### Exercício 7: Alocação Dinâmica de uma `struct`
```c
#include <stdio.h>
#include <stdlib.h> // Para malloc e free

struct Carro {
    char marca[50];
    char modelo[50];
    int ano;
};

int main() {
    // Aloca memória para UMA struct Carro e retorna um ponteiro
    struct Carro *meuCarro = (struct Carro*) malloc(sizeof(struct Carro));

    if (meuCarro == NULL) {
        printf("Erro de alocacao de memoria!\n");
        return 1;
    }

    printf("Digite a marca do carro: ");
    scanf(" %[^\n]", meuCarro->marca);
    printf("Digite o modelo: ");
    scanf(" %[^\n]", meuCarro->modelo);
    printf("Digite o ano: ");
    scanf("%d", &meuCarro->ano);

    printf("\n--- Carro Alocado Dinamicamente ---\n");
    printf("Marca: %s, Modelo: %s, Ano: %d\n", meuCarro->marca, meuCarro->modelo, meuCarro->ano);

    // Libera a memória alocada
    free(meuCarro);
    meuCarro = NULL;

    return 0;
}
```

### Exercício 8: Vetor Dinâmico de `structs`
Usando a `struct Carro`, pergunte ao usuário quantos carros ele deseja cadastrar. Aloque dinamicamente um vetor de `struct Carro` do tamanho informado. Peça ao usuário os dados de cada carro e, ao final, imprima uma lista com todos os carros cadastrados. Libere a memória no final.

### Exercício 8: Vetor Dinâmico de `structs`
```c
#include <stdio.h>
#include <stdlib.h>

struct Carro {
    char modelo[50];
    int ano;
};

int main() {
    int n, i;
    printf("Quantos carros deseja cadastrar? ");
    scanf("%d", &n);

    // Aloca um vetor de 'n' structs
    struct Carro *garagem = (struct Carro*) malloc(n * sizeof(struct Carro));
    if (garagem == NULL) return 1;

    for (i = 0; i < n; i++) {
        printf("\n--- Carro %d ---\n", i + 1);
        printf("Modelo: ");
        scanf(" %[^\n]", (garagem + i)->modelo); // Aritmética de ponteiros
        printf("Ano: ");
        scanf("%d", &garagem[i].ano);            // Acesso como vetor
    }
    
    printf("\n--- Garagem ---\n");
    for (i = 0; i < n; i++) {
        printf("Carro %d: %s (%d)\n", i + 1, garagem[i].modelo, garagem[i].ano);
    }

    free(garagem);
    garagem = NULL;

    return 0;
}
```

### Exercício 9: Encontrando o Mais Velho
Crie uma `struct Pessoa` com `nome` (string) e `idade` (int). Escreva uma função que receba um vetor de `struct Pessoa` e seu tamanho, e retorne um *ponteiro* para a `struct` da pessoa mais velha no vetor. Se o vetor estiver vazio, retorne `NULL`.

### Exercício 9: Encontrando o Mais Velho
```c
#include <stdio.h>
#include <stdlib.h>

struct Pessoa {
    char nome[50];
    int idade;
};

struct Pessoa* encontrarMaisVelha(struct Pessoa *pessoas, int tamanho) {
    if (tamanho <= 0) {
        return NULL; // Retorna nulo se o vetor for vazio
    }
    
    struct Pessoa *mais_velha = &pessoas[0]; // Ponteiro para o primeiro
    int i;

    for (i = 1; i < tamanho; i++) {
        if (pessoas[i].idade > mais_velha->idade) {
            mais_velha = &pessoas[i]; // Atualiza o ponteiro
        }
    }
    return mais_velha;
}

int main() {
    struct Pessoa turma[] = {{"Ana", 20}, {"Bia", 22}, {"Carlos", 19}, {"Daniel", 25}};
    int tamanho = 4;
    
    struct Pessoa *ptr_mais_velha = encontrarMaisVelha(turma, tamanho);
    
    if (ptr_mais_velha != NULL) {
        printf("A pessoa mais velha e: %s, com %d anos.\n", 
               ptr_mais_velha->nome, ptr_mais_velha->idade);
    }
    
    return 0;
}
```

### Exercício 10: Comparando `structs`
Usando a `struct Data` do exercício 6, crie uma função `int compararDatas(struct Data d1, struct Data d2)`. A função deve retornar:
* `-1` se a data `d1` for anterior à `d2`.
* `0` se as datas forem iguais.
* `1` se a data `d1` for posterior à `d2`.

Teste a função com diferentes datas.

### Exercício 10: Comparando `structs`
```c
#include <stdio.h>

struct Data {
    int dia;
    int mes;
    int ano;
};

int compararDatas(struct Data d1, struct Data d2) {
    // Compara o ano
    if (d1.ano < d2.ano) return -1;
    if (d1.ano > d2.ano) return 1;

    // Se os anos são iguais, compara o mês
    if (d1.mes < d2.mes) return -1;
    if (d1.mes > d2.mes) return 1;
    
    // Se os meses são iguais, compara o dia
    if (d1.dia < d2.dia) return -1;
    if (d1.dia > d2.dia) return 1;
    
    // Se tudo for igual
    return 0;
}

int main() {
    struct Data hoje = {13, 8, 2025};
    struct Data ontem = {12, 8, 2025};
    struct Data futuro = {1, 1, 2026};
    
    printf("Comparando hoje com ontem: %d (Esperado: 1)\n", compararDatas(hoje, ontem));
    printf("Comparando ontem com hoje: %d (Esperado: -1)\n", compararDatas(ontem, hoje));
    printf("Comparando hoje com hoje: %d (Esperado: 0)\n", compararDatas(hoje, hoje));
    printf("Comparando hoje com futuro: %d (Esperado: -1)\n", compararDatas(hoje, futuro));
    
    return 0;
}
```

---
## Exercícios focados em Classe

### Exercício 1: Classe Básica `Retangulo`
Crie uma classe chamada `Retangulo`.
* Adicione dois atributos `public` do tipo `double`: `largura` e `altura`.
* Crie um método `public` chamado `calcularArea()` que retorna a área do retângulo (`largura * altura`).
* Na função `main`, crie um objeto da classe `Retangulo`, defina valores para `largura` e `altura` e imprima a área calculada.

### Exercício 1: Classe Básica `Retangulo`

```cpp
#include <iostream>

class Retangulo {
public:
    double largura;
    double altura;

    // Método para calcular a área
    double calcularArea() {
        return largura * altura;
    }
};

int main() {
    Retangulo meuRetangulo; // Cria um objeto da classe Retangulo

    // Define os atributos do objeto
    meuRetangulo.largura = 10.0;
    meuRetangulo.altura = 5.0;

    // Chama o método e imprime o resultado
    std::cout << "A area do retangulo e: " << meuRetangulo.calcularArea() << std::endl;

    return 0;
}
```

### Exercício 2: Encapsulamento com a Classe `Pessoa`
Crie uma classe chamada `Pessoa`.
* Adicione dois atributos `private`: `string nome` e `int idade`.
* Crie métodos `public` para definir e obter os valores desses atributos (os "setters" e "getters"): `setNome(string n)`, `setIdade(int i)`, `getNome()` e `getIdade()`.
* Na `main`, crie um objeto `Pessoa`, use os métodos "set" para definir seus dados e os métodos "get" para exibi-los.

### Exercício 2: Encapsulamento com a Classe `Pessoa`
```cpp
#include <iostream>
#include <string>

class Pessoa {
private:
    std::string nome;
    int idade;

public:
    // Setter para o nome
    void setNome(std::string n) {
        nome = n;
    }
    // Getter para o nome
    std::string getNome() {
        return nome;
    }
    // Setter para a idade
    void setIdade(int i) {
        if (i > 0) { // Uma pequena validação
            idade = i;
        }
    }
    // Getter para a idade
    int getIdade() {
        return idade;
    }
};

int main() {
    Pessoa p1;
    p1.setNome("Maria");
    p1.setIdade(30);

    std::cout << "Nome: " << p1.getNome() << std::endl;
    std::cout << "Idade: " << p1.getIdade() << " anos" << std::endl;

    return 0;
}
```

### Exercício 3: Construtores na Classe `Carro`
Crie uma classe `Carro`.
* Atributos `private`: `string marca`, `string modelo` e `int ano`.
* Crie um construtor que receba a marca, o modelo e o ano como parâmetros e inicialize os atributos da classe com esses valores.
* Crie um método `public` `exibirInfo()` que imprima os dados do carro.
* Na `main`, crie um objeto `Carro` passando os dados diretamente na sua criação e chame o método `exibirInfo()`.

### Exercício 3: Construtores na Classe `Carro`
```cpp
#include <iostream>
#include <string>

class Carro {
private:
    std::string marca;
    std::string modelo;
    int ano;

public:
    // Construtor que inicializa os atributos
    Carro(std::string m, std::string mod, int a) : marca(m), modelo(mod), ano(a) {
        std::cout << "Objeto Carro criado!" << std::endl;
    }

    void exibirInfo() {
        std::cout << "--------------------" << std::endl;
        std::cout << "Marca: " << marca << std::endl;
        std::cout << "Modelo: " << modelo << std::endl;
        std::cout << "Ano: " << ano << std::endl;
        std::cout << "--------------------" << std::endl;
    }
};

int main() {
    // Cria o objeto passando os argumentos para o construtor
    Carro meuCarro("Ford", "Mustang", 2024);
    meuCarro.exibirInfo();

    Carro outroCarro("Honda", "Civic", 2023);
    outroCarro.exibirInfo();

    return 0;
}
```

### Exercício 4: Métodos e o Ponteiro `this`
Crie uma classe `Circulo`.
* Atributo `private`: `double raio`.
* Crie um método `setRaio(double raio)` que usa o ponteiro `this` para diferenciar o parâmetro do atributo da classe (ex: `this->raio = raio;`).
* Crie os métodos `calcularArea()` e `calcularCircunferencia()` que usam o atributo `raio` para fazer os cálculos (Área = $\pi \cdot r^2$, Circunferência = $2 \cdot \pi \cdot r$).
* Na `main`, crie um círculo, defina seu raio e exiba sua área e circunferência.



### Exercício 4: Métodos e o Ponteiro `this`
```cpp
#include <iostream>
#include <cmath> // Para M_PI

class Circulo {
private:
    double raio;

public:
    void setRaio(double raio) {
        // 'this->raio' é o atributo da classe
        // 'raio' é o parâmetro do método
        this->raio = raio;
    }

    double calcularArea() {
        return M_PI * raio * raio;
    }

    double calcularCircunferencia() {
        return 2 * M_PI * raio;
    }
};

int main() {
    Circulo c;
    c.setRaio(10.0);
    std::cout << "Area do circulo: " << c.calcularArea() << std::endl;
    std::cout << "Circunferencia do circulo: " << c.calcularCircunferencia() << std::endl;

    return 0;
}
```

### Exercício 5: Vetor de Objetos
Usando a classe `Pessoa` do exercício 2, crie um programa que:
* Declare um vetor de 3 objetos `Pessoa`.
* Use um laço `for` para pedir ao usuário que digite o nome e a idade de cada uma das 3 pessoas e armazene-os no vetor.
* Use outro laço `for` para exibir os dados de todas as pessoas cadastradas.

### Exercício 5: Vetor de Objetos
```cpp
#include <iostream>
#include <string>

class Pessoa {
private:
    std::string nome;
    int idade;

public:
    void setNome(std::string n) { nome = n; }
    std::string getNome() { return nome; }
    void setIdade(int i) { idade = i; }
    int getIdade() { return idade; }
};

int main() {
    Pessoa turma[3]; // Vetor de 3 objetos Pessoa
    std::string nome_temp;
    int idade_temp;

    // Coleta os dados
    for (int i = 0; i < 3; ++i) {
        std::cout << "\n--- Pessoa " << i + 1 << " ---\n";
        std::cout << "Digite o nome: ";
        std::getline(std::cin, nome_temp);
        std::cout << "Digite a idade: ";
        std::cin >> idade_temp;
        std::cin.ignore(); // Limpa o buffer do teclado

        turma[i].setNome(nome_temp);
        turma[i].setIdade(idade_temp);
    }
    
    // Exibe os dados
    std::cout << "\n--- Pessoas Cadastradas ---\n";
    for (int i = 0; i < 3; ++i) {
        std::cout << "Pessoa " << i + 1 << ": " << turma[i].getNome() 
                  << ", " << turma[i].getIdade() << " anos.\n";
    }

    return 0;
}
```

### Exercício 6: Classe `ContaBancaria`
Crie uma classe `ContaBancaria`.
* Atributos `private`: `int numeroConta`, `string nomeTitular`, `double saldo`.
* O construtor deve inicializar o número da conta, o nome do titular e, opcionalmente, um saldo inicial. O saldo padrão deve ser zero.
* Métodos `public`:
    * `depositar(double valor)`: adiciona um valor ao saldo.
    * `sacar(double valor)`: remove um valor do saldo, se houver fundos suficientes.
    * `getSaldo()`: retorna o saldo atual.
* Na `main`, simule a criação de uma conta, faça um depósito, uma tentativa de saque e exiba o saldo final.

### Exercício 6: Classe `ContaBancaria`
```cpp
#include <iostream>
#include <string>

class ContaBancaria {
private:
    int numeroConta;
    std::string nomeTitular;
    double saldo;

public:
    ContaBancaria(int num, std::string titular, double saldoInicial = 0.0) 
        : numeroConta(num), nomeTitular(titular), saldo(saldoInicial) {}

    void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            std::cout << "Deposito de R$" << valor << " realizado com sucesso.\n";
        }
    }

    void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            std::cout << "Saque de R$" << valor << " realizado com sucesso.\n";
        } else {
            std::cout << "Tentativa de saque falhou. Saldo insuficiente ou valor invalido.\n";
        }
    }

    double getSaldo() {
        return saldo;
    }
};

int main() {
    ContaBancaria minhaConta(12345, "Carlos Daniel", 500.00);
    
    std::cout << "Saldo inicial: R$" << minhaConta.getSaldo() << std::endl;
    minhaConta.depositar(250.0);
    minhaConta.sacar(150.0);
    minhaConta.sacar(700.0); // Tentativa de saque maior que o saldo
    std::cout << "Saldo final: R$" << minhaConta.getSaldo() << std::endl;

    return 0;
}
```

### Exercício 7: Composição de Classes
Crie uma classe `Motor` com um atributo `int cilindrada`. Em seguida, crie uma classe `Veiculo`.
* A classe `Veiculo` deve ter como atributos `private` um `string marca` e um objeto da classe `Motor`.
* O construtor de `Veiculo` deve receber os dados da marca e também os dados para inicializar o objeto `Motor` que ele contém.
* Crie um método em `Veiculo` para exibir suas informações e as informações de seu motor.

### Exercício 7: Composição de Classes
```cpp
#include <iostream>
#include <string>

class Motor {
private:
    int cilindrada;
public:
    Motor(int c = 1000) : cilindrada(c) {} // Construtor com valor padrão

    int getCilindrada() {
        return cilindrada;
    }
};

class Veiculo {
private:
    std::string marca;
    Motor motor; // Objeto Motor como atributo
public:
    // O construtor de Veiculo inicializa seus membros, incluindo o objeto motor
    Veiculo(std::string m, int c) : marca(m), motor(c) {}

    void exibirInfo() {
        std::cout << "Veiculo da marca: " << marca << std::endl;
        std::cout << "Cilindrada do motor: " << motor.getCilindrada() << "cc" << std::endl;
    }
};

int main() {
    Veiculo meuVeiculo("Volkswagen", 1600);
    meuVeiculo.exibirInfo();

    return 0;
}
```

### Exercício 8: Membros `static`
Crie uma classe `Filme`.
* Adicione um atributo `private static int contadorFilmes;` para contar quantos objetos `Filme` foram criados.
* No construtor da classe, incremente o contador estático.
* Crie um método `public static int getContadorFilmes()` que retorne o valor do contador.
* Na `main`, crie vários objetos `Filme` e, em seguida, chame o método estático para verificar quantos filmes foram instanciados, sem precisar de um objeto (ex: `Filme::getContadorFilmes()`).

### Exercício 8: Membros `static`
```cpp
#include <iostream>
#include <string>

class Filme {
private:
    std::string titulo;
    static int contadorFilmes; // Atributo estático

public:
    Filme(std::string t) : titulo(t) {
        contadorFilmes++; // Incrementa o contador a cada objeto criado
    }

    // Método estático
    static int getContadorFilmes() {
        return contadorFilmes;
    }
};

// Inicialização do membro estático fora da classe
int Filme::contadorFilmes = 0;

int main() {
    std::cout << "Total de filmes no inicio: " << Filme::getContadorFilmes() << std::endl;

    Filme f1("O Poderoso Chefao");
    Filme f2("Star Wars");
    Filme f3("Interestelar");

    std::cout << "Total de filmes apos criacao: " << Filme::getContadorFilmes() << std::endl;

    return 0;
}
```

### Exercício 9: Destrutor
Crie uma classe `Recurso`.
* O construtor da classe deve imprimir uma mensagem como "Recurso alocado.".
* O destrutor da classe (`~Recurso()`) deve imprimir uma mensagem como "Recurso liberado.".
* Na `main`, crie uma função e, dentro dela, crie um objeto `Recurso`. Observe que a mensagem do destrutor é exibida automaticamente quando o objeto sai de escopo (a função termina).

### Exercício 9: Destrutor
```cpp
#include <iostream>

class Recurso {
public:
    // Construtor
    Recurso() {
        std::cout << "Recurso alocado." << std::endl;
    }
    
    // Destrutor
    ~Recurso() {
        std::cout << "Recurso liberado." << std::endl;
    }
};

void testarEscopo() {
    std::cout << "Entrando na funcao testarEscopo()." << std::endl;
    Recurso r_local; // Objeto criado no escopo da função
    std::cout << "Saindo da funcao testarEscopo()." << std::endl;
    // O destrutor de r_local será chamado aqui automaticamente
}

int main() {
    std::cout << "Inicio do programa." << std::endl;
    testarEscopo();
    std::cout << "Fim do programa." << std::endl;
    return 0;
}
```

### Exercício 10: Sobrecarga de Operadores
Crie uma classe `Ponto2D` com atributos `private double x` e `double y`.
* Sobrecarregue o operador `+` para que seja possível somar dois objetos `Ponto2D`. A soma de `(x1, y1) + (x2, y2)` deve resultar em um novo ponto `(x1+x2, y1+y2)`.
* Sobrecarregue o operador `<<` (do `cout`) para que seja possível imprimir um objeto `Ponto2D` diretamente (ex: `cout << meuPonto;`), exibindo suas coordenadas no formato `(x, y)`.
* Na `main`, crie dois pontos, some-os e imprima o resultado.

### Exercício 10: Sobrecarga de Operadores
```cpp
#include <iostream>

class Ponto2D {
private:
    double x, y;
public:
    Ponto2D(double x_val = 0.0, double y_val = 0.0) : x(x_val), y(y_val) {}

    // Sobrecarga do operador + como um método da classe
    Ponto2D operator+(const Ponto2D& outro) const {
        return Ponto2D(this->x + outro.x, this->y + outro.y);
    }
    
    // Declara a sobrecarga do operador << como uma função "amiga" (friend)
    friend std::ostream& operator<<(std::ostream& os, const Ponto2D& p);
};

// Implementação da função amiga para sobrecarregar o operador <<
std::ostream& operator<<(std::ostream& os, const Ponto2D& p) {
    os << "(" << p.x << ", " << p.y << ")";
    return os;
}

int main() {
    Ponto2D p1(3.0, 4.0);
    Ponto2D p2(1.5, 2.5);

    Ponto2D p3 = p1 + p2; // Usa o operador+ sobrecarregado

    // Usa o operador<< sobrecarregado
    std::cout << "Ponto 1: " << p1 << std::endl;
    std::cout << "Ponto 2: " << p2 << std::endl;
    std::cout << "Soma (Ponto 3): " << p3 << std::endl;

    return 0;
}
```

## Exercícios focados em Herança

### Exercício 1: Herança Simples
Crie uma classe base chamada `Animal` com um método `public comer()` que exibe "Este animal esta comendo.". Em seguida, crie uma classe derivada chamada `Cachorro` que herda de `Animal`. A classe `Cachorro` deve ter um método `public latir()` que exibe "Au au!". Na `main`, crie um objeto da classe `Cachorro` e chame ambos os métodos `comer()` e `latir()`.

### Exercício 1: Herança Simples
```cpp
#include <iostream>

// Classe Base
class Animal {
public:
    void comer() {
        std::cout << "Este animal esta comendo." << std::endl;
    }
};

// Classe Derivada
class Cachorro : public Animal {
public:
    void latir() {
        std::cout << "Au au!" << std::endl;
    }
};

int main() {
    Cachorro meuCachorro;
    meuCachorro.comer(); // Método herdado da classe Animal
    meuCachorro.latir(); // Método próprio da classe Cachorro
    return 0;
}
```

### Exercício 2: Membros `protected`
Crie uma classe base `Veiculo` com um atributo `protected string marca`. Crie uma classe derivada `Carro` que herda de `Veiculo`. A classe `Carro` deve ter um atributo `private string modelo` e um construtor que inicialize tanto a `marca` (do `Veiculo`) quanto o `modelo`. Crie um método em `Carro` para exibir a marca e o modelo.

### Exercício 2: Membros `protected`
```cpp
#include <iostream>
#include <string>

// Classe Base
class Veiculo {
protected:
    std::string marca;

public:
    Veiculo(std::string m) : marca(m) {}
};

// Classe Derivada
class Carro : public Veiculo {
private:
    std::string modelo;

public:
    // Construtor do Carro chama o construtor do Veiculo
    Carro(std::string m, std::string mod) : Veiculo(m), modelo(mod) {}

    void exibirInfo() {
        // 'marca' é acessível aqui porque é 'protected' na classe base
        std::cout << "Marca: " << marca << std::endl;
        std::cout << "Modelo: " << modelo << std::endl;
    }
};

int main() {
    Carro meuCarro("Ford", "Focus");
    meuCarro.exibirInfo();
    return 0;
}
```


### Exercício 3: Ordem dos Construtores e Destrutores
Crie uma classe `Base` e uma classe `Derivada`. No construtor de cada classe, exiba uma mensagem (ex: "Construtor da Base chamado."). Faça o mesmo para os destrutores (ex: "Destrutor da Base chamado."). Na `main`, apenas crie um objeto da classe `Derivada` e observe a ordem em que os construtores e destrutores são chamados.

### Exercício 3: Ordem dos Construtores e Destrutores
```cpp
#include <iostream>

class Base {
public:
    Base() {
        std::cout << "Construtor da Base chamado." << std::endl;
    }
    ~Base() {
        std::cout << "Destrutor da Base chamado." << std::endl;
    }
};

class Derivada : public Base {
public:
    Derivada() {
        std::cout << "Construtor da Derivada chamado." << std::endl;
    }
    ~Derivada() {
        std::cout << "Destrutor da Derivada chamado." << std::endl;
    }
};

int main() {
    std::cout << "Criando objeto da classe Derivada..." << std::endl;
    Derivada d;
    std::cout << "O objeto sera destruido ao final de main()." << std::endl;
    // Ordem esperada: Construtor Base -> Construtor Derivada -> Destrutor Derivada -> Destrutor Base
    return 0;
}
```

### Exercício 4: Chamando o Construtor da Classe Base
Crie uma classe `Pessoa` com um construtor que aceita um `string nome`. Crie uma classe `Estudante` que herda de `Pessoa` e adiciona um atributo `int matricula`. O construtor de `Estudante` deve aceitar um nome e uma matrícula, e ele deve chamar o construtor da classe base `Pessoa` para inicializar o nome, usando a lista de inicialização de membros.

### Exercício 4: Chamando o Construtor da Classe Base
```cpp
#include <iostream>
#include <string>

class Pessoa {
protected:
    std::string nome;
public:
    Pessoa(std::string n) : nome(n) {}
    
    std::string getNome() const {
        return nome;
    }
};

class Estudante : public Pessoa {
private:
    int matricula;
public:
    // Chama o construtor de Pessoa na lista de inicialização
    Estudante(std::string n, int m) : Pessoa(n), matricula(m) {}
    
    int getMatricula() const {
        return matricula;
    }
};

int main() {
    Estudante e("Joana", 12345);
    std::cout << "Nome do estudante: " << e.getNome() << std::endl;
    std::cout << "Matricula: " << e.getMatricula() << std::endl;
    return 0;
}
```

### Exercício 5: Sobrescrita de Métodos (Method Overriding)
Crie uma classe `Funcionario` com um método `calcularSalario()` que retorna um valor fixo (ex: 1500.0). Crie uma classe `Gerente` que herda de `Funcionario` e sobrescreve o método `calcularSalario()` para retornar um valor maior, adicionando um bônus (ex: 1500.0 + 500.0). Na `main`, crie um objeto de cada tipo e chame `calcularSalario()` em cada um para ver os resultados diferentes.

### Exercício 5: Sobrescrita de Métodos (Method Overriding)
```cpp
#include <iostream>

class Funcionario {
public:
    double calcularSalario() {
        return 1500.0;
    }
};

class Gerente : public Funcionario {
public:
    // Sobrescreve o método da classe base
    double calcularSalario() {
        // Poderia ser Funcionario::calcularSalario() + 500.0;
        return 2000.0; 
    }
};

int main() {
    Funcionario f;
    Gerente g;

    std::cout << "Salario do Funcionario: R$" << f.calcularSalario() << std::endl;
    std::cout << "Salario do Gerente: R$" << g.calcularSalario() << std::endl;
    return 0;
}
```

### Exercício 6: Funções Virtuais e Polimorfismo
Modifique o exercício 5. Na classe `Funcionario`, declare o método `calcularSalario()` como `virtual`. Na `main`, crie um ponteiro do tipo `Funcionario*`. Faça este ponteiro apontar para um objeto `Funcionario` e chame o método. Depois, faça o mesmo ponteiro apontar para um objeto `Gerente` e chame o método novamente. Observe como o método correto é chamado em cada caso.


### Exercício 6: Funções Virtuais e Polimorfismo
```cpp
#include <iostream>

class Funcionario {
public:
    // Método declarado como virtual
    virtual double calcularSalario() {
        return 1500.0;
    }
    // É uma boa prática ter um destrutor virtual na classe base
    virtual ~Funcionario() {}
};

class Gerente : public Funcionario {
public:
    // A palavra-chave 'override' garante que estamos sobrescrevendo um método virtual
    double calcularSalario() override {
        return 2000.0;
    }
};

int main() {
    Funcionario f;
    Gerente g;
    Funcionario* ptr; // Ponteiro da classe base

    ptr = &f;
    std::cout << "Salario (ponteiro para Funcionario): R$" << ptr->calcularSalario() << std::endl;

    ptr = &g;
    // Graças à função virtual, o método de Gerente é chamado
    std::cout << "Salario (ponteiro para Gerente): R$" << ptr->calcularSalario() << std::endl;

    return 0;
}
```

### Exercício 7: Hierarquia Polimórfica
Crie uma classe base `Forma` com um método `virtual double area()`. Crie três classes derivadas: `Retangulo`, `Circulo` e `Triangulo`. Cada uma deve sobrescrever o método `area()` para calcular a área da forma geométrica correspondente. Na `main`, crie um `std::vector` de ponteiros `Forma*` e adicione objetos das três classes derivadas a ele. Percorra o vetor e, para cada forma, imprima sua área calculada.
**Importante:** Lembre-se de declarar o destrutor da classe base `Forma` como `virtual`.

### Exercício 7: Hierarquia Polimórfica
```cpp
#include <iostream>
#include <vector>
#include <cmath>

// Classe Base
class Forma {
public:
    virtual double area() const { return 0; } // método virtual
    virtual ~Forma() { std::cout << "Destrutor de Forma\n"; } // destrutor virtual
};

// Classes Derivadas
class Retangulo : public Forma {
private:
    double largura, altura;
public:
    Retangulo(double l, double a) : largura(l), altura(a) {}
    double area() const override { return largura * altura; }
    ~Retangulo() { std::cout << "Destrutor de Retangulo\n"; }
};

class Circulo : public Forma {
private:
    double raio;
public:
    Circulo(double r) : raio(r) {}
    double area() const override { return M_PI * raio * raio; }
    ~Circulo() { std::cout << "Destrutor de Circulo\n"; }
};

int main() {
    std::vector<Forma*> formas;
    formas.push_back(new Retangulo(10, 5));
    formas.push_back(new Circulo(7));

    for (const auto& forma : formas) {
        std::cout << "Area: " << forma->area() << std::endl;
    }

    // Libera a memória
    for (const auto& forma : formas) {
        delete forma;
    }

    return 0;
}
```

### Exercício 8: Classes Abstratas e Funções Virtuais Puras
Transforme a classe `Forma` do exercício anterior em uma classe abstrata. Para isso, torne o método `area()` uma função virtual pura (ex: `virtual double area() = 0;`). Tente instanciar um objeto da classe `Forma` na `main` e observe que o compilador irá gerar um erro. O restante do programa (usar as classes derivadas) deve continuar funcionando.

### Exercício 8: Classes Abstratas e Funções Virtuais Puras
```cpp
#include <iostream>
#include <cmath>

// Classe Abstrata
class Forma {
public:
    // Função virtual pura torna a classe abstrata
    virtual double area() const = 0; 
    virtual ~Forma() {}
};

class Circulo : public Forma {
private:
    double raio;
public:
    Circulo(double r) : raio(r) {}
    // A classe derivada é obrigada a implementar o método puro
    double area() const override { return M_PI * raio * raio; }
};

int main() {
    // Forma f; // ERRO DE COMPILAÇÃO! Não se pode instanciar uma classe abstrata.
    
    Forma* ptrForma = new Circulo(10.0);
    std::cout << "Area do circulo: " << ptrForma->area() << std::endl;
    
    delete ptrForma;
    return 0;
}
```

### Exercício 9: Herança Múltipla
Crie uma classe `Impressora` com um método `imprimir(string doc)`. Crie uma classe `Scanner` com um método `digitalizar(string doc)`. Crie uma terceira classe, `Multifuncional`, que herda publicamente de `Impressora` e `Scanner`. Na `main`, crie um objeto `Multifuncional` e mostre que ele é capaz de chamar tanto o método `imprimir()` quanto o `digitalizar()`.

### Exercício 9: Herança Múltipla
```cpp
#include <iostream>
#include <string>

class Impressora {
public:
    void imprimir(std::string doc) {
        std::cout << "Imprimindo: " << doc << std::endl;
    }
};

class Scanner {
public:
    void digitalizar(std::string doc) {
        std::cout << "Digitalizando: " << doc << std::endl;
    }
};

// Herda de ambas as classes
class Multifuncional : public Impressora, public Scanner {};

int main() {
    Multifuncional m;
    m.imprimir("Relatorio.pdf");     // Método herdado de Impressora
    m.digitalizar("Documento.jpg"); // Método herdado de Scanner
    return 0;
}
```

### Exercício 10: Herança `protected`
Crie uma classe `Dispositivo` com um método `public void ligar()` e um método `protected void reiniciar()`. Crie uma classe `Computador` que herda de forma `protected` de `Dispositivo`.
* Dentro de um método da classe `Computador`, mostre que é possível chamar tanto `ligar()` quanto `reiniciar()`.
* Na `main`, crie um objeto `Computador` e mostre que você **não pode** chamar o método `ligar()` diretamente, pois ele se tornou `protected` na classe `Computador`.


### Exercício 10: Herança `protected`
```cpp
#include <iostream>

class Dispositivo {
public:
    void ligar() {
        std::cout << "Dispositivo ligado.\n";
    }
protected:
    void reiniciar() {
        std::cout << "Dispositivo reiniciando.\n";
    }
};

// Com a herança protected, membros public e protected da base
// se tornam protected na classe derivada.
class Computador : protected Dispositivo {
public:
    void usarComputador() {
        std::cout << "Usando o computador...\n";
        ligar();     // OK: 'ligar' é protected aqui dentro, então é acessível.
        reiniciar(); // OK: 'reiniciar' continua protected e acessível.
    }
};

int main() {
    Computador pc;
    pc.usarComputador();
    
    // pc.ligar(); // ERRO DE COMPILAÇÃO!
    // 'ligar' se tornou um membro protected de Computador,
    // então não pode ser acessado de fora da classe ou de suas derivadas.

    return 0;
}
```

---