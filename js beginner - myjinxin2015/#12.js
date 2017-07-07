function giveMeFive(obj){
  var tab=[];
  for (var key in obj) {
    if (key.length==5) tab.push(key);
    if (obj[key].length==5) tab.push(obj[key]);
  }
  return tab;
}

console.log(giveMeFive({Our:"earth", is:"a", beautiful:"world"}));
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));
console.log(giveMeFive({Pears:"than",apple:"sweet"}));
