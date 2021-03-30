/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/
// Referência para resolução do ultimo teste: https://github.com/tryber/sd-010-a-project-js-unit-tests/pull/111/files;

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails('bolacha', 'quiabo'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('bolacha', 'pão').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('bolacha', 'pão')[0]
    && productDetails('bolacha', 'pão')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails('bolacha', 'pão')[0], productDetails('bolacha', 'pão')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDetails('bolacha', 'pão')[0].details.productId, `${'bolacha'}123`);
    assert.strictEqual(productDetails('bolacha', 'pão')[1].details.productId, `${'pão'}123`);
  });
});

/*
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna um objeto.
    assert.strictEqual(typeof circle(1), 'object');
    // Teste se o objeto retornado tem 3 entradas.
    assert.strictEqual(Object.keys(circle(1)).length, 3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    assert.strictEqual(circle(), undefined);
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    assert.strictEqual(circle(2).circumference, 12.56);
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    assert.strictEqual(parseFloat((circle(3).area).toFixed(2)), 28.26);
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    const testCircle = circle(3);
    testCircle.area = parseFloat((testCircle.area).toFixed(2));
    testCircle.circumference = parseFloat((testCircle.circumference).toFixed(2));
    assert.deepStrictEqual(testCircle, { radius: 3, area: 28.26, circumference: 18.84 });
  });
});
 */
