
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

### Seção 5.4 (p. 42 do PDF)

**6. $\int(x+\cos x)dx$**

* **Técnica:** Integral indefinida, primitiva de soma.
* **Solução:**
    $$\int x dx + \int \cos x dx = \frac{x^2}{2} + \sin x + C$$

**7. $\int(e^{x}+\frac{1}{x})dx$**

* **Técnica:** Integral indefinida, primitiva de $e^x$ e $1/x$.
* **Solução:**
    $$\int e^x dx + \int \frac{1}{x} dx = e^x + \ln|x| + C$$

**8. $\int(2+\text{tg}^{2}\theta)d\theta$**

* **Técnica:** Identidade trigonométrica $\sec^2\theta = 1 + \tan^2\theta$.
* **Reescrita:**
    $$\int(2 + (\sec^2\theta - 1))d\theta = \int(1 + \sec^2\theta)d\theta$$
* **Solução:**
    $$\int 1 d\theta + \int \sec^2\theta d\theta = \theta + \tan\theta + C$$

**9. $\int\frac{\text{sen } 2x}{\text{sen } x}dx$**

* **Técnica:** Identidade trigonométrica de ângulo duplo: $\sin(2x) = 2\sin x \cos x$.
* **Reescrita:**
    $$\int\frac{2\sin x \cos x}{\sin x}dx = \int 2\cos x dx$$
* **Solução:**
    $$2\int \cos x dx = 2\sin x + C$$

**10. $\int_{1}^{3}(\frac{3x^{2}+4x+1}{x})dx$**

* **Técnica:** Simplificação algébrica (separar a fração).
* **Reescrita:**
    $$\int_{1}^{3} \left( \frac{3x^2}{x} + \frac{4x}{x} + \frac{1}{x} \right) dx = \int_{1}^{3} (3x + 4 + \frac{1}{x}) dx$$
* **Primitiva:**
    $$\frac{3x^2}{2} + 4x + \ln|x|$$
* **Cálculo:**
    $$\left[ \frac{3x^2}{2} + 4x + \ln|x| \right]_{1}^{3}$$
    $$= \left( \frac{3(3^2)}{2} + 4(3) + \ln 3 \right) - \left( \frac{3(1^2)}{2} + 4(1) + \ln 1 \right)$$
    $$= \left( \frac{27}{2} + 12 + \ln 3 \right) - \left( \frac{3}{2} + 4 + 0 \right)$$
    $$= \left( \frac{27}{2} - \frac{3}{2} \right) + (12 - 4) + \ln 3$$
    $$= \frac{24}{2} + 8 + \ln 3 = 12 + 8 + \ln 3 = 20 + \ln 3$$

**11. $\int_{0}^{\pi/4}\frac{1+\cos^{2}\theta}{\cos^{2}\theta}d\theta$**

* **Técnica:** Simplificação algébrica (separar a fração).
* **Reescrita:**
    $$\int_{0}^{\pi/4} \left( \frac{1}{\cos^2\theta} + \frac{\cos^2\theta}{\cos^2\theta} \right) d\theta = \int_{0}^{\pi/4} (\sec^2\theta + 1) d\theta$$
* **Primitiva:**
    $$\tan\theta + \theta$$
* **Cálculo:**
    $$\left[ \tan\theta + \theta \right]_{0}^{\pi/4} = \left( \tan\left(\frac{\pi}{4}\right) + \frac{\pi}{4} \right) - (\tan(0) + 0)$$
    $$= (1 + \frac{\pi}{4}) - (0) = 1 + \frac{\pi}{4}$$

**12. $\int_{-1}^{2}(x-2|x|)dx$**

* **Técnica:** Dividir a integral com base na definição de valor absoluto $|x|$.
    * Para $x \in [-1, 0)$, $|x| = -x$. A função é $x - 2(-x) = 3x$.
    * Para $x \in [0, 2]$, $|x| = x$. A função é $x - 2(x) = -x$.
* **Reescrita:**
    $$\int_{-1}^{0} 3x dx + \int_{0}^{2} (-x) dx$$
