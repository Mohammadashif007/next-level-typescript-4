{
// ! ternary || optional chaining || Nullish coalescing operator

const age: number = 11

if(age >= 18){
    // console.log("adult");
}
else{
    // console.log("not adult");
}


const isAdult = age>=18 ? "adult" : "not adult";
// console.log(isAdult);


// ! nullish coalescing operator

// ! When to make decision based on null and undefined, we will use nullish coalescing operator


// const isAuthentication = undefined;

// const result1 = isAuthentication ?? "Guest"
// const result2 = isAuthentication ? isAuthentication : "Guest"

// console.log({result1: result1}, {result12: result2});

type User = {
    name: string, 
    address : {
        city: string,
        presentAddress: string,
        permanentAddress?: string,
    }
}

const person: User = {
    name: "Biden",
    address: {
        city: "dhk",
        presentAddress: "town",

    }
}

const permanentAddress = person?.address?.permanentAddress ?? "No permanent Address Available";
console.log({permanentAddress});









































}