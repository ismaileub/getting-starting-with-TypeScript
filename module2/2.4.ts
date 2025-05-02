{
  //

  //--> interface - generic

  interface Developer<T, X = null> {
    //default parameter
    name: string;
    computer: {
      brand: string;
      model: string;
      releasedDate: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilaWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilaWatch> = {
    name: "persian",
    computer: {
      brand: "Asus",
      model: "x-255ur",
      releasedDate: 2013,
    },
    smartWatch: {
      brand: "Casio",
      model: "jw66",
      display: "OLLD",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "janker",
    computer: {
      brand: "HP",
      model: "x-255ur",
      releasedDate: 2013,
    },
    smartWatch: {
      brand: "Apple",
      model: "jw66",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
