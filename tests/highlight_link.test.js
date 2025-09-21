import { assert } from 'chai';
import highlightLinks from '../public/assets/highlightLinks.js';

describe('Функция подсветки ссылок', () => {
  it('без ссылок', () => {
    const expectedResult = 'Всем привет!';
    const result = highlightLinks('Всем привет!');
    assert.equal(expectedResult, result);
  });
});
describe('Функция подсветки ссылок', () => {
  it('с одной ссылкой', () => {
    const expectedResult = 'Всем привет! <a href="https://edu.burtovoy.org/mod/assign/view.php?id=4544">https://edu.burtovoy.org/mod/assign/view.php?id=4544</a>';
    const result = highlightLinks('Всем привет! https://edu.burtovoy.org/mod/assign/view.php?id=4544');
    assert.equal(expectedResult, result);
  });
});
describe('Функция подсветки ссылок', () => {
  it('с одной ссылкой и словами после', () => {
    const expectedResult = 'Всем привет! <a href="https://edu.burtovoy.org/mod/assign/view.php?id=4544">https://edu.burtovoy.org/mod/assign/view.php?id=4544</a> ссылка';
    const result = highlightLinks('Всем привет! https://edu.burtovoy.org/mod/assign/view.php?id=4544 ссылка');
    assert.equal(expectedResult, result);
  });
});
describe('Функция подсветки ссылок', () => {
  it('две разные ссылки с словами между ними', () => {
    const expectedResult = 'всем привет! <a href="<https://github.com>q<https://github.com>"><https://github.com>q<https://github.com></a> Привет! еее <a href="https://github.com">https://github.com</a>';
    const result = highlightLinks('всем привет! <https://github.com>q<https://github.com> Привет! еее https://github.com');
    assert.equal(expectedResult, result);
  });
});
describe('Функция подсветки ссылок', () => {
  it('одна ссылка в кавычках', () => {
    const expectedResult = 'Привет! <a href="<https://edu.burtovoy.org/mod/assign/view.php?id=4544>"><https://edu.burtovoy.org/mod/assign/view.php?id=4544></a>';
    const result = highlightLinks('Привет! <https://edu.burtovoy.org/mod/assign/view.php?id=4544>');
    assert.equal(expectedResult, result);
  });
});
describe('Функция подсветки ссылок', () => {
  it('две ссылки подряд и слово в конце', () => {
    const expectedResult = 'привет! <a href="https://edu.burtovoy.org/mod/assign/view.php?id=4544">https://edu.burtovoy.org/mod/assign/view.php?id=4544</a> <a href="<https://edu.burtovoy.org/mod/assign/view.php?id=4544>"><https://edu.burtovoy.org/mod/assign/view.php?id=4544></a> вот';
    const result = highlightLinks('привет! https://edu.burtovoy.org/mod/assign/view.php?id=4544 <https://edu.burtovoy.org/mod/assign/view.php?id=4544> вот');
    assert.equal(expectedResult, result);
  });
});
describe('Функция подсветки ссылок', () => {
  it('текст из задачи', () => {
    const expectedResult = 'мой гитхаб: <a href="<https://github.com/burtovoy>"><https://github.com/burtovoy></a>';
    const result = highlightLinks('мой гитхаб: <https://github.com/burtovoy>');
    assert.equal(expectedResult, result);
  });
});
