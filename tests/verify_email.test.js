import { assert } from 'chai';
import verifyEmail from '../public/assets/verifyEmail.js';

describe('Функция валидации мыла', () => {
  it('валидное мыло', () => {
    const expectedResult = true;
    const result = verifyEmail('example@example.com');
    assert.equal(expectedResult, result);
  });
});
describe('Функция валидации мыла', () => {
  it('нет собаки и текста перед ней', () => {
    const expectedResult = false;
    const result = verifyEmail('example.com');
    assert.equal(expectedResult, result);
  });
});
describe('Функция валидации мыла', () => {
  it('нет текста после собаки перед точкой', () => {
    const expectedResult = false;
    const result = verifyEmail('example@.com');
    assert.equal(expectedResult, result);
  });
});
describe('Функция валидации мыла', () => {
  it('мыло с точкой разделителем до собаки', () => {
    const expectedResult = true;
    const result = verifyEmail('example.name@example.com');
    assert.equal(expectedResult, result);
  });
});
describe('Функция валидации мыла', () => {
  it('нет слова и точки после собаки', () => {
    const expectedResult = false;
    const result = verifyEmail('example@com');
    assert.equal(expectedResult, result);
  });
});
describe('Функция валидации мыла', () => {
  it('нет слова и домена в конце', () => {
    const expectedResult = false;
    const result = verifyEmail('example@');
    assert.equal(expectedResult, result);
  });
});
describe('Функция валидации мыла', () => {
  it('просто текст', () => {
    const expectedResult = false;
    const result = verifyEmail('example');
    assert.equal(expectedResult, result);
  });
});
