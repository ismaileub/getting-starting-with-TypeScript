//Reference type--> object

const user: {
  readonly company: "Programming Hero"; //type -->literal types
  firstName: string;
  middleName?: string | undefined; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Ismail",
  // middleName: "Hossain",
  lastName: "Arafat",
  isMarried: false,
};
