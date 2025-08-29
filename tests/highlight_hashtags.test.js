import { assert } from 'chai';
import highlightHashtags from '../public/assets/highlightHashtags.js';

describe('Функция проверки подсветки ссылок', () => {
  it('без ссылок', () => {
    const expectedResult = 'Кто еще изучает <a href="/search?tag=javascript">#javascript</a> ?';
    const result = highlightHashtags('Кто еще изучает #javascript ?');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки подсветки ссылок', () => {
  it('с одной ссылкой', () => {
    const expectedResult = 'Сегодня изучаю хуки в React — мощный инструмент для управления состоянием! <a href="/search?tag=React">#React</a> <a href="/search?tag=Hooks">#Hooks</a>';
    const result = highlightHashtags('Сегодня изучаю хуки в React — мощный инструмент для управления состоянием! #React #Hooks');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки подсветки ссылок', () => {
  it('с одной ссылкой и словами после', () => {
    const expectedResult = 'Асинхронный JavaScript делает код более гибким и производительным. <a href="/search?tag=JavaScript">#JavaScript</a> <a href="/search?tag=Async">#Async</a> <a href="/search?tag=Frontend">#Frontend</a>';
    const result = highlightHashtags('Асинхронный JavaScript делает код более гибким и производительным. #JavaScript #Async #Frontend');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки подсветки ссылок', () => {
  it('две разные ссылки с словами между ними', () => {
    const expectedResult = 'TypeScript + React = идеальный дуэт для масштабирования <a href="/search?tag=TypeScript">#TypeScript</a> <a href="/search?tag=React">#React</a> <a href="/search?tag=Frontend">#Frontend</a> <a href="/search?tag=Cool">#Cool</a>';
    const result = highlightHashtags('TypeScript + React = идеальный дуэт для масштабирования #TypeScript #React #Frontend #Cool');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки подсветки ссылок', () => {
  it('одна ссылка в кавычках', () => {
    const expectedResult = 'Привет!';
    const result = highlightHashtags('Привет!');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки подсветки ссылок', () => {
  it('две ссылки подряд и слово в конце', () => {
    const expectedResult = 'Прогулка в парке заряжает энергией и позитивом. <a href="/search?tag=Природа">#Природа</a> <a href="/search?tag=Энергия">#Энергия</a>';
    const result = highlightHashtags('Прогулка в парке заряжает энергией и позитивом. #Природа #Энергия');
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки подсветки ссылок', () => {
  it('с текстом, содержащим специальные символы', () => {
    const expectedResult = 'Привет! # это решетка а это <a href="/search?tag=тег">#тег</a>';
    const result = highlightHashtags('Привет! # это решетка а это #тег');
    assert.equal(expectedResult, result);
  });
});
