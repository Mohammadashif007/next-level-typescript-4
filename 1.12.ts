{

// ! nullable type

// const searchName = (name: string | null) => {
//     if(name){
//         console.log(`${name} Searching`);
//     }
//     else{
//         console.log("nothing to search");
//     }
// }


// searchName(null)


// Unknown type 

const getSpeedInMeterPerSecond  = (value: unknown) => {
    if(typeof value === "number"){
        const converted = (value * 1000)/3600;
        console.log(`The speed is ${converted} ms^-1`);
    }

    // else if (value === "string"){
    //     const valueInNumber = value.split(" ");
    //     console.log(valueInNumber);
    // }
    else if(typeof value === "string"){
        const [result, unit] = value.split(" ");
        // const [result, unit] = parseInt(valueInNumber[0]);
        // const convertedValue = `${speedValue/3600} ms^-1`
        // console.log(convertedValue);
        const converted = (parseFloat(result) * 1000)/3600;
        console.log(`The speed is ${converted} ms^-1`);
       
    }

    else {
        console.log("wrong input");
    }
   
}

getSpeedInMeterPerSecond(null)



//! never type

const throwError = (message:string):never => {
    throw new Error(message)
}

throwError("Encounter an error")










}