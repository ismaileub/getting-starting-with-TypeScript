{
  //constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...addCourseToStudent,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Mr. x",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 223,
    name: "Mr. y",
    email: "y@gmail.com",
    hasWatch: "Apple watch",
  });

  const student3 = addCourseToStudent({
    id: 44,
    name: "Mr. z",
    email: "z@gmail.com",
    emni: "emni",
  });

  //
}
