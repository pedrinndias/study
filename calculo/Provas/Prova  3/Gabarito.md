
# Fórmulas úteis (do documento): 
* **Área:** $A = \int_{a}^{b} (\text{função de cima} - \text{função de baixo}) dx$ 
* **Comprimento de Arco:** $L = \int_{a}^{b} \sqrt{1 + (dy/dx)^2} dx$ 
* **Área de Superfície (eixo x):** $S = \int_{a}^{b} 2\pi y \sqrt{1 + (dy/dx)^2} dx$ 
* **Área de Superfície (eixo y):** $S = \int_{a}^{b} 2\pi x \sqrt{1 + (dy/dx)^2} dx$ 
* **Centro de Massa (x_barra):** $\bar{x} = (1/A) \int_{a}^{b} x[f(x) - g(x)] dx$ 
* **Centro de Massa (y_barra):** $\bar{y} = (1/A) \int_{a}^{b} (1/2) ([f(x)]^2 - [g(x)]^2) dx$ 

---


## Questão 1


---

### Seção 5.5 (p. 51 do PDF)

**13. $\int x^{2}\sqrt{x^{3}+1}dx$**

* **Técnica:** Regra da Substituição (Substituição u).
* **Substituição:** Seja $u = x^3+1$.
    Então $du = 3x^2 dx$, o que implica $x^2 dx = \frac{du}{3}$.
* **Integral em u:**
    $$\int \sqrt{u} \left(\frac{du}{3}\right) = \frac{1}{3} \int u^{1/2} du$$
* **Primitiva em u:**
    $$\frac{1}{3} \left( \frac{u^{3/2}}{3/2} \right) + C = \frac{1}{3} \cdot \frac{2}{3} u^{3/2} + C = \frac{2}{9}u^{3/2} + C$$
* **Solução (em x):**
    $$\frac{2}{9}(x^3+1)^{3/2} + C$$

**14. $\int x\sqrt{1-x^{2}}dx$**

* **Técnica:** Regra da Substituição.
* **Substituição:** Seja $u = 1-x^2$.
    Então $du = -2x dx$, o que implica $x dx = -\frac{du}{2}$.
* **Integral em u:**
    $$\int \sqrt{u} \left(-\frac{du}{2}\right) = -\frac{1}{2} \int u^{1/2} du$$
* **Primitiva em u:**
    $$-\frac{1}{2} \left( \frac{u^{3/2}}{3/2} \right) + C = -\frac{1}{2} \cdot \frac{2}{3} u^{3/2} + C = -\frac{1}{3}u^{3/2} + C$$
* **Solução (em x):**
    $$-\frac{1}{3}(1-x^2)^{3/2} + C$$

**15. $\int\frac{dx}{4x+7}$**

* **Técnica:** Regra da Substituição.
* **Substituição:** Seja $u = 4x+7$.
    Então $du = 4 dx$, o que implica $dx = \frac{du}{4}$.
* **Integral em u:**
    $$\int \frac{1}{u} \left(\frac{du}{4}\right) = \frac{1}{4} \int \frac{1}{u} du$$
* **Primitiva em u:**
    $$\frac{1}{4} \ln|u| + C$$
* **Solução (em x):**
    $$\frac{1}{4}\ln|4x+7| + C$$

**16. $\int\frac{(\ln x)^{2}}{x}dx$**

* **Técnica:** Regra da Substituição.
* **Substituição:** Seja $u = \ln x$.
    Então $du = \frac{1}{x} dx$.
* **Integral em u:**
    $$\int u^2 du$$
* **Primitiva em u:**
    $$\frac{u^3}{3} + C$$
* **Solução (em x):**
    $$\frac{(\ln x)^3}{3} + C$$

**17. $\int\frac{1+x}{1+x^{2}}dx$**

* **Técnica:** Separar a fração. Esta é uma combinação de regras.
* **Reescrita:**
    $$\int\frac{1}{1+x^2}dx + \int\frac{x}{1+x^2}dx$$
* **Primeira Integral:** É a primitiva direta do arco-tangente:
    $$\int\frac{1}{1+x^2}dx = \arctan(x)$$
* **Segunda Integral:** Usamos a substituição $u = 1+x^2$.
    Então $du = 2x dx$, o que implica $x dx = \frac{du}{2}$.
    $$\int\frac{1}{u} \left(\frac{du}{2}\right) = \frac{1}{2} \int \frac{1}{u} du = \frac{1}{2}\ln|u| = \frac{1}{2}\ln(1+x^2)$$
    (Obs: $|u|$ não é necessário pois $1+x^2$ é sempre positivo).
* **Solução Final:**
    $$\arctan(x) + \frac{1}{2}\ln(1+x^2) + C$$

**18. $\int_{0}^{1}\cos(\pi t/2)dt$**

* **Técnica:** Regra da Substituição para integrais definidas.
* **Substituição:** Seja $u = \frac{\pi t}{2}$.
    Então $du = \frac{\pi}{2} dt$, o que implica $dt = \frac{2}{\pi} du$.
* **Ajuste dos Limites:**
    * Quando $t=0$, $u = \frac{\pi(0)}{2} = 0$.
    * Quando $t=1$, $u = \frac{\pi(1)}{2} = \frac{\pi}{2}$.
