class Person {
    firstname;
    lastname;
    PersonAge;
    PersonHeight;
    PersonWeight;
    PersonAdress;

    constructor(fName, lName, age, height, weight, adress) {
        this.firstname = fName;
        this.lastname = lName;
        this.PersonAge = age;
        this.PersonHeight = height;
        this.PersonHeight = weight;
        this.PersonAdress = adress;
    }

    fullname() {
        return (`Firsname: ${this.firstname} <br> Lastname: ${this.lastname} <br> -------------------------------------- <br>`)
    }

    getAdress() {
        return (`${this.firstname} ${this.lastname} lives in ${this.PersonAdress} <br> ---------------------------------- <br>`)
    }
}


persons = [
    new Person("Felix", "Blechl", 20, 188, 77, "Effingergasse 40/38 1160 Vienna"),
    new Person("Paul", "Unterleitner", 35, 170, 69, "Reumannplatz 1/3 1100 Vienna"),
    new Person("Anna", "Bielder", 78, 150, 55, "Ottakringerstraße 116/5/14 Vienna"),
]

for (let val of persons) {
    document.getElementById("text1").innerHTML += val.fullname()
}
for (let val of persons) {
    document.getElementById("text1").innerHTML += val.getAdress()
}




class Car {
    cartype;
    carmodel;
    ps;
    color;
    driveType;
    price;
    numberof;

    constructor(cartype, carmodel, ps, color, driveType, price, numberof) {
        this.cartype = cartype;
        this.carmodel = carmodel;
        this.ps = ps;
        this.color = color;
        this.driveType = driveType;
        this.price = price;
        this.numberof = numberof;
    }

    carconfig() {
        return (`Type: ${this.cartype} <br> Model: ${this.carmodel} <br> Ps: ${this.ps} <br> Color: ${this.color} <br> DriveType: ${this.driveType} <br> Price: ${this.price} <br> -------------------------------- <br> `)
    }

    carInfo() {
        return (`For your Configuration there are ${this.numberof} Cars at stock. <br> ------------------------------ <br>`)
    }

}

cars = [
    new Car("Porsche", "Taican", 700, "black", "electro", 220000, 15),
    new Car("Mercedes", "S-Class", 300, "silver", "gasoline", 130000, 100),
    new Car("Audi", "A6", 500, "blue", "gasoline", 80000, 60)
]

for (let val of cars) {
    document.getElementById("text2").innerHTML += val.carconfig()
}
for (let val of cars) {
    document.getElementById("text2").innerHTML += val.carInfo()
}



class Pet {
    whatPet;
    breed;
    age;
    owner;
    weight;

    constructor(whatPet, breed, age, owner, weight, ) {
        this.whatPet = whatPet;
        this.breed = breed;
        this.age = age;
        this.owner = owner;
        this.weight = weight;
    }

    petInfo() {
        return (`Type: ${this.whatPet} <br> Breed: ${this.breed} <br> Age: ${this.age} <br> Weight: ${this.weight} <br> ------------------------------- <br>`)
    }

    petgetOwner() {
        return (`The owner of this pet is ${this.owner} <br> --------------------------------- <br>`)
    }
}

pets = [
    new Pet("Dog", "Husky", 8, "Felix Blechl", 60),
    new Pet("Cat", "Shorthair", 5, "Josephine Preuß", 20),
    new Pet("Dog", "Dalmatiner", 1, "balck and white", 15),
]

for (let val of pets) {
    document.getElementById("text3").innerHTML += val.petInfo()
}

for (let val of pets) {
    document.getElementById("text3").innerHTML += val.petgetOwner()
}