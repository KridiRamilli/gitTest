const { exportAllDeclaration } = require("@babel/types");
const add = require("./app.js");

test("My first test", () => {
  expect(add.add(1, 2)).toBe(3);
});
