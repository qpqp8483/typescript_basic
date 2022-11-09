{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public -> 따로 설정해주지 않으면 Default값
  // private -> 내부의 상태를 외부에서 알 수 없게끔 만듬
  // protected

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance(object) level

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  const maker2 = CoffeeMaker.makeMachine(2);
  // console.log(maker, maker2);

  // ---------------------------------------------------

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
}
