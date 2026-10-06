class bubble_sort{

	public static void swap(int i, int j){
		int aux = array[i];
		array[i] = array[j];
		array[j] = aux;
	}	
	
	public void sort(){
		for(int i = (n-1); i>0; i--){
			for(int j=0; j<i; j++){
				if(array[j] > array[j+1]){
					swap(j, (j+1));
				}	
			}
		}	
	}






}
