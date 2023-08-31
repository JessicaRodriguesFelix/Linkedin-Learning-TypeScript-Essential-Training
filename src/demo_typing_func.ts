interface Contact {
  id: number;
  name: string;
}

//create a function with return type as Contact and ensure that return type will be Contact as well
function clone<T>(source: T): T {
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer" };
const b = clone(a);

const dateRange = { startDate: Date.now(), enDate: Date.now() };
const dateRangeCopy = clone(dateRange);

//in JS function can be passed as variable
