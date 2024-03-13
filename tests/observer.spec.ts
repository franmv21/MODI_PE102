import 'mocha';
import {expect} from 'chai';
import { ClassObservable, ClassObserver } from '../src/modi-pr8/observer.js';



describe('Observable Tests', function() {
    it('deberia suscribirse', function() {
        class StringEvent {
            constructor(public id: number, public data: string) {}
        
            toString(): string {
                return `data: ${this.data}`;
            }
        }

        const observable = new ClassObservable<StringEvent>(1, "Test");
        const observer = new ClassObserver<StringEvent>(1, "Test");

        observable.subscribe(observer);

        expect(observable['observers']).to.deep.include(observer);
    });

    it('deberia desuscribirse', function() {
        class StringEvent {
            constructor(public id: number, public data: string) {}
        
            toString(): string {
                return `data: ${this.data}`;
            }
        }
        const observable = new ClassObservable<StringEvent>(1, "Test");
        const observer = new ClassObserver<StringEvent>(1, "Test");

        observable.subscribe(observer);
        observable.unsubscribe(observer);

        expect(observable['observers']).to.not.include(observer);
    });
});

