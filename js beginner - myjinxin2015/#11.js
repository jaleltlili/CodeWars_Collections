function grabDoll(dolls){
  var bag=[], nb=0;
  for(i=0; i<dolls.length; i++){
    if(dolls[i]==="Hello Kitty" || dolls[i]==="Barbie doll") bag.push(dolls[i]);
    else continue;
    nb++; if(nb===3) break;
  }
  return bag;
}
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"])); //["Hello Kitty"]
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"])); //["Hello Kitty","Hello Kitty"]
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"])); //["Hello Kitty","Hello Kitty","Barbie doll"]
console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"])); //["Barbie doll","Hello Kitty","Hello Kitty"]
