{
  //function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pashan",
  });

  //tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const resGeneric10 = createArrayWithTuple<string, { name: string }>(
    "Bangladesh",
    {
      name: "Bd",
    }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...addCourseToStudent,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr. x",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "Mr. y",
    email: "y@gmail.com",
    hasWatch: "Apple watch",
  });

  //
}
