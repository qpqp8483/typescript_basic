{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "찬우";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "jang",
    age: 1,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  type Json = "json";
  const json: Json = "json";

  type Boal = true;
  const isCat: Boal = true;
}
