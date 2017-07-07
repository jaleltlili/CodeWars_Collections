function pickIt(arr){
  var tab1=[], tab2=[];
  //Mettre dans tab1 les éléments impairs
  //et dans tab2 les éléments pairs
  //init. cpt tab1 et tab2
  var j=0, k=0;
  for(i=0; i<arr.length; i++){
        if(arr[i]%2===1)//elt impair, le mettre dans tab1 et incrémenter j
        {
          tab1[j]=arr[i];
          j++;
        }
        else //elt pair, le mettre dans tab2 et incrémenter k
        {
          tab2[k]=arr[i];
          k++;
        }
  }
  //le tableau résultat
  var res=[tab1, tab2];
  return res;
}
/*** TESTS ***/
console.log(pickIt([1,2]));
console.log(pickIt([1,2,3]));
console.log(pickIt([3,2,1]));
console.log(pickIt([10,20,30]));
console.log(pickIt([11,21,31]));
console.log(pickIt([8,1,5,4,6,1,1]));
