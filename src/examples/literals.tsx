import React from 'react'


const helloWorld = "Hello World";
let hiWorld = "Hi World"; 

const allowsAnyString = (arg: string) => {return console.log(arg)};
allowsAnyString(helloWorld);
allowsAnyString(hiWorld);

const myUser = {
    name: "Sabrina"
  };
  
myUser.name = "Cynthia";  

const myUnchangingUser = {
    name: "Fatma"
  } as const;



const Literals = () => {
    return(
        <p>Literals</p>
    )
    
}

export default Literals;