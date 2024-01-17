// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  users.push(user);
};

export const authenticateUser = (reqUser) => {
  const user = users.find(u => u.email === reqUser.email && u.password === reqUser.password);
  return user !== undefined;
};
