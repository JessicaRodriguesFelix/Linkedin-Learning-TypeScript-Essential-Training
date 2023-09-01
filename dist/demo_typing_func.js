//create a function with return type as Contact and ensure that return type will be Contact as well
function clone(source) {
    return Object.apply({}, source);
}
const a = { id: 123, name: "Homer" };
const b = clone(a);
const dateRange = { startDate: Date.now(), enDate: Date.now() };
const dateRangeCopy = clone(dateRange);
//in JS function can be passed as variable
