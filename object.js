const frontEnd6b2 = [
    {
        firstName: 'sharon',
        surname: 'ibanga',
        DOB: '28-12',
        age: 23,
        state: 'akwa-ibom',
        Gender: 'female',
        hobbies: ['eating','sleeping', 'playing','coding']
    },
    
    {
        firstName: 'benson',
        surname: 'ibeh',
        DOB: '06-12',
        age: 25,
        state: 'abia',
        Gender: 'male',
        hobbies: ['photography','coding','football']
    },
    
    {
        firstName: 'kelubia',
        surname: 'urubusi',
        DOB: '03-08',
        age: 28,
        state: 'delta',
        Gender: 'male',
        hobbies:[ 'eating','drinking','coding'] 
    },
    
    {
        firstName: 'daniel',
        surname: 'ebuka',
        DOB: '04-19',
        age: 25,
        state: 'anambra',
        Gender: 'male',
        hobbies: ['eating','coding', 'exploring']
    },
    
    {
        firstName: 'amira',
        surname: 'olusesi',
        DOB: '04-24',
        age: 22,
        state: 'lagos',
        Gender: 'female',
        hobbies: ['eating', 'coding', 'reading']
    },
    
    {
        firstName: 'gideon',
        surname: 'owadara',
        DOB: '05-17',
        age: 25,
        state: 'ondo',
        Gender: 'male',
        hobbies: ['coding','reading', 'exploring']
    },
    
    {
        firstName: 'damola',
        surname: 'gbenga',
        DOB: '11-18',
        age: 24,
        state: 'ekiti',
        Gender: 'male',
        hobbies: ['coding','designing','exploring']
    },
    
    {
        firstName: 'tharewa',
        surname: 'umar',
        DOB: '04-16',
        age: 18,
        state: 'jigawa',
        Gender: 'female',
        hobbies: ['eating','sleeping','exploring']
    },
    
    {
        firstName: 'samiat',
        surname: 'usman',
        DOB: '04-21',
        age: 29,
        state: 'kwara',
        Gender: 'female',
        hobbies: ['eating','coding','exploring']
    },
    
    {
        firstName: 'stephen',
        surname: 'momoh',
        DOB: '06-12',
        age: 24,
        state: 'edo',
        Gender: 'male',
        hobbies: ['coding', 'designing','exploring']
    },
    {
        firstName: 'chidinma',
        surname: 'nwaneti',
        DOB: '07-14',
        age: 23,
        state: 'anambra',
        Gender: 'female',
        hobbies: ['eating','coding', 'exploring']
    },
    
    {
        firstName: 'shayo',
        surname: 'nwaneti',
        DOB: '07-14',
        age: 23,
        state: 'anambra',
        Gender: 'female',
        hobbies: ['eating','sleeping', 'exploring']
    },
    
]
// const persons = frontEnd6b2.map(person => {
//     return person.firstName
// })
// console.log(persons)

// const Gender = frontEnd6b2.filter(person => {
//     return person.Gender === 'female'  
// })
//  console.log(Gender)

const totalAge = frontEnd6b2.reduce((total, person) => {
    return total + person.age;
}, 0)

console.log(totalAge);