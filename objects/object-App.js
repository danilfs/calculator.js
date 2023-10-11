// const person = {
//     name: 'Danil',
//     address:{
//         city:'Spb',
//         street:'Pleseckaya'
//     } ,
//     languages: ['ru', 'en'],
//     'complex key' : 'complex value',
//     [1 + 4]: 'computed value',
//     greet (){
//         console.log('Hello')
//     }
    
// }

// console.log(person)
// person.greet()
// const addressKey = 'address'
// console.log(person[addressKey])
// person.languages.push('de')
// delete person.name
// console.log(person)

// const {name, languages} = person
// console.log(name, languages)

const getData = () => new Promise((resolve) => resolve ([1,2,3])) 


async function asyncExample() {
    try{
        const data = await getData()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log('Finally')
    }
}

asyncExample()