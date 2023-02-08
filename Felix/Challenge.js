class Car {
    type;
    model;
    shortdescription;
    price;
    productionyear;
    picture;

    constructor(type, model, shortdescription, price, productionyear, picture) {
        this.type = type;
        this.model = model;
        this.shortdescription = shortdescription;
        this.price = price;
        this.productionyear = productionyear;
        this.picture = picture
    }
}

Cars = [
    new Car("Audi", "A6", "lorem lorem lorem lorem lorem", "90000 Euros", "2020", "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg"),
    new Car("Mercedes", "S-Class", "lorem lorem lorem lorem lorem", "130000 Euros", "2021", "https://upload.wikimedia.org/wikipedia/commons/5/55/Mercedes-Benz_W223_IMG_6663.jpg"),
    new Car("BMW", "X1", "lorem lorem lorem lorem lorem", "50000 Euros", "2018", "https://i.auto-bild.de/mdb/extra_large/86/2-517.png"),
    new Car("Porsche", "Taican", "lorem lorem lorem lorem lorem", "220000 Euros", "2022", "https://cdn.motor1.com/images/mgl/Y9GQj/s3/porsche-taycan.jpg"),
]

for (let val of Cars) {
    document.getElementById("container").innerHTML += `
    <div>
    <div class="card" style="width: 23rem;">
    <img src="${val.picture}" class="card-img-top" alt="${val.type}">
    <div class="card-body">
      <h5 class="card-title">${val.type + " " +  val.model}</h5>
      <p class="card-text"> ${val.shortdescription}</p>
      <p class="btn btn-primary showmore">Show more</p>
    </div>
    </div>
    </div>
    `
}

let moreInfo = document.getElementsByClassName("showmore");

for (let i = 0; i < moreInfo.length; i++) {
    moreInfo[i].addEventListener("click", function() {
        document.getElementById("bigversion").innerHTML = `
        <div>
        <br>
        <br>
        <br>
        <br>
        <div class="card" style="width: 75%;">
        <img src="${Cars[i].picture}" class="card-img-top" alt="${Cars[i].type}">
        <div class="card-body">
          <h5 class="card-title">${Cars[i].type + " " +  Cars[i].model}</h5>
          <p class="card-text"> ${Cars[i].shortdescription}</p>
          <p class="card-text"> Price: ${Cars[i].price}</p>
          <p class="card-text"> Productionyear: ${Cars[i].productionyear}</p>
          <p class="btn btn-primary showmore">Show more</p>
          <p class="btn btn-warning showless">Show less</p>
        </div>
        </div>
        </div>
        `
    })
}

let lessInfo = document.getElementsByClassName("showless");

for (let i = 0; i < lessInfo.length; i++) {
    lessInfo[i].addEventListener("click", function() {
        document.getElementById("bigversion").innerHTML = "";
    })
}