* **Integral e Cálculo:**
    $$\int_{0}^{\pi/2} \cos(u) \left(\frac{2}{\pi} du\right) = \frac{2}{\pi} \int_{0}^{\pi/2} \cos(u) du$$
    $$= \frac{2}{\pi} [\sin(u)]_{0}^{\pi/2}$$
    $$= \frac{2}{\pi} \left( \sin\left(\frac{\pi}{2}\right) - \sin(0) \right)$$
    $$= \frac{2}{\pi} (1 - 0) = \frac{2}{\pi}$$



## Questão 2



**Resolução:**

1.  **Fórmula:** A força hidrostática ($F$) é a integral da pressão ($\rho g \cdot \text{profundidade}$) multiplicada pela área de faixas horizontais ($w(x) \cdot dx$).
    * $F = \int_{a}^{b} \rho g \cdot (\text{profundidade}) \cdot (\text{largura da faixa}) \, dx$
2.  **Configuração:**
    * Vamos definir um eixo $x$ vertical apontando para baixo, com $x=0$ na superfície da água (o topo da placa).
    * A profundidade de qualquer faixa é $x$.
    * A placa se estende do topo ($x=0$) até a ponta inferior ($x=6$). Portanto, os limites de integração são $a=0$ e $b=6$.
3.  **Largura da Faixa ($w(x)$):** Precisamos expressar a largura da placa $w$ como uma função da profundidade $x$.
    * No topo ($x=0$), a largura $w$ é 4 m.
    * Na ponta ($x=6$), a largura $w$ é 0 m.
    * Usando triângulos semelhantes (como no Exemplo 1 da Seção 8.3), a razão entre a largura da faixa $w(x)$ e a distância da faixa até a ponta ($6-x$) é igual à razão entre a largura total (4) e a altura total (6):
        $\frac{w(x)}{6-x} = \frac{4}{6}$
    * Resolvendo para $w(x)$:
        $w(x) = \frac{2}{3}(6-x) = 4 - \frac{2}{3}x$
4.  **Montagem da Integral:** Substituímos os componentes:
    * $\rho g = (1000)(9,8) = 9800$
    * Profundidade = $x$
    * Largura = $(4 - \frac{2}{3}x)$
    * $F = \int_{0}^{6} 9800 \cdot x \cdot (4 - \frac{2}{3}x) \, dx$

A integral que fornece a força hidrostática é:
$$F = 9800 \int_{0}^{6} x(4 - \frac{2}{3}x) \, dx$$


## Questão 3

### Questão 3.1 (Comprimento de Arco, eixo y) 

**Resolução:**

1. **Fórmula:** Para rotação em torno do eixo y, a fórmula é $S = \int_{c}^{d} 2\pi x \sqrt{1 + (x')^2} dy$.

2. **Componentes:** Precisamos de $x$ em função de $y$. * $y = \sqrt{x} \implies x = y^2$ * $x' = \frac{dx}{dy} = 2y$ * $(x')^2 = (2y)^2 = 4y^2$

3. **Integral:** Substituímos na fórmula com $c = 0$ e $d = 3$. $S = \int_{0}^{3} 2\pi (y^2) \sqrt{1 + 4y^2} dy$

**Resposta Final:** A integral para a Área da Superfície é: $S = \int_{0}^{3} 2\pi y^2 \sqrt{1 + 4y^2} dy$


### Questão 3.2 (Área de Superfície, eixo x) 

**Resolução:**

1. **Fórmula (Método dos Discos):** O volume de revolução em torno do eixo x é dado por $V = \int_{a}^{b} \pi [R(x)]^2 dx$, onde $R(x)$ é o raio do disco.

2. **Componentes:** * O raio $R(x)$ é a distância da curva $y = e^x$ até o eixo de rotação ($y=0$). * $R(x) = e^x - 0 = e^x$ * $[R(x)]^2 = (e^x)^2 = e^{2x}$

3. **Integral:** Substituímos na fórmula com $a = 0$ e $b = 1$. $V = \int_{0}^{1} \pi (e^{2x}) dx$

**Resposta Final:** A integral para o Volume é: $V = \pi \int_{0}^{1} e^{2x} dx$


### Questão 3.3 (Centro de Massa - Foco em x_barra) 
**Resolução:**

1. **Pontos de Interseção:** $x = x^2$ $x^2 - x = 0$ $x(x - 1) = 0$ $x = 0$ e $x = 1$. Os limites são $a = 0$ e $b = 1$.

2. **Funções e Fórmulas:** * No intervalo $[0, 1]$, teste $x=0.5$: $y=0.5$ (reta) e $y=0.25$ (parábola). * Função de Cima: $f(x) = x$ * Função de Baixo: $g(x) = x^2$ * Fórmula (Exemplo 6, Seção 8.3). 

3. **Área (A) - (Necessária para $\bar{y}$):** $A = \int_{0}^{1} [f(x) - g(x)] dx = \int_{0}^{1} (x - x^2) dx$

4. **Integral de $\bar{y}$ (y\_barra):** $\bar{y} = \frac{1}{A} \int_{a}^{b} \frac{1}{2} ([f(x)]^2 - [g(x)]^2) dx$ $\bar{y} = \frac{1}{A} \int_{0}^{1} \frac{1}{2} [ (x)^2 - (x^2)^2 ] dx$ $\bar{y} = \frac{1}{A} \int_{0}^{1} \frac{1}{2} (x^2 - x^4) dx$

**Resposta Final:** A integral para $\bar{y}$ é: $\bar{y} = \frac{1}{A} \int_{0}^{1} \frac{1}{2} (x^2 - x^4) dx$, onde $A = \int_{0}^{1} (x - x^2) dx$.

