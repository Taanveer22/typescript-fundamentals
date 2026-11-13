// ===== SQUARE BRACKET SYNTAX ======
const students: number[] = [];
console.log(students);
students.push(22);
students.push(44);
// == gives error ==
// students.push('ten');
console.log(students);

const players: string[] = [];
console.log(players);
players.push("ronaldo");
players.push("neymar");
// == gives error ==
// players.push(10)
console.log(players);

// ===== GENERIC SYNTAX ======
const tools: Array<string> = [];
console.log(tools);
tools.push("node");
tools.push("vite");
console.log(tools);

const boxes: Array<number> = [];
console.log(boxes);
boxes.push(5);
boxes.push(7);
console.log(boxes);
