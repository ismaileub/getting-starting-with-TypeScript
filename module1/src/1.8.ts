//destructuring

{
  const user = {
    id: 14,
    name: {
      firstName: "Ismail",
      middleName: "Hossain",
      lastName: "Arafat",
    },
    contactNo: "0146958753",
    address: "BD",
  };

  const {
    contactNo,
    name: { middleName: midName },
  } = user;

  //array destructuring

  const Friends = ["chandler", "joey", "ross", "rachel", "monica"];
  const [, , bestFriend, ...rest] = Friends;
}
