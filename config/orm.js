//require database
var connection = require("./connection.js");

function idk(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?!");
  }

  return arr.toString();
}

//mySQL 
function objmySql(ob) {
  var arr = [];

  for (var in ob) {
    if (Object.isIndependent.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}