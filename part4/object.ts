// inline object
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "tanvir",
};

console.log(user);

// type bluprint
type Mentor = {
  name: string;
  sections: number;
};

const mentor1: Mentor = {
  name: "hasin",
  sections: 7,
};

const mentor2: Mentor = {
  name: "sumit",
  sections: 5,
};

console.log(mentor1, mentor2);

// interface blueprint
interface Academy {
  name: string;
  students: number;
}

const academy1: Academy = {
  name: "lws",
  students: 2000,
};

const academy2: Academy = {
  name: "lwhh",
  students: 1000,
};

console.log(academy1, academy2);
