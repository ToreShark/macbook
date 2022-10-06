abstract class Transport {
    abstract turnOn: Function
    abstract move: Function
}

abstract class GroundTransport extends Transport {
    public abstract amountOfWheels: number
    public abstract weightCapacity: number
}

class Car extends GroundTransport {
    public amountOfWheels: number;
    public weightCapacity: number;
    constructor(amountOfWheels: number, weightCapacity: number) {
        super();
        this.amountOfWheels = amountOfWheels;
        this.weightCapacity = weightCapacity;
    }
    turnOn: Function = () => {
        console.log('Car is on')
    }
    turnOff: Function = () => {
        console.log('Car is off')
    }
    move: Function = () => {
        console.log('Car is moving')
    } 
}

class Toyota extends Car {
    constructor(amountOfWheels: number, weightCapacity: number) {
        super(amountOfWheels, weightCapacity)
    }
    override turnOn: Function = () => {
        console.log('Push a littli bit')
    }
}

const toyota = new Toyota(4, 1000);
toyota.turnOn()

interface IFigure {
    sides: number
    square: number
}
interface IInfo {
    ticket: string,
    products: string[]
}
const figure: IFigure = {
    sides: 3,
    square: 10
}

class Triangle implements IFigure {
    sides: number;
    a: number;
    b: number;
    c: number;
    square: number;
    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.sides = 3
        this.square = this.findSquare()
    }
    public findSquare(): number {
        return Math.sqrt((this.a + this.b + this.c) / 2)
    }
}

class Truck extends GroundTransport implements IFigure, IInfo {
    public amountOfWheels: number = 6;
    public weightCapacity: number = 2000;
    sides: number = 4;
    square: number = 100;
    ticket: string = "pass";
    products: string[] = ['cola', 'pepsi']
    turnOn = () => {
        console.log('Turn On Truck')
    }
    turnOff = () => {
        console.log('Turn off Truck')
    }
    move = () => {
        console.log('Truck movies')
    } 
}
const truck = new Truck();
truck.turnOn();
truck.move();
truck.turnOff();
console.log(truck.products);

class Robot {
    // energy: number = 100;
    static turnOn = (): void => {
        console.log('Turn on');
    }
}

// const robot = new Robot();
Robot.turnOn()

class MyMath {
    static multiply (a: number, b:number) {
        return a * b;
    }
    static divide (a: number, b: number) {
        return a / b
    }
}
console.log(MyMath.multiply(3, 4));
console.log(MyMath.divide(3, 4));

class GetServerData {
    static getData = async (url: string): Promise<any> => {
        try{
            const response: Response = await fetch(url);
            const data = await response.json();
            return data
        } catch(err) {
            console.log(err);
        }
    }
    static postData = async(url: string, data: URLSearchParams | FormData): Promise<void> => {
        try {
            await fetch(url, {
                method: 'POST',
                body: data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

const getCountries = async() => {
    const countries = await GetServerData.getData('https://restcountries.com/v3.1/name/fr')
    console.log(countries);
}
const myPostMessage = async() => {
    const data: URLSearchParams = new URLSearchParams()
    data.append('message', 'TORE');
    await GetServerData.postData('http://146.185.154.90:8000/blog/starman@gmail.com/posts', data)
}
const getPosts = async() => {
    const posts = await GetServerData.getData('http://146.185.154.90:8000/blog/starman@gmail.com/posts')
    console.log(posts);
}
getCountries();
myPostMessage();
getPosts();
