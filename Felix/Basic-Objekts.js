// Objekt Car

var car_porsche = {
    cartype: "porsche",
    carmodel: "taycan",
    ps: 700,
    color: "black",
    driveType: "electro",
    price: 220000,
    numberof: 15,

    getStats: function() {
        return (`Type: ${this.cartype} <br>
Model: ${this.carmodel} <br>
Ps: ${this.ps} <br>
Color: ${this.color}<br>
Drivetype: ${this.driveType}<br>
Price: ${this.price}`)
    },

    information: function() {
        return (`The car you chose is the ${this.cartype} ${this.carmodel}. There are ${this.numberof} cars in stock.`)
    }
}

document.getElementById("text").innerHTML = car_porsche.getStats()
document.getElementById("text2").innerHTML = car_porsche.information()


var pet = {
    whatPet: "dog",
    breed: "husky",
    age: 6,
    owner: "Felix",
    weight: 50,
    adress: "Reumannplatz 3/1/18",

    getPet: function() {
        return (`The pet is a ${this.whatPet} of the breed ${this.breed} which is ${this.age} years old and weighs ${this.weight}`)
    },


    getAdress: function() {
        return (`The adress of the owner is ${this.adress}`)
    },
}

document.getElementById("text3").innerHTML = pet.getPet()
document.getElementById("text4").innerHTML = pet.getAdress()


var person = {
    fname: "Felix",
    lname: "Blechl",
    personAge: 20,
    height: 188,
    weight: 77,
    adress: "Effingergasse 40/38 1160 Vienna ",

    getInfo: function() {
        return (`Name: ${this.fname} <br>
        Blechl: ${this.lname} <br>
        Age: ${this.personAge} <br>
        Height: ${this.height} <br>
        Weight: ${this.weight} <br>`)
    },

    getPersonAdress: function() {
        return (`${this.fname} ${this.lname} Adress is ${this.adress}`)
    }
}

document.getElementById("text5").innerHTML = person.getInfo()
document.getElementById("text6").innerHTML = person.getPersonAdress()