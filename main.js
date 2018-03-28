// console.log("Why, hello there");

const printToDom = (myInnerds, putItHere) => {
  document.getElementById(putItHere).innerHTML = myInnerds;
};

const buildDomString = (animalArray) => {
  let myString = "";
  for(let i = 0; i < animalArray.length; i++){
    if (animalArray[i].isCarnivore) {
      myString += `<div class='animal carnivore'>`;
    }else{
      myString += `<div class='animal vegetable'>`;
    };
    myString +=   `<h1>${animalArray[i].names}</h1>`;
    myString +=   `<h3>${animalArray[i].number}</h3>`;
    myString +=   `<img src='${animalArray[i].imageUrl}' alt='${animalArray[i].names}' class='animal-image'>`;
    myString +=   `<div class='button-container'>`;
    myString +=     `<button class='escaped'>Escaped</button>`;
    myString +=   `</div>`;
    myString += `</div>`;
  };
  printToDom(myString, "animal-container")
};

const addEscapedEventListeners = () => {
  const escapedButtons = document.getElementsByClassName('escaped');
  for(let i = 0; i < escapedButtons.length; i++){
    escapedButtons[i].addEventListener("click", animalEscaped);
  };

};

const animalEscaped = () => {
  showCarnivores();
  showVegetables();
};

const showCarnivores = () => {
  const carnivores = document.getElementsByClassName('carnivore');
  for(let j = 0; j < carnivores.length; j++){
    carnivores[j].children[3].innerHTML ='';
    carnivores[j].classList.add('red');
  };
};

const showVegetables = () => {
  const vegetables = document.getElementsByClassName('vegetable');
  for(let j = 0; j < vegetables.length; j++){
    vegetables[j].children[3].innerHTML ='<button>EAT ME!!!</button>';
    vegetables[j].classList.add('green');

  };
};


function ifItLoads(){
  const myData = JSON.parse(this.responseText);
  buildDomString(myData.animals);
  addEscapedEventListeners();
};

function WTF() {
  console.log("You Suck");
};

function startApplication(){
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", ifItLoads);
  myRequest.addEventListener("error", WTF);
  myRequest.open("GET", "animals.json");
  myRequest.send();
}; 

startApplication();
