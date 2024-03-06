import 'mocha';
import { expect } from 'chai';
import { Adapter, Complex } from '../src/modi-pr7/adaptador';
import { Rational } from '../src/modi-pr7/adaptador';

// describe('Adapter', () => {
//     describe('add', () => {
//         it('debe sumar correctamente', () => {
//             const rational1 = new Rational(2, 3);
//             const rational2 = new Rational(3, 4);
//             const adapter1 = new Adapter(rational1);
//             const adapter2 = new Adapter(rational2);
//             //const result = adapter1.add(adapter2);
//             expect(adapter1.add(adapter2)).to.be.deep.equal(new Adapter(new Rational(5,7)));

//             //expect(result.getReal()).to.equal(29 / 12);
//            // expect(result).to.deep.equal(5/7)
//            // expect(result.getImaginary()).to.equal(1);
//         });
//     });

//     describe('subtract', () => {
//         it('debe restar correctamente', () => {
//             const rational1 = new Rational(2, 3);
//             const rational2 = new Rational(3, 4);
//             const adapter1 = new Adapter(rational1);
//             const adapter2 = new Adapter(rational2);
//             const result = adapter1.substract(adapter2);
//             expect(result.getReal()).to.equal(-5 / 12);
//             expect(result.getImaginary()).to.equal(1);
//         });
//     });

//     describe('multiply', () => {
//         it('debe multiplicar correctamente', () => {
//             const rational1 = new Rational(2, 3);
//             const rational2 = new Rational(3, 4);
//             const adapter1 = new Adapter(rational1);
//             const adapter2 = new Adapter(rational2);
//             const result = adapter1.multiply(adapter2);
//             expect(result.getReal()).to.equal(6/12);
//             expect(result.getImaginary()).to.equal(1);
//         })
//     });

// });

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