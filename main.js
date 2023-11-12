// //random birthday
function randomBirthDay(maxAge, minAge) {
  //get current year
  const currentYear = new Date().getFullYear();

  //random month in year
  const randomMonth = Math.floor(Math.random() * 12); // 0 to 11

  //get day in month
  const daysInRandomMonth = new Date(currentYear, randomMonth + 1, 0).getDate();

  //get random day
  const randomDay = Math.floor(Math.random() * daysInRandomMonth) + 1;

  //get current year with random month and random day
  const date = new Date(currentYear, randomMonth, randomDay);

  //get random age
  const randomAge = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

  //get new birthday
  const newBirthDay = new Date(
    date.getFullYear() - randomAge,
    date.getMonth(),
    date.getDate()
  );

  return newBirthDay.toISOString();
}

const firstNames = [
  "Jakub",
  "Jan",
  "Tomáš",
  "Adam",
  "Martin",
  "Petr",
  "Josef",
  "Pavel",
  "Lukáš",
  "Jiří",
  "Marek",
  "Filip",
  "Václav",
  "Karel",
  "David",
  "Michal",
  "Patrik",
  "Ondřej",
  "Zdeněk",
  "František",
];

const lastNames = [
  "Novák",
  "Svoboda",
  "Novotný",
  "Dvořák",
  "Černý",
  "Procházka",
  "Kučera",
  "Veselý",
  "Horák",
  "Němec",
  "Pospíšil",
  "Marek",
  "Král",
  "Pokorný",
  "Růžička",
  "Beneš",
  "Fiala",
  "Šimek",
  "Jelínek",
  "Mach",
];

function randomValueInArray(array) {
  const index = Math.floor(Math.random() * array.length);
  let result = array[index];
  return result;
}
const dtoIn = {
  count: 50,
  age: {
    min: 19,
    max: 35,
  },
};

function main(dtoIn) {
  const genderArr = ["male", "female"];
  const workLoadArr = [10, 20, 30, 40];
  const dtoOut = [];
  for (let i = 0; i < dtoIn.count; i++) {
    let name = randomValueInArray(firstNames);
    let surname = randomValueInArray(lastNames);

    let birthday = randomBirthDay(dtoIn.age.max, dtoIn.age.min);

    let gender = randomValueInArray(genderArr);

    let workload = randomValueInArray(workLoadArr);

    let result = {
      gender: gender,
      birthday: birthday,
      name: name,
      surname: surname,
      workLoad: workload,
    };
    dtoOut.push(result);
    console.log(result);
  }
}

main(dtoIn);
