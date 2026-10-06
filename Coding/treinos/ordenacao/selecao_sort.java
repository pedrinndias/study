class selecao_sort{

	public void swap(int i, int j){
		int aux = array[i];
		array[i] = array[j];
		array[j] = aux;
	}
	
	public void sort(){
		for(int i=0; i < (n-1); i++){
			int menor=i;
			for(int j = i+1; j<n; i++){
				if(array[menor] > array[j]){
					menor=j;
				}
			}
			swap(menor,j);
		}
	}




}
