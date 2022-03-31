//car
let carArr = [];

class Car { 

    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.modelo = modelo;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){       
        if(el.checked){
            if(isMoreThanTwoOptionsSelected()){
                el.checked = false;
            } else{
                carArr.push(carClass);
            }
        } else {
            let carIndex = GetCarArrPosition(carArr, carClass);
            carArr.splice(carIndex, 1);
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    carArr.forEach( (car, index) => setCarDetails(car, index));
}

function setCarDetails(car, id) {
    let carProperties = Object.getOwnPropertyNames(car);

    carProperties.forEach( prop => {
        setContentTo(prop, id, car[prop]);
    });
}

function setContentTo(prop, id, content){
    if(prop == 'image'){
        setCompareCarImage(id, content);
    } else{
        let element = document.querySelector(`#compare_${prop.toLowerCase()}_${id}`);
        element.textContent = content;
    }
}

function setCompareCarImage(id, content){
    let compareImage = document.querySelector("#compare_image_" + id);
    let carImage = compareImage.querySelector("img");
    if( carImage == null){
        carImage = document.createElement("img");
    }
    carImage.src = content;
    carImage.classList.add("photocar");
    compareImage.appendChild(carImage);
}

function isMoreThanTwoOptionsSelected(){
    if(carArr.length >= 2){
        alert("Só pode adicionar 2 carros.");
        return true;
    }
    return false;
}     