* **Cálculo:**
    $$\left[ \frac{3x^2}{2} \right]_{-1}^{0} + \left[ -\frac{x^2}{2} \right]_{0}^{2}$$
    $$= \left( 0 - \frac{3(-1)^2}{2} \right) + \left( -\frac{2^2}{2} - 0 \right)$$
    $$= -\frac{3}{2} - \frac{4}{2} = -\frac{7}{2}$$

## Questão 2

**Resolução:**

1.  **Fórmula:** A fórmula para o comprimento de arco ($L$) de uma curva $y = f(x)$ de $x=a$ até $x=b$ é $L = \int_{a}^{b} \sqrt{1 + (\frac{dy}{dx})^2} \, dx$.
2.  **Derivada:**
    * Função: $y = e^x$
    * Derivada: $\frac{dy}{dx} = e^x$
3.  **Montagem da Integral:** Substituímos os componentes e os limites ($a=1$, $b=3$):
    * $L = \int_{1}^{3} \sqrt{1 + (e^x)^2} \, dx$
    * $L = \int_{1}^{3} \sqrt{1 + e^{2x}} \, dx$

A integral que fornece o comprimento de arco é:
$$L = \int_{1}^{3} \sqrt{1 + e^{2x}} \, dx$$

## Questão 3

### Questão 3.1 (Área de Superfície, eixo y) 

**Resolução:**

1. **Fórmula:** Para rotação em torno do eixo x, a fórmula é $S = \int_{a}^{b} 2\pi y \sqrt{1 + (y')^2} dx$.
   
2. **Componentes:** * $y = x^3$ * $y' = 3x^2$ * $(y')^2 = (3x^2)^2 = 9x^4$

3. **Integral:** Substituímos na fórmula com $a = 0$ e $b = 2$. $S = \int_{0}^{2} 2\pi (x^3) \sqrt{1 + 9x^4} dx$

**Resposta Final:** A integral para a Área da Superfície é: $S = \int_{0}^{2} 2\pi x^3 \sqrt{1 + 9x^4} dx$

### Questão 3.2 (Volume de Revolução) 

**Resolução:**

1. **Fórmula:** Para rotação em torno do eixo y, a fórmula é $S = \int_{c}^{d} 2\pi x \sqrt{1 + (x')^2} dy$.

2. **Componentes:** Precisamos de $x$ em função de $y$. * $y = \sqrt{x} \implies x = y^2$ * $x' = \frac{dx}{dy} = 2y$ * $(x')^2 = (2y)^2 = 4y^2$

3. **Integral:** Substituímos na fórmula com $c = 0$ e $d = 3$. $S = \int_{0}^{3} 2\pi (y^2) \sqrt{1 + 4y^2} dy$

**Resposta Final:** A integral para a Área da Superfície é: $S = \int_{0}^{3} 2\pi y^2 \sqrt{1 + 4y^2} dy$


### Questão 3.3 (Centro de Massa - Foco em y_barra) 

**Resolução:**
1. **Limites e Funções:** * A região é limitada por $x=0$ e onde $y = \cos(x)$ cruza $y=0$. Isso ocorre em $x = \pi/2$. Os limites são $a = 0$ e $b = \pi/2$. * Função de Cima: $f(x) = \cos(x)$ * Função de Baixo: $g(x) = 0$ * Fórmula (Exemplo 5, Seção 8.3).

2. **Área (A) - (Necessária para $\bar{x}$):** $A = \int_{0}^{\pi/2} [\cos(x) - 0] dx = \int_{0}^{\pi/2} \cos(x) dx$

3. **Integral de $\bar{x}$ (x\_barra):** $\bar{x} = \frac{1}{A} \int_{a}^{b} x [f(x) - g(x)] dx$ $\bar{x} = \frac{1}{A} \int_{0}^{\pi/2} x (\cos(x) - 0) dx$ $\bar{x} = \frac{1}{A} \int_{0}^{\pi/2} x \cos(x) dx$
   
**Resposta Final:** A integral para $\bar{x}$ é: $\bar{x} = \frac{1}{A} \int_{0}^{\pi/2} x \cos(x) dx$, onde $A = \int_{0}^{\pi/2} \cos(x) dx$.
