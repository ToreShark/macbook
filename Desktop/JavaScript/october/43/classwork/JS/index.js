"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
class Transport {
}
class GroundTransport extends Transport {
}
class Car extends GroundTransport {
    constructor(amountOfWheels, weightCapacity) {
        super();
        this.turnOn = () => {
            console.log('Car is on');
        };
        this.turnOff = () => {
            console.log('Car is off');
        };
        this.move = () => {
            console.log('Car is moving');
        };
        this.amountOfWheels = amountOfWheels;
        this.weightCapacity = weightCapacity;
    }
}
class Toyota extends Car {
    constructor(amountOfWheels, weightCapacity) {
        super(amountOfWheels, weightCapacity);
        this.turnOn = () => {
            console.log('Push a littli bit');
        };
    }
}
const toyota = new Toyota(4, 1000);
toyota.turnOn();
const figure = {
    sides: 3,
    square: 10
};
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.sides = 3;
        this.square = this.findSquare();
    }
    findSquare() {
        return Math.sqrt((this.a + this.b + this.c) / 2);
    }
}
class Truck extends GroundTransport {
    constructor() {
        super(...arguments);
        this.amountOfWheels = 6;
        this.weightCapacity = 2000;
        this.sides = 4;
        this.square = 100;
        this.ticket = "pass";
        this.products = ['cola', 'pepsi'];
        this.turnOn = () => {
            console.log('Turn On Truck');
        };
        this.turnOff = () => {
            console.log('Turn off Truck');
        };
        this.move = () => {
            console.log('Truck movies');
        };
    }
}
const truck = new Truck();
truck.turnOn();
truck.move();
truck.turnOff();
console.log(truck.products);
class Robot {
}
// energy: number = 100;
Robot.turnOn = () => {
    console.log('Turn on');
};
// const robot = new Robot();
Robot.turnOn();
class MyMath {
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        return a / b;
    }
}
console.log(MyMath.multiply(3, 4));
console.log(MyMath.divide(3, 4));
class GetServerData {
}
_a = GetServerData;
GetServerData.getData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
});
GetServerData.postData = (url, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fetch(url, {
            method: 'POST',
            body: data
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const countries = yield GetServerData.getData('https://restcountries.com/v3.1/name/fr');
    console.log(countries);
});
const myPostMessage = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = new URLSearchParams();
    data.append('message', 'TORE');
    yield GetServerData.postData('http://146.185.154.90:8000/blog/starman@gmail.com/posts', data);
});
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield GetServerData.getData('http://146.185.154.90:8000/blog/starman@gmail.com/posts');
    console.log(posts);
});
getCountries();
myPostMessage();
getPosts();
