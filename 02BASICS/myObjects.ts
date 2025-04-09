const Person = {
    name: "Suyog",
    email: "s@s.com",
    phone: "889767696"
}


function createUser({ name, email, phone }: { name: string, email: string, phone: number }) {
    return {}
}

createUser({ name: "Suyog", email: "s@s.com", phone: 545456464 })


function createCourse(): { name: string, isPaid: boolean } {
    return { name: "Suyog", isPaid: false }
}


//type Alias

type User = {
    name: string;
    phone: number;
    isPaid: boolean;
}

function personUser({ name, phone, isPaid }: User) {
    return { name: "", phone: 123, isPaid: true }
}

personUser({ name: "", phone: 123, isPaid: true })

//2nd way
function personUser1(user: User) {
    return { name: "", phone: 123, isPaid: true }
}

personUser1({ name: "", phone: 123, isPaid: true })



type myUser = {
    readonly _id: string;
    name: string;
    isActive: boolean;
    phone: number;
}

const user:myUser = {
    _id:"1234",
    name:"Suyog",
    isActive:false,
    phone:282776282
}

type cardNumber = {
    cardNumbers:string
}

type cardDate = {
    carddate:string
}

type cardDetails = cardNumber & cardDate & {
    name:string;
    validity:boolean;
}

// const card:cardDetails = {

// }

// user._id= "suyog" 