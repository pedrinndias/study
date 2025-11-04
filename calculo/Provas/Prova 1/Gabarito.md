
# Fórmulas úteis (do documento): 
* **Área:** $A = \int_{a}^{b} (\text{função de cima} - \text{função de baixo}) dx$ 
* **Comprimento de Arco:** $L = \int_{a}^{b} \sqrt{1 + (dy/dx)^2} dx$ 
* **Área de Superfície (eixo x):** $S = \int_{a}^{b} 2\pi y \sqrt{1 + (dy/dx)^2} dx$ 
* **Área de Superfície (eixo y):** $S = \int_{a}^{b} 2\pi x \sqrt{1 + (dy/dx)^2} dx$ 
* **Centro de Massa (x_barra):** $\bar{x} = (1/A) \int_{a}^{b} x[f(x) - g(x)] dx$ 
* **Centro de Massa (y_barra):** $\bar{y} = (1/A) \int_{a}^{b} (1/2) ([f(x)]^2 - [g(x)]^2) dx$ 

---


## Questão 1

### Seção 5.3 (p. 34 do PDF)

**1. $\int_{1}^{3}(x^{2}+2x-4)dx$**

* **Técnica:** Aplicação direta do Teorema Fundamental do Cálculo (TFC).
* **Primitiva:** Encontramos a primitiva de cada termo:
    $$\int(x^{2}+2x-4)dx = \frac{x^3}{3} + 2\frac{x^2}{2} - 4x = \frac{x^3}{3} + x^2 - 4x$$
* **Cálculo:** Aplicamos os limites de integração [a, b]: $F(b) - F(a)$.
    $$\left[ \frac{x^3}{3} + x^2 - 4x \right]_{1}^{3}$$
    $$= \left( \frac{3^3}{3} + 3^2 - 4(3) \right) - \left( \frac{1^3}{3} + 1^2 - 4(1) \right)$$
    $$= (9 + 9 - 12) - \left( \frac{1}{3} + 1 - 4 \right)$$
    $$= (6) - \left( \frac{1}{3} - 3 \right) = 6 - \left( -\frac{8}{3} \right)$$
    $$= 6 + \frac{8}{3} = \frac{18}{3} + \frac{8}{3} = \frac{26}{3}$$

**2. $\int_{0}^{2}(\frac{4}{5}t^{3}-\frac{3}{4}t^{2}+\frac{3}{5}t)dt$**

* **Técnica:** TFC, primitiva de polinômio.
* **Primitiva:**
    $$\int(\frac{4}{5}t^{3}-\frac{3}{4}t^{2}+\frac{3}{5}t)dt = \frac{4}{5}\frac{t^4}{4} - \frac{3}{4}\frac{t^3}{3} + \frac{3}{5}\frac{t^2}{2} = \frac{t^4}{5} - \frac{t^3}{4} + \frac{3t^2}{10}$$
* **Cálculo:**
    $$\left[ \frac{t^4}{5} - \frac{t^3}{4} + \frac{3t^2}{10} \right]_{0}^{2}$$
    $$= \left( \frac{2^4}{5} - \frac{2^3}{4} + \frac{3(2^2)}{10} \right) - (0)$$
    $$= \frac{16}{5} - \frac{8}{4} + \frac{12}{10} = \frac{16}{5} - 2 + \frac{6}{5}$$
    $$= \frac{22}{5} - 2 = \frac{22}{5} - \frac{10}{5} = \frac{12}{5}$$

**3. $\int_{1}^{9}\sqrt{x}dx$**

* **Técnica:** TFC, regra da potência ($x^{1/2}$).
* **Primitiva:**
    $$\int x^{1/2}dx = \frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2}$$
* **Cálculo:**
    $$\left[ \frac{2}{3}x^{3/2} \right]_{1}^{9} = \frac{2}{3}(9^{3/2}) - \frac{2}{3}(1^{3/2})$$
    $$= \frac{2}{3}(\sqrt{9})^3 - \frac{2}{3}(1) = \frac{2}{3}(3)^3 - \frac{2}{3}$$
    $$= \frac{2}{3}(27) - \frac{2}{3} = 18 - \frac{2}{3} = \frac{54-2}{3} = \frac{52}{3}$$

**4. $\int_{1}^{3}(2x+\frac{1}{x})dx$**

* **Técnica:** TFC, primitiva de $1/x$.
* **Primitiva:**
    $$\int(2x+\frac{1}{x})dx = 2\frac{x^2}{2} + \ln|x| = x^2 + \ln|x|$$
* **Cálculo:**
    $$\left[ x^2 + \ln|x| \right]_{1}^{3} = (3^2 + \ln|3|) - (1^2 + \ln|1|)$$
    $$= (9 + \ln 3) - (1 + 0) = 8 + \ln 3$$

**5. $\int_{0}^{4}2^{s}ds$**

* **Técnica:** TFC, primitiva de função exponencial $a^x$.
* **Primitiva:** A primitiva de $a^x$ é $\frac{a^x}{\ln a}$.
    $$\int 2^s ds = \frac{2^s}{\ln 2}$$
* **Cálculo:**
    $$\left[ \frac{2^s}{\ln 2} \right]_{0}^{4} = \frac{2^4}{\ln 2} - \frac{2^0}{\ln 2}$$
    $$= \frac{16}{\ln 2} - \frac{1}{\ln 2} = \frac{15}{\ln 2}$$

