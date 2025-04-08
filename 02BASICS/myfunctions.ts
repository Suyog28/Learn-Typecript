function addTwo(num:number){
    return num + 2
}

addTwo(5)


let person = (name:string,email:string,isPaid:boolean)=>{}

person("suyog","s@s.com",false)


function addString(name:string){
    return name
}

addString("Suyog")

const person2 = (name:string):string=>{
return name
}

person2("suyog")


const person3 = (name:string):void=>{
console.log(name)
    }
    
    person3("suyog")

    
const errorMsg = (err):never=>{
    throw new err
    }
    
    errorMsg("suyog")