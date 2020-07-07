import React from 'react'

const Examples = () => {
    /*     ALIAS    */
   
    type Message = boolean;
    type FunctionVoid = () => void;
    type Generic<T> = {
      value: T
    }

    type ReducerFunction<S> = (previusState:S,update:Partial<S>) => S;

    /* INTERSECCION -> Combinar multiples tipos en uno solo */
     type Merged = {a:string} & {b:string}
     const ab:Merged = {a:'Hola',b:'Mundo'}
     //Caso Base
     type Merged2 = {a:string} & {b:number}
     //Caso Práctico
     const compose = <A,B> (a: A,b: B) : A & B => ({...a,...b})

     const cat = compose({type:"feline"},{skill:"hunting"});
     console.log("Interseccion: ",cat)
     const pigeon = compose({type:true},{skill:"hunting"});
     console.log("Interseccion: ",pigeon)

     /* UNION */
     //Caso Base
     type A = "a" | "A" | "á" 
     type B = "b" | "B"
     type AB = A | B
     //Caso Práctico
     const saySomething = (message:string|number) => console.log("Union: ",message)
     console.log(saySomething("texto"))
     console.log(saySomething(1)) 

     /* GUARDAS -> Desambiguar uniones*/
     //Caso Base
     
     //Caso Práctico
     const randomBool = () : boolean => Boolean(Math.round(Math.random()))

     interface Human {
       sleep: () => void;
     }
     interface Man extends Human{
       moustache:boolean
     }
     interface Woman extends Human{
       longHair:boolean
     }
     const randomMan = ():Man =>({
       moustache:randomBool(),
       sleep:() => console.log("Man is zzz")
     })
     const randomWoman = ():Woman =>({
      longHair:randomBool(),
      sleep:() => console.log("Woman is zzz")
    })
    const getRandomPerson = ():Man|Woman => randomBool()? randomMan():randomWoman();
    const person = getRandomPerson();
    
    if("moustache" in person){
      if(person.moustache){
        console.log("GUARDAS: Hombre",person)
      }
      else{
        console.log("GUARDAS: Mujer",person)
      }
    }

    if((person as Man).moustache !== undefined){
      console.log("GUARDAS: Man with moustache:",(person as Man).moustache)
    }


    const isMan = (whoever:Man|Woman) :whoever is Man => "moustache" in whoever
    
    if(isMan(person)){
      console.log("GUARDAS: Hombre",person.moustache)
    }
    else{
      console.log("GUARDAS: Mujer",person.longHair)
    }

   /* GUARDAS -> Tipos primitivos*/
   //Caso Práctico
    const giveMeSomething = () :number | string => (randomBool() ? 13 : 'trece')
    const someThing = giveMeSomething();
    if(typeof someThing === 'string'){
      console.log("GUARDA: ",someThing+' es un string')
    }
    if(typeof someThing === 'number'){
      console.log("GUARDA: ",someThing,'es un number')
    }
    /* GUARDAS -> instanceof -> Comprobar si una instancia pertenece a cierta clase*/
    class Bool {
      value:boolean = true
    }
   
    const giveMeSomeClass = (): Bool | String => (randomBool() ? {value:true}:"trece")

    const someClass = giveMeSomeClass()
    
    if(someClass instanceof Bool){
      console.log("GUARDA: Es Bool")
    }
    if(someClass instanceof String){
      console.log("GUARDA: Es String")
    }

    /** STRING & NUMERIC LITERALS */

    type LabourDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"
    const day:LabourDay  = "Monday"

    const thhrowDay = (): 1 |2 |3 |4 |5 | 6 => 6

    /** KEYOF -> Extraer propiedades de una interface */
    // Caso Base
    interface Week{
      monday:string;
      tuesday:string,
      wednesday:string,
      thrusday:string,
      friday:string,
      saturday:string,
      sunday:string
    }

    type Day = keyof Week;
    //Caso Práctico
   /*  const showProps =  (obj: T, ...keys: (keyof T)[]): void => {
      keys.forEach(element => 
        console.log("KEYOF : ",obj[element]));
    }

    const dev = {
      type:"frontend",
      languages:["js","css","html"],
      senior:true
    }

    showProps(dev,"languages","senior") */

    /** INDEX TYPE */
   /*  type LangugesType = (typeof dev)['senior']
    type WeeksType = Week['friday'] */
    

    /** MAPPED TYPE */
    // Caso Base
    // Caso Práctico
    interface ProductItem {
      name:string,
      price:number
    }

    type ProductName = ProductItem['name']

    type Evolver<T> = {
      [Key in keyof T] : (arg: T[Key]) => T[Key]
    }

    const formatString = (str:string) => (
      str = str.trim(),
      str[0].toUpperCase() + str.substr(0)
    )

    const applyIVA = (price: number) : number => price * 1.21;
    
    const transformattion: Evolver<ProductItem> = {
      name: formatString,
      price: applyIVA
    }

  /*   const evolve = <Obj extends object> (transformations:Evolver<Obj>,obj:Obj):Obj => {
      return Object.keys(obj).reduce<Obj>((result,key) => {
        result[key] = key in transformations
        ? transformations[key](obj[key])
        : obj[key]
      return result;   
      },[] as Obj)
    }
     
    const product: ProductItem = {
      name: "mac pro 16",
      price: 2345
    }


    const updatedProduct = evolve(transformattion,product)
    console.log("MAPPED TYPE: ",updatedProduct) */

    /* TIPOS CONDICIONALES -> Mapeamos tipos comprobando si el valor es un valor u otro*/

    type DarkColors = "black" | "grey"
    type LightColors = "white" | "pink"
    type Status = "sad" | "happy"

    type Palette<T extends Status> = T extends "sad" ? DarkColors:LightColors
    const palette: Palette<"sad"> = "black"
    console.log("TIPOS CONDICIONALES: ",palette)

    /** RECURSIVIDAD */
    //Recursividad en interfaces

   /*  interface TreeNode<T> {
      value:T;
      children?: Array<TreeNode<T>>;
    }

    const myTree: TreeNode<number> = {
      value:1,
      children:[
         {
           value:1,
           children:[{
             value:2
           }]
         }
      ]
    }
    
    console.log("RECURSIVIDAD: ",myTree) */

    /** RECURSIVIDAD EN ALIAS CON INTERFACES */
    type IterableList<T> = T & {next: IterableList<T>}
    interface Student{
      name:string
    }
    let classList:IterableList<Student>
    //classList.next.name;

    /** RECURSIVIDAD EN ALIAS */
    //interface TreeChildren<T> extends Array<TreeNode<T>> {}; //Middleman type
    //type TreeNode2<T> = T | TreeChildren<T>;
    //const myTree2:TreeNode<string> = ["hello",[4,"world"]]

    type TreeNode<T> = T | Array<TreeNode<T>>;
    const myTree2: TreeNode<boolean> = [true,[false,true,[false]]]


    /*  TIPOS GENÉRICOS DE UTILIDADES*/
    /** READONLY */ 
    //Caso BasePartialype ROArray<T> = Readonly<Array<T>>
   /*  const sampleArray = [1,2,3,4]
    const tailMutable =  (array:T[]) : T[] => (array.shift(),array);  
    const tailInmutable =  (array:Readonly<T[]>) : T[] => {
      const[, ...tail] = array || []
      return tail;
    } 
     console.log("READONLY: ",sampleArray,tailMutable(sampleArray))
     console.log("READONLY: ",sampleArray,tailInmutable(sampleArray))  */

     //Definición
     type MyReadOnly<T> = {
       readonly [P in keyof T] : T[P]
     }
     
     /** PARTIAL */
     //Caso Base
     interface Person{
       name:string,
       age:number
     }
     type PartialPerson = Partial<Person>;
     //Caso Práctico
     const createState = <T extends object> (initialState: T) => {
        let state: T = initialState
        return {
          setState: (partialState: Partial<T>): T => 
            (state = {...state, ...partialState})
          }
        }
     
   
     const { setState } = createState({
       username:"Bladi",
       posts:13,
       premium:false
     }) 

     console.log("PARTIAL: ",setState({posts:19,premium:true}))
     //Definición
     type MyPartial<T> = {
       [P in keyof T] :T[P];
     }
    
     /** REQUIRED -> De un tipo convertir en requeridas todas sus propiedades*/
     interface ICords{
       y:number,
       x?:number,
       z?:number
     }
     
     const coords3D : Required<ICords> = {
        y : 1,
        x : 3,
        z : 4
     }

     console.log("REQUIRED: ",coords3D)

     /** EXCLUDE $ EXTRACT */
     //Caso Base
     type WeekDay = "lun"|"mar"|"mier"|"jue"|"vier"|"sab"|"dom"
     type WorkDay = Exclude<WeekDay, "sab"|"dom">
     type Weekend = Extract<WeekDay,"sab"|"dom">
     //Caso Practico
     type Diff<A extends object,B extends object> = {
       [P in Exclude<keyof A, keyof B>]:A[P]
     }

     type Comm<A extends object,B extends object> = {
      [P in Extract<keyof A, keyof B>]:A[P] | B[P]
    }

    interface UserDetails{
      name:string,
      id:string,
      age:number,
      phone:number,
      married:boolean
    }

    interface UserId{
      name:string,
      id:number
    }

    type UserDiff = Diff<UserDetails,UserId>
    type UserCommon = Comm<UserDetails,UserId>

    /** PICK & OMIT -> Extraemos de una interface un conjunto de propiedades u con esas creamos otra*/
    interface UserId2{
      name:string,
      id:number,
      married?:boolean
    }

    type EmployeeID = Pick<UserId2,"name"|"married">
    type EmployeeID2 = Omit<UserId2,"name"|"married">
    type EmployeeID3 = Omit<UserId2,keyof EmployeeID>
    
    /** RECORD  -> Armamos objetos desde cero apartir de una unión y un tipo*/
    type Sizes = "small" | "medium"| "large"
    type EurSizes = Record<Sizes,string>
    type UkSizes = Record<Sizes,number>
    const eurSizes: EurSizes = {small:"s",medium:"m",large:"l"}
    const ukSizes:UkSizes = {small:3,medium:10,large:13}

    /** NULLABLE -> Extraemos de un tipo de unión los valores null o undefined */
    type Chooise = "left" | "right" | "center" | undefined | null;
    type validChoose = NonNullable<Chooise>

    /** FUNCTION HELPERS */
    const addTimeStamp = (user: UserId2,userLocale:boolean = false) => ({
      ...user,
      timestamp: userLocale ? Date().toLocaleString() : Date.now()
    })

    type UserWithTImeStamp = ReturnType<typeof addTimeStamp>
    type Params = Parameters<typeof addTimeStamp>
    //Caso Practico

    type GenericFunction = (...args:any[]) => any
   

return(
  <div>Examples Typescriot</div>
)

}



export default Examples;