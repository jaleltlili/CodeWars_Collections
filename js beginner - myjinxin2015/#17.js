function firstToLast(str,c){
    var b, e;
    b=str.indexOf(c);
    e=str.lastIndexOf(c);
    return (e===-1) ? e : e-b;
}

console.log(firstToLast("ababc","a")); //2
console.log(firstToLast("ababc","c")); //0
console.log(firstToLast("ababc","d")); //-1