## Questão 2

**Resolução:**

1.  **Fórmula:** Para uma rotação em torno do **eixo y** usando uma função $y = f(x)$, a fórmula da área da superfície ($S$) é $S = \int 2\pi x \, ds$.
2.  **Elemento de Arco ($ds$):** Como os limites de integração são dados em $x$ (de 1 a 2), usaremos o diferencial de arco em termos de $dx$: $ds = \sqrt{1 + (\frac{dy}{dx})^2} \, dx$.
3.  **Derivada:**
    * Função: $y = x^2$
    * Derivada: $\frac{dy}{dx} = 2x$
4.  **Montagem da Integral:** Substituímos os componentes na fórmula:
    * $S = \int_{a}^{b} 2\pi x \sqrt{1 + (\frac{dy}{dx})^2} \, dx$
    * $S = \int_{1}^{2} 2\pi x \sqrt{1 + (2x)^2} \, dx$
    * $S = \int_{1}^{2} 2\pi x \sqrt{1 + 4x^2} \, dx$

A integral que fornece a área da superfície é:
$$S = \int_{1}^{2} 2\pi x \sqrt{1 + 4x^2} \, dx$$
*(Esta integral é resolvida no Exemplo 3 da Seção 8.2 do documento)*

## Questão 3

### Questão 3.1 (Área) 

**Resolução:** 
1. **Pontos de Interseção:** Primeiro, igualamos as duas funções para encontrar os limites $a$ e $b$. $f(x) = g(x)$ $5 - x^2 = x^2 - 3$ $8 = 2x^2$ $x^2 = 4$ $x = \pm 2$ Os limites de integração são $a = -2$ e $b = 2$.

2. **Função de Cima vs. Baixo:** No intervalo $[-2, 2]$, escolhemos um ponto de teste, como $x=0$: * $f(0) = 5 - 0^2 = 5$ (Cima) * $g(0) = 0^2 - 3 = -3$ (Baixo) Portanto, $f(x)$ é a função de cima e $g(x)$ é a função de baixo.
   
3. **Integral da Área:** Usamos a fórmula $A = \int_{a}^{b} [f(x) - g(x)] dx$. $A = \int_{-2}^{2} [ (5 - x^2) - (x^2 - 3) ] dx$ $A = \int_{-2}^{2} [ 5 - x^2 - x^2 + 3 ] dx$ $A = \int_{-2}^{2} (8 - 2x^2) dx$

**Resposta Final:** A integral para a Área é: $A = \int_{-2}^{2} (8 - 2x^2) dx$


### Questão 3.2 (Comprimento de Arco) 

**Resolução:**
1. **Fórmula:** A fórmula do comprimento de arco é $L = \int_{a}^{b} \sqrt{1 + [f'(x)]^2} dx$.
   
2. **Derivada (f'(x)):** Primeiro, encontramos a derivada de $y = f(x)$. $f(x) = \frac{2}{3}x^{3/2}$ $f'(x) = \frac{2}{3} \cdot \frac{3}{2} x^{(3/2 - 1)} = x^{1/2} = \sqrt{x}$
   
3. **Componente $[f'(x)]^2$:** $[f'(x)]^2 = (\sqrt{x})^2 = x$
   
4. **Integral:** Substituímos na fórmula com $a = 0$ e $b = 3$. $L = \int_{0}^{3} \sqrt{1 + x} dx$

**Resposta Final:** A integral para o Comprimento de Arco é: $L = \int_{0}^{3} \sqrt{1 + x} dx$


### Questão 3.3 (Centro de Massa - Completo) 

**Resolução:**

1. **Limites e Funções:** * Interseção: $x^2 = 4 \implies x = \pm 2$. Os limites são $a = -2$ e $b = 2$. * Função de Cima: $f(x) = 4$ * Função de Baixo: $g(x) = x^2$ * Fórmulas baseadas na Seção 8.3 do PDF.
   
2. **Integral da Área (A):** $A = \int_{a}^{b} [f(x) - g(x)] dx$ $A = \int_{-2}^{2} (4 - x^2) dx$
   
3. **Integral de $\bar{x}$ (x\_barra):** $\bar{x} = \frac{1}{A} \int_{a}^{b} x [f(x) - g(x)] dx$ $\bar{x} = \frac{1}{A} \int_{-2}^{2} x (4 - x^2) dx$ *(Nota: Devido à simetria da região em torno do eixo y, $\bar{x}$ será 0.)*
   
4. **Integral de $\bar{y}$ (y\_barra):** $\bar{y} = \frac{1}{A} \int_{a}^{b} \frac{1}{2} ([f(x)]^2 - [g(x)]^2) dx$ $\bar{y} = \frac{1}{A} \int_{-2}^{2} \frac{1}{2} [ (4)^2 - (x^2)^2 ] dx$ $\bar{y} = \frac{1}{A} \int_{-2}^{2} \frac{1}{2} (16 - x^4) dx$

**Respostas Finais:**
* **Área:** $A = \int_{-2}^{2} (4 - x^2) dx$ * **$\bar{x}$:** $\bar{x} = \frac{1}{A} \int_{-2}^{2} x (4 - x^2) dx$ * **$\bar{y}$:** $\bar{y} = \frac{1}{A} \int_{-2}^{2} \frac{1}{2} (16 - x^4) dx$
