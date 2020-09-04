let criteriaMap = {
  'gender': 'Female',
  'last_name': 'Johnson'
}

function filterEmployees(data, criteria) {
  let isItFemale = a => a.gender === "Female" ? true : false;
  let isThisTheName = (a, lName) => a.last_name === `${criteria.split('-')[1]}` ? true : false;
  let genderFilter;
  let lNameFilter;
  if (criteria.split('-')[1] === criteriaMap.gender) {
    return genderFilter = (data.filter(isItFemale).map(x => display(x)));
  }
  if (criteria.split('-')[1] === criteriaMap.last_name) {
    return lNameFilter = (data.filter(isThisTheName).map(x => display(x)));
  }
}
function display(inputObj) {
  let id = inputObj.id - 1;
  let first_name = inputObj.first_name;
  let last_name = inputObj.last_name;
  let email = inputObj.email;
  console.log(`${id}. ${first_name} ${last_name} - ${email}`);
}
// let data = JSON.parse(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`);

let data = JSON.parse(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`)
console.log(filterEmployees(data, 'last_name-Johnson'));
