'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];
		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Возвращает пустой массив при всех словах не анаграммах', function (assert) {
		const input = [
			'кот', 'стоп', 'плохо', 'хорошо', 'невнимательный'
		];
		const output = [];
		assert.deepEqual(anagram(input), output)
	});

	QUnit.test('Возвращает все слова при всех словах анаграммах', function (assert) {
		const input = [
			'коран', 'крона', 'нарок', 'норка'
		];
		const output = [
			['коран', 'крона', 'нарок', 'норка']
		]
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Возвращает пустой список при пустом входе', function(assert) {
		const input = [];
		const output = [];
		assert.deepEqual(anagram(input), output);
	})

	QUnit.test('Выбрасывает ошибку при неправильном типе данных на входе', function(assert) {
		const input = 123;
		assert.throws(
			() => { anagram(input); },
			new TypeError('invalid input')
		);
	})

	QUnit.test('Выбрасывает ошибку при неправильном типе данных внутри списка на входе', function(assert) {
		const input = [
			'кот', ['ток']
		]
		assert.throws(
			() => { anagram(input); },
			new TypeError('invalid input')
		);
	})
})
