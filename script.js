// OBJECTS
// Key value pairs

// const person = {
//   name: 'Leonardo', 
//   shirt: 'white'
// }

// Access object: dot notation vs. bracket notation

// console.log(person.name)
// console.log(person.shirt)

// // Bracket notation

// console.log(person['name'])
// console.log(person['shirt'])

// Assign object

// person.phone = '1-222-333-4444'
// console.log(person.phone)
// console.log(person)

// Person2

//  const person2 = {
//    name: 'Geo',
//    shirt: 'blue'
//  }

// console.log(person2.name)

// ES6 arrow function (2 arguments)
// Object
// Template literals

const introducer =(name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    netWorth: function () {
      return this.assets - this.liabilities
    }
  }

  const intro = `HI, my names is ${person.name} and the color of my shirt is ${person.shirt}, and my net worth is ¥${person.netWorth()} RMB.`
  return intro
}

console.log(introducer('Geo', 'blue'))
console.log(introducer('Leonardo', 'white'))