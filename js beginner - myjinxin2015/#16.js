function cutIt(arr){
  var min=arr[0], res=[], pos=0;
  for(i=1; i<arr.length; i++){
    if(arr[i].length<min.length) {min=arr[i]; pos=arr.indexOf(arr[i]); }
  }
  arr.slice(pos);
  var nb=min.length;
  for(i=0; i<arr.length; i++){
    res[i] = arr[i].substring(0,nb);
  }
  return res;
}

console.log(cutIt(["ab","cde","fgh"]));
console.log(cutIt(["abc","defgh","ijklmn"]));
console.log(cutIt(["codewars","javascript","java"]));
