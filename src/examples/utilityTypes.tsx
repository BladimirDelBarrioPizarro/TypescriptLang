import React from 'react'


interface Sticker {
    id: number
    name: string
    createdAt: string
    updatedAt: string
    submitter: undefined | string
  }

// Partial convierte todas las etiquetas a opcionales

type StickerUpdateParam = Partial<Sticker>

// Readonly convierte todas las etiquetas a solo lectura

type StickerFromAPI = Readonly<Sticker>

// Record crea un tipo que usa la lista de propiedades de Keysform y les da el valor de Type

type NavigationPages = 'home' | 'stickers' | 'about' | 'contact' | 'test'

interface PageInfo {
    title: string
    url: string
    axTitle?: string
  }

const navigationInfo: Record<NavigationPages, PageInfo> = {
    home: { title: "Home", url: "/" },
    about: { title: "About" , url: "/about"},
    contact: { title: "Contact", url: "/contact" },
    stickers: {title: "Stickers", url: "/stickers/all"},
    test: {title:'Bladi',url:"/home"}
  } 
  
// Pick crea un tipo seleccionando el conjunto de propiedades keys del tipo.Esencialmente una lista de permisos para extraer el tipo de información
// de un tipo  

type StickerSortPreview = Pick<Sticker, "name" | "updatedAt">

const testPick:StickerSortPreview = {
    name:"Bladi",
    updatedAt:"12/02/2020"
}

// Omit crea un tipo eliminando el conjunto de claves de propiedad del tipo. Esencialmente una lista de bloqueo para extraer el tipo ing información de un tipo

type StickerTimeMetadata = Omit<Sticker, "name" | "createdAt" | "updatedAt" | "submitter" >

const testOmit:StickerTimeMetadata = {
    id:1
}

// Exclude crea un tipo de propiedad en las propiedades de Type que no se superponen con RemoveUnion

type HomeNavigationPages = Exclude<NavigationPages, "home">

// Extract crea un tipo en cualquier propiedad en propiedades de Type se incluyen si superponen con MatchUnion

type DynamicPages = Extract<NavigationPages, "home" | "stickers">

// NonNullable crea un tipo excluyendo nulo e indefinido de un conjunto de propiedades. Útil cuando tiene una verificación de validación.

type PageInfoLookupResult = PageInfo | undefined | null
type ValidatedResult = NonNullable<PageInfoLookupResult>

const testNonNullable:ValidatedResult = {
    title: "khjvsod",
    url: "/app",
    axTitle:"test"
}

// ReturnType extrae el valor de retorno de un tipo
const getoString = (a:number) => {
    return String(a)
}

type A = ReturnType<typeof getoString>

// InstanceType crea un tipo que es una instancia de una clase u objeto con otra función constructora

class StickerCollection {
    stickers: Sticker[]
    constructor(stickers: Sticker[]){
        this.stickers = stickers;
    }
  }

type CollectionItem = InstanceType<typeof StickerCollection>

const testInstanceType:CollectionItem = new StickerCollection([]);
console.log(testInstanceType)

// Required crea un tipo que convierte todos los prop opcionales a requeridos
type RequiredPageInfo = Required<PageInfo>

const UtilityTypes = () => {
    return (
        <h1>Utility Types</h1>
    )
}

export default UtilityTypes;