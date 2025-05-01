{
  //
  //ternary operator || optional chaining || nullish coalescing

  const age: number = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const idAdult = age >= 18 ? "adult" : "Not adult";
  //console.log({ idAdult });

  //nullish coalescing operator
  // null / undefined ---> decision making

  //   const isAuthenticated = "";
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Ismail",
    address: {
      city: "ctg",
      road: "road-11",
      presentAddress: "ctg town",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanentAddress";
  console.log({ permanentAddress });

  //
}
