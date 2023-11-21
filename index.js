var fs = require("fs");
var jison = require("jison");

var bnf = fs.readFileSync("calculator.jison", "utf8");
var parser = new jison.Parser(bnf);
console.log(parser)
// parser.parse("1+2")
module.exports = parser;