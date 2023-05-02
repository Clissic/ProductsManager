const moment = require("moment")

const actual = moment();
const nacimiento = moment("1992-04-20");

if (nacimiento.isValid()) {
    console.log(actual.diff(nacimiento,"days"))
}

console.log(actual)