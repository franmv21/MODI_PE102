export interface Event<T> {
    id: number;
    data: T;
}

export interface Observer<T> {
    update(observable: Observable<T>, event: Event<T>): void;
}

export interface Observable<T> {
    subscribe(observer: Observer<T>): void;
    unsubscribe(observer: Observer<T>): void;
    notify(event: Event<T>): void;
}

export class ClassObservable<T> implements Observable<T> {
    private observers: Observer<T>[] = [];

    constructor(private id: number, private name: string) {}

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    subscribe(observer: Observer<T>): void {
        if (this.observers.includes(observer)) {
            throw new Error('The observer had already been subscribed');
          } else {
            this.observers.push(observer);
        }
    }

    unsubscribe(observer: Observer<T>): void {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
          throw new Error('The observer has not been subscribed');
        } else {
          this.observers.splice(index, 1);
        }
    }

    notify(event: Event<T>): void {
        this.observers.forEach(observer => observer.update(this, event));
    }
}


export class ClassObserver<T> implements Observer<T> {
    constructor(private id: number, private name: string) {}
  
    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }

    update(observable: Observable<T>, event: Event<T>): void {
        console.log(`Soy un observador: He recibido el evento con id = ${event.id} y la siguiente ${event.data}`);
    }
}

export class StringEvent {
    constructor(public id: number, public data: string) {}

    toString(): string {
        return `data: ${this.data}`;
    }
}

export class NumberEvent {
    constructor(public id: number, public data: number){}

    toString(): string {
        return `data: ${this.data}`;
    }
}


const observable = new ClassObservable<StringEvent>(3, "Fran");
const observer = new ClassObserver<StringEvent>(3, "Fran");

const observable2= new ClassObservable<NumberEvent>(5, "Felipe");
const observer2 = new ClassObserver<NumberEvent>(5, "Felipe");

observable.subscribe(observer);
observable.notify({ id: 1, data: new StringEvent(1, "Hola, soy el evento 1") });

observable2.subscribe(observer2);
observable2.notify({ id: 1, data: new NumberEvent(1, 123456789) });

observable2.unsubscribe(observer2);
observable2.notify({ id: 2, data: new NumberEvent(2, 1230987) });



