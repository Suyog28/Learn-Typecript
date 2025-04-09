//union type


let score : number | string = 33

score = 44
score = "34" 

type User = {
    name:string;
    id:number;
}

type Admin = {
    username:string;
    adminid:number;
}

let employee: User | Admin = { name:"suyog", id:342, username:"suy",adminid:323}


//array

const data : number[] = [1,2,3]
const data2 : string[] = ["1","3"]
const result : (number | string | boolean)[] = [12,3,1,"Suyog",true]