/*
    Test.assertSimilar(colorOf(255,0,0), "#ff0000");
    showColor("#ff0000")
    Test.assertSimilar(colorOf(0,111,0), "#006f00");
    showColor("#006f00")
    Test.assertSimilar(colorOf(1, 2 ,3), "#010203");
    showColor("#010203")
  */
function colorOf(r,g,b){
    var r1, g1, b1;
    r=(r).toString(16);     if(r.length === 1) r1='0'.concat(r); else r1=r;
    g=(g).toString(16);     if(g.length === 1) g1='0'.concat(g); else g1=g;
    b=(b).toString(16);     if(b.length === 1) b1='0'.concat(b); else b1=b;
   return "#".concat(r1, g1, b1);
}
console.log(colorOf(255,0,0));
console.log(colorOf(0,111,0));
console.log(colorOf(1, 2 ,3));
console.log(colorOf(115, 42, 12)); 
