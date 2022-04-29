let user = {
  id: 6,
  name: "Hossein",
  lastName: "Zenderoh",
  roles: ["student", "admin"],
  age: 19,
  scores: { english: 10, math: 19.5, physics: 14 },
};
function addScore(score, course) {
  user = { ...user, scores: { ...scores, [course]: score } };
  return user;
}

function addRole(role) {
  user = { ...user, roles: [...roles, role] };
  if (user[age] < 18) {
    user.status = "veryyoung";
  }
  return user;
}
let userArr = Object.entries(user);
userArr.push(['fatherName', 'ali']);
user = Object.fromEntries(userArr);

// console.log(user);
