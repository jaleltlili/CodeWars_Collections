   function padIt(str,n){
       var res,
           pGche = '',
           pDte = '',
           i=1;
       if(n%2 === 0) {
         var l1=n/2;
         pGche = '*'; pDte = '*';
         while(i<l1){
           pGche+='*';
           pDte+='*';
           i++;
         } }
       if(n%2 === 1) {
         var l2=n/2;
         //pGche = pGche+'*', pDte = '';
         while(i<l2){
           pGche = pGche+'*';
           pDte = pDte+'*';
           i++;
         }
         pGche+='*';
       }
       res=pGche.concat(str.concat(pDte)) ;
       return res;
     }

     console.log(padIt("a",1));
     console.log(padIt("a",2));
     console.log(padIt("a",3));
     console.log(padIt("a",4));
     console.log(padIt("a",5));
