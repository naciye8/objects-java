/*const firstname = "ahmet first"

const hayvan = ['kedi', 'kopek', 5]
const insan = {
    firstname: "naciye",
    surname: "sari",
    "family": "koyuncular",
    age: 30
}
console.log(hayvan[0])
console.log(insan.age)

//koseli parantez kullanirsak tirnakla yaziyoruz
console.log(insan["firstname"])
console.log(insan["family"])

let degisken = "age"
console.log(insan[degisken])//==>insan["age"]

const myCar = {
    brand: "toyota",
    model: "2017",
    color: "red",
    km: 86000,
    fuel: "lpg",

}
myCar.vites = "auto"
myCar.km = 87000
console.log(myCar)

const myBootcamp = new Object();//=>{}
myBootcamp.name = "FullStack"
myBootcamp.teacher = "mustafa";
console.log(myBootcamp)


//object constructor
function carCreator(brand,model,color,km) {
    this.brand =brand;
    this.model =model;
    this.color =color;
    this.km =km;
}
const honda=new carCreator("honda","civic","blue",15000)
console.log(honda)
console.log(honda.color)

const newBoot={
    name:"fullstack",
    lessons:["Js","React","nodeJs"],
    teachers:{
        teacher_1:{
            name:"mustafa",
            surname:"ggg",
        },
        teacher_2:{
            name:"firat",
            surname:"d"

        }
    }
}
console.log(newBoot.teachers.teacher_1.name)
console.log(newBoot.lessons[0])

const user={
   firstname:"mehmet",
   lastname:"koyun",
   country:"turkey",
  fullname:function(param){
      //return `${this.firstname.toUpperCase()}  ${this.lastname.toUpperCase()}"`
       return this.firstname.toUpperCase() +" "+ this.lastname.toUpperCase()+" "+param+ "yasinda";
   }
}
console.log(user.lastname)
console.log(user.fullname(44))
document.write(user.fullname(33))
console.log(user)
delete user.country;
console.log(user)

user.country="finland"
for (key in user) {//key yerine istedigimis seyi yazabiliriz
    console.log(key)
    console.log(user[key])
    
}
*/


let person = {
    firstname: "ali",
    lastname: "kara",
    age: 25
}

for (const key in person) {
    console.log(key)
}
const keys = Object.keys(person)
console.log(keys)

const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries)

/*const newPerson = person;
console.log(newPerson)

person.age = 34;
console.log(person)
console.log(newPerson)

const newnew = "new";
const yeni = newnew;
console.log(newnew, yeni)
newnew = "eski";
console.log(newnew, yeni)


const newArr = "new";
const yeniArr = newArr;
console.log(newArr, yeniArr)
newnew = "eski";
console.log(newArr, yeniArr)*/


/*const newPerson = person;
// console.log(newPerson)

person.age = 34;
// console.log(person)
// console.log(newPerson)

const copyPerson=Object.assign({age:66},person)
console.log(copyPerson)
person.age=46;
copyPerson.lastname="yenilast"
console.log(copyPerson)

const yepyeniPerson=Object.assign(person,copyPerson)
console.log(yepyeniPerson)
person=copyPerson
console.log(person)

console.log(copyPerson.hasOwnProperty("age"))*/

const today= new Date()
console.log(today)
const spesificDate=new Date("11-02-2021 15:30")
console.log(spesificDate)
console.log(spesificDate.getDate())//spesifik gun
console.log(spesificDate.getMonth()+1)//spesifik ay
console.log(spesificDate.getFullYear())//spesifik yil
console.log(spesificDate.toLocaleDateString())
