 var chessBoard = document.getElementById("chessBoardContainer");

 var x = 8;
 var y = 8;

 for(var i = 0; i<y;i++){
  var row = chessBoard.appendChild(document.createElement("div"));
  for(var j = 0;j<x;j++){
    if(j%2 == i%2){
        let blackBox = row.appendChild(document.createElement("span"));
        blackBox.classList.add('black');
    }else{
        let whiteBox = row.appendChild(document.createElement("span"));
        whiteBox.classList.add('white');
    }
  }
 }


// Write a recursive JS function which takes a JSON object and prints all the values present in the object.
/*
let objvalue ={
    name:"Raunak",
    age:24,
    address:"Delhi"
}

let printObjValue = (obj)=>{ 

    if(typeof(obj) != "object"){
        console.log("please enter object");
    }else{
        for(const key in obj){
           if(typeof obj[key] === "object"){
               printObjValue(obj[key]);
           }else{
               console.log(obj[key]);
           }
        }
    }

}
let num = 22;
//  printObjValue(num);
 printObjValue(objvalue);
*/


//  Write recursive JS function which takes a JSON object and returns a deep copy of the object.

let crateDeepCopy = (input)=>{
    if(typeof input !== "object"){
        return input; // Base case
    }
    let copy = Array.isArray(input) ? [] : {} // data holder
    for(let key in input){
        const value = input[key];
        copy[key] = crateDeepCopy(value); // recursive call for each obj value
    }
    return copy;
}

let originalObj = {
    name:"rk",
    skill:["Html","css","Javascript","react"],
    address:{
        city:"New Delhi",
        state:"Delhi"
    }
}

let deepcopy = crateDeepCopy(originalObj);
 
deepcopy.name = "raunak sharma";
deepcopy.skill = "Front end developer";
deepcopy.address.state = "Noida";

console.log(originalObj);
console.log("-----------------------------------------------");
console.log(deepcopy);
