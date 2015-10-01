var hours = process.argv[2];
var minutes = process.argv[3];
var answerHour = '';
var answerMinutes = '';

if (hours < 0 || hours > 24 || minutes < 0 || minutes > 59) {
	console.log('Время указано неверно');
} else {
	if (hours == 0)
		answerHour += 'O';
	if (minutes == 0)
		answerMinutes += 'O';
	getX();
	answerHour = getUnits(hours, answerHour);
	answerMinutes = getUnits(minutes,  answerMinutes);
	console.log(answerHour + ':' + answerMinutes);
}

function integerDivision(x, y){
    return (x-x%y)/y
}

function getX() {
/* Получаем десятки */
	var xHours = integerDivision(hours, 10);
	var xMinutes = integerDivision(minutes, 10);

	if (xHours > 0 || xMinutes > 0) {
		for (var count = 0; count < xHours; count++) 
			answerHour += 'X';
		hours %= 10;

		if (xMinutes < 4) {
			for (var count=0; count < xMinutes; count++) 
				answerMinutes += 'X';
		} else {
			answerMinutes = xMinutes == 4 ? answerMinutes + 'XL' : answerMinutes + 'L'
		}
		minutes %= 10;
	}
}

function getUnits(time, answer) {
/* Получаем единицы */
	if (time == 9)
		answer += 'IX'
	else {
		var temp = integerDivision(time, 5);
		if (temp > 0) {
			answer += 'V';
			time %= 5;
		}
		if (time == 4) 
			answer += 'IV';
		else
			for (var count=0; count < time; count++) 
				answer += 'I';
	}
	return answer;
}