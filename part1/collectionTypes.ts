// array
const scores: number[] = [22, 44, 77];
console.log(scores);

const languages: Array<string> = ["js", "ts"];
console.log(languages);

// tuple
const userSession: [number, string, boolean] = [11, "john", true];
console.log(userSession);

// generic object
const mentor: object = {
  fullName: "Hasin Hayder",
  subject: "typescript",
  year: 2026,
};
console.log(mentor);

// explicit inline object
const employee: { id: number; positon: string } = {
  id: 101,
  positon: "developer",
};
console.log(employee);
