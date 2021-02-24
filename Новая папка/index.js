var lvl = 1;
var xp = 0;
var xpToLvlUp = 1000;

var currLvl = prompt("LVL?",1);
var p = prompt("PERCENTAGE?", 0)/100;
var arr = [];
var lastItterValue;
var smth;

for(i = 0;i < currLvl; i ++){ 
    arr.push(xpToLvlUp);
    console.log(`${lvl} - ${xp} - ${xpToLvlUp}`)
    lvl++;
    xp += xpToLvlUp;
    xpToLvlUp += 4000;
}
lastItterValue = arr[arr.length-1];
smth = lastItterValue  - (lastItterValue * p);

console.log(smth);
alert(smth);