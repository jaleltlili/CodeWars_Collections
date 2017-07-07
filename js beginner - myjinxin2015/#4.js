function getLength(arr){
     //if(Array.isArray(arr))
     return arr.length;
   }
   function getFirst(arr){
     return arr[0];
   }
   function getLast(arr){
     return arr[arr.length-1];
   }

   function pushElement(arr, elt){
     arr.push(elt)
     return arr;
   }


   function popElement(arr){
     arr.pop();
     return arr;
   }
