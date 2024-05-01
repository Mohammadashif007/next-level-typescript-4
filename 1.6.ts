function addNumber(num1: number, num2: number = 2):number {
    return num1 + num2;
}

addNumber(2, 3);

const addNum =(num1:number, num2:number):number => num2+num2; 


// when a function write in an object we call it method

const user1 = {
    name: "Ashif",
    balance: 0,
    addBalance(balance:number):string{ //! we are using here normal anonymous function because when we access object property in an function we have to use 'this' but this doesn't work in arrow function 
        return `My current Balance is : ${this.balance + balance}`
    }
}

const numbers: number[] = [1, 4, 69];

const newNumber:number[] = numbers.map((x:number):number => x*x)