{
  //
  //--> interface
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  //type rollNumber = number;

  //   const user1: User1 = {
  //     name: "Persian",
  //     age: 23,
  //   };

  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user1: UserWithRole2 = {
    name: "Persian",
    age: 23,
    role: "manager",
  };

  const user2: User2 = {
    name: "Ismail",
    age: 22,
  };

  // js--> object, array-->object, function --> object
  type Roll = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add1 = (num1, num2) => num1 + num2;
  //
}
