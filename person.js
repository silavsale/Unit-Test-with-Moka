function gatherNamesOf(arrayOfPeople) {
    return arrayOfPeople.map(function (person) {
        person.name;
    })    
}

const people = [{name: 'Joe'}, {name: 'Mark'}, {name: 'Eve'}]
const names = gatherNamesOf(people)


console.log(people);
console.log(names);