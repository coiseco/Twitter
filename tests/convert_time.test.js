import { assert } from 'chai';
import convertTime from '../public/assets/convertTime.js';

describe('Функция проверки рассчёта времени', () => {
  it('59 секунд назад', () => {
    const expectedResult = '59 секунд назад';
    const result = convertTime(new Date('2022-01-01T12:00:00Z'), new Date('2022-01-01T12:00:59Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('1 минуту назад', () => {
    const expectedResult = '1 минуту назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-01-01T00:01:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('59 минут назад', () => {
    const expectedResult = '59 минут назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-01-01T00:59:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('1 час назад', () => {
    const expectedResult = '1 час назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-01-01T01:00:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('23 часа назад', () => {
    const expectedResult = '23 часа назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-01-01T23:00:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('1 день назад', () => {
    const expectedResult = '1 день назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-01-02T00:00:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('6 дней назад', () => {
    const expectedResult = '6 дней назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-01-07T00:00:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('с пустой строкой', () => {
    const expectedResult = '1 неделю назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-01-08T00:00:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('4 недели назад', () => {
    const expectedResult = '4 недели назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-01-31T00:00:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('1 месяц назад', () => {
    const expectedResult = '1 месяц назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-02-01T00:00:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('12 месяцев назад', () => {
    const expectedResult = '11 месяцев назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2022-12-01T00:00:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('1 год назад', () => {
    const expectedResult = '1 год назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2023-01-01T00:00:00Z'));
    assert.equal(expectedResult, result);
  });
});
describe('Функция проверки рассчёта времени', () => {
  it('6 лет назад', () => {
    const expectedResult = '6 лет назад';
    const result = convertTime(new Date('2022-01-01T00:00:00Z'), new Date('2028-01-01T00:00:00Z'));
    assert.equal(expectedResult, result);
  });
});
