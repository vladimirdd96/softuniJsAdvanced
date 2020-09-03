const daysMap = {
    "Monday": 1,
    "Friday": 5
};
function dayOfWeek(m, d) {
    return m[d] ? m[d] : "error";
}
console.log(dayOfWeek(daysMap, "Monday"));
console.log(dayOfWeek(daysMap, "Friday"));
console.log(dayOfWeek(daysMap, "Invalid"));
