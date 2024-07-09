const findTheOldest = function (people) {
  let age = 0;
  let result = people.map((person) => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear()
    }
    let currAge = person.yearOfDeath - person.yearOfBirth
    if (currAge > age) {
      age = currAge
    }
    return {
      name: person.name,
      currAge
    }
  })
  return result.find((person) => person.currAge === age)
}

// Do not edit below this line
module.exports = findTheOldest;
