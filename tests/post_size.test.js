import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

describe('Функция проверки расчета размера поста', () => {
  it('без ссылок', () => {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки расчета размера поста', () => {
  it('с одной ссылкой', () => {
    const expectedResult = 12;
    const result = postSize('Всем привет! https://edu.burtovoy.org/mod/assign/view.php?id=4544');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки расчета размера поста', () => {
  it('с одной ссылкой и словами после', () => {
    const expectedResult = 19;
    const result = postSize('Всем привет! https://edu.burtovoy.org/mod/assign/view.php?id=4544 ссылка');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки расчета размера поста', () => {
  it('две разные ссылки с словами между ними', () => {
    const expectedResult = 26;
    const result = postSize('всем привет!<https://github.com>q<https://github.com>Привет! еее https://github.com');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки расчета размера поста', () => {
  it('одна ссылка в кавычках', () => {
    const expectedResult = 7;
    const result = postSize('Привет!<https://edu.burtovoy.org/mod/assign/view.php?id=4544>');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки расчета размера поста', () => {
  it('две ссылки подряд и слово в конце', () => {
    const expectedResult = 9;
    const result = postSize('привет! https://edu.burtovoy.org/mod/assign/view.php?id=4544<https://edu.burtovoy.org/mod/assign/view.php?id=4544>g');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки расчета размера поста', () => {
  it('с текстом, содержащим специальные символы', () => {
    const expectedResult = 16;
    const result = postSize('Привет! @#%$&*() https://edu.burtovoy.org/mod/assign/view.php?id=4544');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки расчета размера поста', () => {
  it('с пустой строкой', () => {
    const expectedResult = 0;
    const result = postSize('');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки расчета размера поста', () => {
  it('с текстом, содержащим только пробелы', () => {
    const expectedResult = 0;
    const result = postSize('   https://edu.burtovoy.org/mod/assign/view.php?id=4544  ');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки расчета размера поста', () => {
  it('с текстом, содержащим только пробелы', () => {
    const expectedResult = 0;
    const result = postSize('   <https://edu.burtovoy.org/mod/assign/view.php?id=4544>  ');
    assert.equal(expectedResult, result);
  });
});
