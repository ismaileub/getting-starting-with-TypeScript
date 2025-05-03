{
  //generic constraint keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle; //using operator

  const person1: Owner = "bike";
  const person: Owner2 = "ship";

  const user = {
    name: "Mr. persian",
    age: 26,
    address: "ctg",
  };

  //   user['name'] --->26

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const result1 = getPropertyValue(user, "name");

  //
}
