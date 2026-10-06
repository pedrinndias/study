import java.util.Scanner;

class questao3_prova{
	private String[] array;
	private int primeiro;
	private int ultimo;

	public questao3_prova(){ // seria minha fila
		this(3);
	}

	public questao3_prova(int tamanho){
		array = new String[tamanho]; // CORRIGIDO: era "String array = ..." -> criava variavel local e o atributo ficava null
		primeiro = ultimo = 0;
	}

	public void inserir(String nome){
		if(((ultimo + 1)%array.length) == primeiro){
			return; // CORRIGIDO: faltava ";" no println; e o print de erro foi removido (sujaria a saida)
		}
		array[ultimo] = nome;
		ultimo = (ultimo+1)%array.length;
	}

	public String remover(){ // CORRIGIDO: era void, mas retorna o nome removido
		if(primeiro == ultimo){
			return null; // CORRIGIDO: metodo retorna String; print de erro removido
		}
		String resp = array[primeiro];
		primeiro = (primeiro + 1) % array.length; // CORRIGIDO: primeiro++ sem % passava do fim do array (fila e circular)
		return resp;
	}

	public void mostrar(){ // CORRIGIDO: imprime todos numa linha so, separados por um espaco
		String saida = "";
		for(int i = primeiro; i != ultimo; i = (i + 1) % array.length){ // CORRIGIDO: aux++ sem % quebrava a circular
			if(i != primeiro){
				saida += " "; // espaco so ANTES dos nomes seguintes (sem espaco sobrando no fim)
			}
			saida += array[i];
		}
		MyIO.println(saida); // CORRIGIDO: antes imprimia "\n" + count + "-" em cada nome, fora do formato
	}

	public boolean isVazia(){ // CORRIGIDO: era "bollean"
		return primeiro==ultimo;
	}

	public int tamanho(){ // NOVO: quantos estao na fila (precisa para saber se ainda ha pelo menos K)
		return (ultimo - primeiro + array.length) % array.length;
	}

	public static void main(String[] args){
		Scanner sc = new Scanner(System.in); // CORRIGIDO: faltava ";"
		while(sc.hasNextInt()){ // CORRIGIDO: hasNextInt() precisa de parenteses
			int k = sc.nextInt();
			sc.nextLine(); // NOVO: joga fora o \n que o nextInt deixou (pegadinha do Scanner)
			String[] nomes = sc.nextLine().trim().split(" "); // NOVO: a 2a linha tem os nomes; split separa por espaco

			questao3_prova fila = new questao3_prova(nomes.length + 1); // NOVO: +1 porque a circular desperdica 1 posicao
			for(int i = 0; i < nomes.length; i++){
				fila.inserir(nomes[i]);
			}

			if(fila.tamanho() < k){ // NOVO: ja comeca com menos de K -> imprime so a sequencia inicial
				fila.mostrar();
			}
			while(fila.tamanho() >= k){ // NOVO: a dinamica continua enquanto houver pelo menos K
				for(int i = 0; i < k - 1; i++){
					fila.inserir(fila.remover()); // os K-1 primeiros voltam para o final, na mesma ordem
				}
				fila.remover(); // o K-esimo ganha o brinde e sai
				fila.mostrar(); // imprime apos cada rodada
			}
		}
		sc.close();
	}

}
