function howManySmaller(arr,n){
  //1. élémens du tableau arrondis à 2 chiffres après la virgule
    //2. compter les nbr inf. à n
var nb=0, tab=[];
  for(i=0; i<arr.length; i++)
  {
    (arr[i].toFixed(2))<n ? nb++ : nb;

  }
  return nb;
}
