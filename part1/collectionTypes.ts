// =========================================================
// ========= ARRAY ==================
// =========================================================

// array square bracket syntax
const scores: number[] = [22, 44, 77];
console.log(scores);
scores.push(55);
console.log(scores);

// array generic syntax
const languages: Array<string> = ["js", "ts"];
console.log(languages);
languages.push("java");
console.log(languages);

// array fixed length syntax (tuple)
const userSession: [number, string, boolean] = [11, "john", true];
console.log(userSession);

// array fixed length sytax (union types)
const mixedData: (string | number | boolean)[] = ["john", 26, true];
console.log(mixedData);

// =========================================================
// ========= OBJECT ==================
// =========================================================

// generic object syntax
const mentor: object = {
  fullName: "Hasin Hayder",
  subject: "typescript",
  year: 2026,
};
console.log(mentor);

// inline object syntax
const employee: { id: number; positon: string } = {
  id: 101,
  positon: "developer",
};
console.log(employee);

// type blueprint object syntax
type User = {
  id: number;
  name: string;
};

const fahad: User = {
  id: 1,
  name: "fahad",
};

const arafat: User = {
  id: 2,
  name: "arafat",
};

console.log(fahad, arafat);

// interface blueprint object syntax
interface Student {
  section: string;
  roll: number;
}

const mahdi: Student = {
  section: "Daffo",
  roll: 114,
};

const tanvir: Student = {
  section: "Dolon",
  roll: 141,
};

console.log(mahdi, tanvir);
