interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "John Doe", email: "johndoe@example.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
];

users.forEach(user => console.log(user.name));
