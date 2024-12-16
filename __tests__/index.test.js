// @ts-check
import { test } from 'node:test';
import assert from 'assert/strict';
import * as funcs from '../index.js';

test('step1', () => {
  assert.strictEqual(funcs.getRemainder(1, 1), 0);
  assert.strictEqual(funcs.getRemainder(4, 2), 0);
  assert.strictEqual(funcs.getRemainder(11, 5), 1);
});

test('step2', () => {
  assert.strictEqual(funcs.getLongestString('1', '11'), '11');
  assert.strictEqual(funcs.getLongestString('Hexlet', 'Hex'), 'Hexlet');
  assert.strictEqual(funcs.getLongestString('Hexlet', 'Hello!'), 'Hexlet');
  assert.strictEqual(funcs.getLongestString('Hehehehehe', ''), 'Hehehehehe');
});

test('step3', () => {
  assert.strictEqual(funcs.concatStrings('Heet', 'xl', 2), 'Hexlet');
  assert.strictEqual(funcs.concatStrings('Hexlet', '-', 3), 'Hex-let');
  assert.strictEqual(funcs.concatStrings('hey', ', friend!', 3), 'hey, friend!');
});

test('step4', () => {
  assert.strictEqual(funcs.normalizeVowels('Hexlet'), 'Hexlet');
  assert.strictEqual(funcs.normalizeVowels('HeexlEEt'), 'Heexleet');
  assert.strictEqual(funcs.normalizeVowels('AJUoOiIldEe'), 'aJuooiildee');
  assert.strictEqual(funcs.normalizeVowels(''), '');
});
