class filaCircular{
	private int[] array;
	private int primeiro;
	private int ultimo;

	public filaCircular(){
		this(6);
	}
	
	public filaCircular(int Tamanho){
		array  = new int[Tamanho + 1]; // o +1 é para celula cabeca
		primeiro = ultimo = 0;
	}	
	
	public void inserir(int x){
		if(((ultimo + 1) % array.length) == primeiro){
			MyIO.println("Erro ao inserir!");
			return;
		}
		array[ultimo] = x;
		ultimo = (ultimo + 1) % array.length;
	}
	
	public int remover(){
		int resp;
		if(primeiro == ultimo){
			MyIO.println("Erro ao remover!");
			return -1;
		}
		resp = array[primeiro];
		primeiro = (primeiro+1) % array.length;
		return resp;
	}
	
	public void mostrar(){
		int aux = primeiro;
		int count=0;
		while(aux != ultimo){
			MyIO.println(count + "- " + array[aux] + "\n");
			count++;
			aux = (aux+1) % array.length;	
		}
	}
	
	public static void main(String[] agrs){
		int Tamanho = MyIO.readInt();
		filaCircular fila = new filaCircular(Tamanho);
		fila.inserir(MyIO.readInt());
		
		fila.inserir(MyIO.readInt());
		
		fila.inserir(MyIO.readInt());
		
		fila.inserir(MyIO.readInt());
		
		fila.mostrar();

		MyIO.println("Removido = " + fila.remover());
		
		MyIO.println("Removido = " + fila.remover());
		
		fila.mostrar();
	}
	
	
}
