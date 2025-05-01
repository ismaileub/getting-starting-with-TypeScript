{
  //
  //nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching...");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);

  //unknown typeof
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 36000;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
    if (typeof value === "string") {
      const [valeInNumber, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(valeInNumber) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("Invalid Input");
    }
  };

  getSpeedInMeterPerSecond(null);

  //never type
  function throwError(msg: string): never {
    throw new Error(msg);
  }

  throwError("sdfsdfsfdl");
  //
}
