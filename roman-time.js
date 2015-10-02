var hours = process.argv[2];
var minutes = process.argv[3];
var answerHour;
var answerMinutes;

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
	console.log('Время указано неверно');
} else {
	if (hours == 0) {
		answerHour = '-';
	} else {
		answerHour = getTime(hours);
	}

	if (minutes == 0) {
		answerMinutes = '-';
	} else {
		answerMinutes = getTime(minutes);
	}
	print(answerHour + ':' + answerMinutes);
}

/* функция, переводящая числа из арабских в римские.
 *  параметр: time - число, которое надо перевести.*/
function getTime(time) {
	var roman = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	var arab = [50, 40, 10, 9, 5, 4, 1];
	var answer = '';
	var i = 0;

	while (time > 0) {
		while (arab[i] <= time) {
			answer += roman[i];
			time -= arab[i];
		}
		i++;
	}
	return answer;
}

/* функция, выводящая ответ на экран
 *  параметр: time - строка, в которой хранится ответ, который надо вывести*/
function print(time) {
	var answer = ['', '', '', ''];

	for (var count = 0; count < time.length; count++) {
		var char = getASCII(time.charAt(count));
		for (var i = 0; i < answer.length; i++) {
			answer[i] += char[i];
		}
	}
	for (var i = 0; i < answer.length; i++) {
		console.log(answer[i]);
	}
}

/* функция, переводящаю символ в ASCII вид
 *  параметр: char - символ, который надо перевести*/
function getASCII(char) {
	var answer = new Array();

	switch (char) {
		case 'I':
			answer = [' ******* ','    *    ', '    *    ', ' ******* '];
			break;
		case 'V':
			answer = [' *     * ', '  *   *  ', '   * *   ', '    *    '];
			break;
		case 'X':
			answer = [' *     * ', '   * *   ', '   * *   ', ' *     * '];
			break;
		case 'L':
			answer = ['  *      ', '  *      ', '  *      ', '  * * *  '];
			break;
		case ':':
			answer = ['         ', '  ** **  ', '  ** **  ', '         '];
			break;
		case  '-':
			answer = ['         ', '          ', '   ****   ', '        '];
			break;
	}
	return answer;
}