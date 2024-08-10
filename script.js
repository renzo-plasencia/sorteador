let names = [];
let auxiliarArray = [];
let inputBox = document.getElementById('nameInput');
let nmInput = document.getElementById('nameInput').value;
const templateAspirantes = ['AS0087','AS0088','AS0089','AS0090','AS0091','AS0092','AS0093','AS0094','AS0095','AS0096','AS0097','AS0098','AS0099','AS0100','AS0101','AS0102','AS0103','AS0104','AS0105','AS0106']

function addName(){
    let nameInput = document.getElementById('nameInput').value;
    
    if (nameInput){
        names.push(nameInput)
        document.getElementById('nameList').innerHTML += `<li>${nameInput}</li>`;
        console.log(names)
        document.getElementById('nameInput').value = ""
    }
}

//Presionar enter en el input
inputBox.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
    addName()
}
});

function deleteName(){
    names = [];
    nameInput = "";
    document.getElementById('nameList').innerHTML = `<ul></ul>`
    document.getElementById('nameInput').value = ""
    document.getElementById('resultList').innerHTML = `<ul></ul>`
}

function loadPlantilla(Plantilla){
    names = Plantilla;
    if (names){
        for (let i=0; i< templateAspirantes.length; i++){
            document.getElementById('nameList').innerHTML += `<li>${names[i]}</li>`;
            document.getElementById('nameInput').value = ""
        }
    }
}

function draw(){
    for (let i = names.length - 1; i > 0; i--) {
        let j = randomNumber(i,0);
        [names[i], names[j]] = [names[j], names[i]];
    }
    document.getElementById('resultList').innerHTML = `<ul></ul>`;
    if (names){
        let j = 1;
        for (let i=0; i< names.length; i++){
            document.getElementById('resultList').innerHTML += `<li>${j} - ${names[i]}</li>`; 
            j++
        } 
    }

}

function randomNumber(max, min){
    let randomNumb = Math.floor((Math.random()*(max-min+1)+min));
    return randomNumb
}
