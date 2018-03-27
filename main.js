// console.log("Why, hello there");

const printToDom = (myInnerds, putItHere) => {
  document.getElementById(putItHere).innerHTML = myInnerds;
};

function ifItLoads(){
  const myData = JSON.parse(this.responseText);
  buildDomString(myData.animals);
};

function WTF() {
  console.log("You Suck");
};

const buildDomString = (animalArray) => {
  let myString = "";
  for(let i = 0; i < animalArray.length; i++){
    myString += `<div class='animal'>`;
    myString +=   `<h1>${animalArray[i].names}<h1>`;
    myString +=   `<h3>${animalArray[i].number}</h3>`;
    myString +=   `<img src='${animalArray[i].imageUrl}' alt='${animalArray[i].names}' class='animal-image'>`;
    myString +=   `<div class='button-container'>`;
    myString +=     `<button class='animal-escape'>Escaped</button>`;
    myString +=   `</div>`;
    myString += `</div>`;
  };
  
  printToDom(myString, "animal-container")
};

function startApplication(){
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", ifItLoads);
  myRequest.addEventListener("error", WTF);
  myRequest.open("GET", "animals.json");
  myRequest.send();
}; 

startApplication();