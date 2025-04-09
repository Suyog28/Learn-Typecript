const Person = {
    name:"Suyog",
    email:"s@s.com",
    phone:"889767696"
}


function createUser({name,email,phone}:{name:string,email:string,phone:number}){
return {}
}

createUser({name:"Suyog",email:"s@s.com",phone:545456464})


function createCourse():{name:string, isPaid:boolean}{
 return {name:"Suyog",isPaid:false}
} 


//type Alias

type User = {
    name:string;
    phone:number;
    isPaid:boolean;
} 

function personUser({name,phone,isPaid}:User){
 return {name:"",phone:123,isPaid:true}
}

personUser( {name:"",phone:123,isPaid:true})

//2nd way
function personUser1(user:User){
    return {name:"",phone:123,isPaid:true}
   }
   
   personUser1( {name:"",phone:123,isPaid:true})