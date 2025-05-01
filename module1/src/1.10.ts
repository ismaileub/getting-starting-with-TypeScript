{
  //
  // union types
  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  //   type FullstackDeveloper = "fakibazDeveloper" | "expertDeveloper";

  //   type Developer = FrontendDeveloper | FullstackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  //intersection type

  type FrontendDeveloper = {
    skills: string[];
    designation1: "FrontendDeveloper";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "BackendDeveloper";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["html", "css", "express"],
    designation1: "FrontendDeveloper",
    designation2: "BackendDeveloper",
  };

  //
}
