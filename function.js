function hello() {
  console.log("Hello Js");
}

hello();

function add(a, b) {
  console.log(a + b);
}

add(100, 306);

function displayAnotherFunction(func) {
  func(1, 2);
}
displayAnotherFunction(add);

let varFunc = add;
varFunc(1, 4);

let newFunCVar = function () {
  console.log("Variable Function");
};

newFunCVar();

let arrowFuncVar = () => {
  console.log("Arrow Function");
};

arrowFuncVar();