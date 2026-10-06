import java.util.Scanner; // Scanner para ler a entrada e detectar o EOF com hasNextInt()

class questao2_prova{
	private String[] array;
	private int primeiro;
	private int ultimo;


	public questao2_prova(){ // CORRIGIDO: construtor tem que ter o nome da classe (era filaCircular)
		this(10);
	}

	public questao2_prova(int tamanho){ // CORRIGIDO: nome da classe (era filaCircular); parametro em minuscula
		array = new String[tamanho];
		primeiro = ultimo = 0;
	}

	public void inserir(String nome){
		if(((ultimo+1) % array.length) == primeiro){ // CORRIGIDO: array.length sem () (length() e de String)
			return; // CORRIGIDO: removido o print de erro, ele sujaria a saida
		}
		array[ultimo] = nome;
		ultimo = (ultimo + 1) % array.length; // CORRIGIDO: array.length sem () (estava "length(;")
	}

	public String remover(){
		if(primeiro == ultimo){
			return null; // CORRIGIDO: metodo retorna String, entao "return null;" (e sem print de erro)
		}
		String resp = array[primeiro];
		primeiro = (primeiro + 1) % array.length; // CORRIGIDO: array.length sem ()
		return resp;
	}

	public boolean isVazia(){ // NOVO: facilita o ONIBUS e o mostrar
		return primeiro == ultimo;
	}

	public void mostrar(){ // NOVO: imprime a fila na ordem, separada por um espaco, ou VAZIA
		if(isVazia()){
			MyIO.println("VAZIA");
			return;
		}
		String saida = "";
		for(int i = primeiro; i != ultimo; i = (i + 1) % array.length){ // percorre circularmente de primeiro ate ultimo
			if(i != primeiro){
				saida += " "; // espaco so ANTES dos nomes seguintes, para nao sobrar espaco no fim
			}
			saida += array[i];
		}
		MyIO.println(saida);
	}

	public void CHEGA(String linha){ // IMPLEMENTADO: "CHEGA nome" -> nome comeca na posicao 6
		inserir(linha.substring(6));
	}

	public void ONIBUS(String linha){ // IMPLEMENTADO: "ONIBUS C" -> C comeca na posicao 7
		int lugares = Integer.parseInt(linha.substring(7));
		for(int i = 0; i < lugares && !isVazia(); i++){ // para quando lotar OU quando a fila esvaziar
			remover();
		}
		mostrar(); // a saida e impressa apos cada ONIBUS
	}

	public void lerEntrada(String linha){
		if(linha.charAt(0) == 'C'){ // CORRIGIDO: charAt(0) com parenteses, e um metodo
			CHEGA(linha);
		}else{
			if(linha.charAt(0) == 'O'){ // CORRIGIDO: charAt(0) e parenteses extras removidos
				ONIBUS(linha);
			}
		}
	}

	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);// basicamente meu scanner para ler a entrada e detectar o EOF com hasNextInt()
		while(sc.hasNextInt()){ // varios casos de teste ate o EOF
			int n = sc.nextInt();
			questao2_prova fila = new questao2_prova(n + 1); // fila nova por caso; N+1 pois a circular desperdica 1 posicao
			for(int i = 0; i < n; i++){
				String op = sc.next(); // "CHEGA" ou "ONIBUS" (next() le uma palavra, sem pegadinha do \n)
				if(op.equals("CHEGA")){ // String se compara com equals, nunca ==
					fila.inserir(sc.next()); // nome
				}else{
					int c = sc.nextInt(); // lugares do onibus
					for(int j = 0; j < c && !fila.isVazia(); j++){ // para quando lotar OU a fila esvaziar
						fila.remover();
					}
					fila.mostrar();
				}
			}
		}
		sc.close();
	}
}
