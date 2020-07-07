import React from 'react'

const jsonParser = (jsonString: string) => JSON.parse(jsonString);
const myAccount = jsonParser(`{ "name": "Dorothea" }`);
myAccount.name = 'Bladi'
myAccount.email = 'bb@gmail.com'

console.log("Unknown: ",myAccount)

const jsonParserUnknown = (jsonString: string): unknown => JSON.parse(jsonString);
const myOtherAccount = jsonParserUnknown(`{ "name": "Samuel" }`);

console.log("Unknown: ",myOtherAccount) 

type User = { name: string };
const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`) as User;
myUserAccount.name = 'Bladi'

console.log("Unknown: ",myUserAccount) 

  const neverReturns = () => {
     throw new Error("Always throws, never returns");
   };

// const myValue = neverReturns();
// console.log("Unknown: ",myValue) 

const validateUser = (user: User) => {
    if (user.name === 'Bladimir') {
      console.log(user.name);
    }
    else{
        console.log(neverReturns())
    }
  };
  const user:User = {
      name:'Bladimir'
  }
  validateUser(user)

  /* ENUM */ 

enum Flower {
    Rose,
    Rhododendron,
    Violet,
    Daisy
  }

const flowerLatinName = (flower: Flower) => {
    switch (flower) {
      case Flower.Rose:
        return console.log("Rosa rubiginosa");
      case Flower.Rhododendron:
        return console.log("Rhododendron ferrugineum");
      case Flower.Violet:
        return console.log("Viola reichenbachiana");
      case Flower.Daisy:
        return console.log("Bellis perennis");
  
      default:
        const _exhaustiveCheck: never = flower;
        return _exhaustiveCheck;
    }
  };  
  
  let flower:Flower = Flower.Rose;
  flowerLatinName(flower)

  type NeverIsRemoved = string | never | number;

const Unknown = () => {
    return(
        <p>Unknown</p>
    )
}

export default Unknown;