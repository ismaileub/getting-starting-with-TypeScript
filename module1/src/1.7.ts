const poorUser = {
  name: "ismail",
};

//spread operator
// rest operator
//destructing

//learn spread operator

const mentors1 = {
  typescript: "mezba",
  redux: "mir",
  dbms: "Mizan",
};

const mentors2 = {
  prisma: "Firoz",
  next: "Tanmoy",
  cloud: "Nahid",
};

const mentorsList = {
  ...mentors1,
  ...mentors2,
};

//learn rest operator

const greetFriend = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};
