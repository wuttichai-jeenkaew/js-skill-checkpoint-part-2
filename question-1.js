const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้

let sumPeople = [...techupPeople, ...techcoolPeople]

const findLess20 = sumPeople.filter((less20)=>{
    if (less20.age < 20) {
      return sumPeople
    }
})


console.log(findLess20);