{
  //type Alias

  type Student = {
    name: string;
    age: number;
    contact?: string;
    gender: string;
    address: string;
  };

  const student1: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  } = {
    name: "Ismail",
    age: 23,
    gender: "male",
    contactNo: "0136547894",
    address: "dhaka",
  };

  const student2: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "ctg",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Ismail";
  const idadmin: IsAdmin = true;

  type Add = (x: number, y: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
