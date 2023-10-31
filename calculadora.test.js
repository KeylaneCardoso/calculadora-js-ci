// importando uma função e passando ela para uma constante
const { somar } = require('./calculadora');

//Suite de testes - vai agrupar varios testes que vamos usar para essa calculadora
describe('Teste da calculadora', () => {
    
    test("Deviria somar dois números", () => {
        //testes
        expect(somar(2, 3)).toBe(5);
        expect(somar(-1, -1)).toBe(-2);
        expect(somar(2.5, 2.25)).toBe(4.75);
        expect(somar(10, 0)).toBe(10);
    })
});