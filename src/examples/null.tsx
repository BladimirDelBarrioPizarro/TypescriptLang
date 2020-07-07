import React from 'react'


const emptyObj:any= {}
const andUndefinedProperty:undefined = emptyObj["lo que sea"]

type PotentialString = string | undefined | null;

const getId:PotentialString =  null


const getID = (name:PotentialString) => {
    return name
}
const name = 'Bladi'
const userID = getID(name);

console.log("User Logged in: ", userID?.toUpperCase());

const definitelyString1 = getID(null) as string;
const definitelyString2 = getID('Bladi')!;
console.log(definitelyString1)
console.log(definitelyString2)

// void

const voidFunction = () => {};
const resultOfVoidFunction = voidFunction();

const Null = () => {
    return (
        <h1>Null</h1>
    )
}

export default Null;