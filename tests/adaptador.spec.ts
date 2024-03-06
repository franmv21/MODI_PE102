import 'mocha';
import { expect } from 'chai';
import { Adapter, Complex } from '../src/modi-pr7/adaptador';
import { Rational } from '../src/modi-pr7/adaptador';

describe('Adapter', () => {
    describe('constructor', () => {
      it('should correctly construct a complex number from a rational number', () => {
        const rational = new Rational(2, 3);
        const adapter = new Adapter(rational);
        expect(adapter.getReal()).to.equal(2 / 3);
        expect(adapter.getImaginary()).to.equal(0);
      });
    });
  
    describe('add', () => {
      it('should correctly add a rational number to the adapter', () => {
        const adapter = new Adapter(new Rational(2, 3));
        const result = adapter.add(new Complex(1, 4));
        expect(result.getReal()).to.equal(1.6666666666666665);
        expect(result.getImaginary()).to.equal(4);
      });
    });

    describe('substract', () => {
        it('should correctly add a rational number to the adapter', () => {
          const adapter = new Adapter(new Rational(2, 3));
          const result = adapter.substract(new Complex(1, 4));
          expect(result.getReal()).to.equal(-0.33333333333333337);
          expect(result.getImaginary()).to.equal(-4);
        });
    });

    describe('multiply', () => {
        it('should correctly add a rational number to the adapter', () => {
          const adapter = new Adapter(new Rational(2, 3));
          const result = adapter.multiply(new Complex(1, 4));
          expect(result.getReal()).to.equal(0.6666666666666666);
          expect(result.getImaginary()).to.equal(2.6666666666666665);
        });
    });

    describe('divide', () => {
        it('should correctly add a rational number to the adapter', () => {
          const adapter = new Adapter(new Rational(2, 3));
          const result = adapter.divide(new Complex(1, 4));
          expect(result.getReal()).to.equal(0.0392156862745098);
          expect(result.getImaginary()).to.equal(-0.1568627450980392);
        });
    });
  
});