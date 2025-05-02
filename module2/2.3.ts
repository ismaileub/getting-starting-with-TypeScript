{
  ///
  //--->generic type

  //   type GenericArray = Array<number>;
  //   type GenericArray<param> = Array<param>;
  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [3, 6, 9];
  const rollNumber: Array<number> = [3, 6, 9];
  //   const rollNumber1: GenericArray = [3, 6, 9];
  const rollNumber1: GenericArray<number> = [3, 6, 9];

  //   const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  //   const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  //   const boolArray: boolean[] = [true, false, true];
  //   const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const add = (x: number, y: number) => x + y;

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "janker",
      //   age: '1000',
      age: 1000,
    },
  ];

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  // const manush: [string, string] = ["Mr. X", "Mr. Y"];
  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "persian", email: "a@gmail.com" },
  ];

  type User = {
    name: string;
    age: number;
  };

  interface Users {
    name: string;
    age: number;
  }

  //
}
