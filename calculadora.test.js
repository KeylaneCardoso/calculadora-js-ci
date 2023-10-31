// importando uma função e passando ela para uma constante
const { somar, subtrair, multiplicar } = require('./calculadora');

//Suite de testes - vai agrupar varios testes que vamos usar para essa calculadora
describe('Teste da calculadora', () => {
    
    test("Deviria somar dois números", () => {
        //testes
        expect(somar(2, 3)).toBe(5);
        expect(somar(-1, -1)).toBe(-2);
        expect(somar(2.5, 2.25)).toBe(4.75);
        expect(somar(10, 0)).toBe(10);
    })

    test("Deveria subtrair dois números", () => {
        expect(subtrair(3, 2)).toBe(1);
        expect(subtrair(2, 3)).toBe(-1);
        expect(subtrair(5, 5)).toBe(0);
        expect(subtrair(4.5, 4.25)).toBe(0.25);
        expect(subtrair(10, 0)).toBe(10);
        expect(subtrair(-1, -1)).toBe(0);
    })

    test("Deveria mutiplicar dois números", () => {
        expect(multiplicar(3, 2)).toBe(6);
        expect(multiplicar(2, -3)).toBe(-6);
        expect(multiplicar(4.5, 4.25)).toBe(0.25);
        expect(multiplicar(10, 0)).toBe(0);
        expect(multiplicar(-1, -1)).toBe(1);
    })
});