{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefinde
   * Object: function, array....
   */

  // number
  const num: Number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; //💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "hello";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unuasble: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "Jang" });
  acceptSomeObject({ animal: "dog" });
}
