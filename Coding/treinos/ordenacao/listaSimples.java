class listaSimples{
	private int[] array; // inicializando na classe meu array
	private int n; // indice que eu percorro meu array
	
	
	 public listaSimples(int Tamanho){ // corrigido agora: o construtor deve ter o mesmo nome da classe
		array = new int[Tamanho]; // corrigido: usa o parâmetro recebido
		n=0;
	}
	
	public void inserirNoFim(int x){
		if (n >= array.length) {
			MyIO.println("Erro ao inserir!");
			return;
		}
		array[n] = x;
		n++;
	}
	public void removerDoInicio(){
		if(n == 0){
			MyIO.println("Erro ao remover!");
			return; // corrigido agora: impede continuar quando a lista está vazia
		}
		MyIO.println(array[0]);
		for (int i = 0; i < n - 1; i++) { // corrigido: percorre os elementos válidos
			array[i] = array[i + 1]; // corrigido: desloca cada elemento para a esquerda
		}
		n--;
	}

	public void mostrar(){
		for(int i=0; i < n; i++){
			MyIO.println(i + "-" + array[i] + "\n"); // corrigido: concatenação e aspas
		}
	}

	public static void main(String[] args){ // meu main que eu vou brincar com minha lista
		int tamanho = MyIO.readInt(); // corrigido agora: MyIO já possui leitura de inteiros
		listaSimples lista = new listaSimples(tamanho); // corrigido agora: usa o nome correto da classe
		int n;
		MyIO.println("Escreva um numero para inserir na lista:"); // corrigido agora: chamada quebrada
		n = MyIO.readInt(); // corrigido agora: readLine retorna String
		lista.inserirNoFim(n);

		MyIO.println("Escreva um numero para inserir na lista:");
		n = MyIO.readInt(); // corrigido agora: readLine retorna String
		lista.inserirNoFim(n);

		MyIO.println("Escreva um numero para inserir na lista:");
		n = MyIO.readInt(); // corrigido agora: readLine retorna String
		lista.inserirNoFim(n);

		MyIO.println("Escreva um numero para inserir na lista:");
		n = MyIO.readInt(); // corrigido agora: readLine retorna String
		lista.inserirNoFim(n);

		MyIO.println("Escreva um numero para inserir na lista:");
		n = MyIO.readInt(); // corrigido agora: readLine retorna String
		lista.inserirNoFim(n);


		lista.mostrar();

		MyIO.println("Remover da fila:\n");
		lista.removerDoInicio(); // corrigido agora: método pertence ao objeto lista
		lista.removerDoInicio(); // corrigido agora: método pertence ao objeto lista
		
		lista.mostrar();
	}
}
