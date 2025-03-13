const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

const totalScore = students
  .filter((s) => {
    if (s.score > 50) {
      return s;
    }
  })
  .map((s) => {
    s.score = s.score * 1.1;
    return s.score;
  })
  .reduce((acc, s) => {
    return (acc += s);
  }, 0);

console.log(totalScore);
