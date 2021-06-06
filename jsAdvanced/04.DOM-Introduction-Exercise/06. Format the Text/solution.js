function solve() {
  //TODO
  let text = document.getElementById('input').value;
  let regex =/([^.]{1,})*\./gm;
let arr = [];
let match = regex.exec(text);
while( match != null)
  {
    arr.push(match[0]);
     match = regex.exec(text);

}
let output = document.getElementById('output');
output.innerHTML = '';
while(arr.length>0){
  let string = '';

for(let i=0; i<3; i++){
let currentEl =  arr.shift();
if(currentEl != undefined){
  string +=currentEl;
}
}
let newParagraph = document.createElement("p");
newParagraph.textContent = string;
output.appendChild(newParagraph);
}


//let arr = regex.exec(text)
//console.log(arr)
}