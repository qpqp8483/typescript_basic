{
  // // JavaScript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript ✨
  // function tsAdd(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JavaScript 💩
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript ✨
  // function tsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //JavaScript ✨ => TypeScript
  //Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Chanwoo", "Jang");
  printName("Chanwoo");
  printName("Chanwoo", undefined);

  //Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumber(1));
  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3));
  console.log(addNumber(1, 2, 3, 4));
}
