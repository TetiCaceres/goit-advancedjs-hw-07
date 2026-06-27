class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature():number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  constructor(protected key: Key) {}

  protected door = false;
  protected tenants: Person[] = [];

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person came into the house.");
    } else {
      console.log("Door is closed.");
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door opened.");
    } else {
      console.log("Wrong key.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
/*

 Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому. */
