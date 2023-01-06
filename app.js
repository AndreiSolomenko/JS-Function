/***
 * Доброго дня!
 * Домашка на 09.01:
 *
 * Завдання 1:
 * написати функцію getAverage, що приймає масив чисел та вертає середнє арифметичне значення цих чисел з точністю 2 знаки після коми.
 * приклад роботи:
 * var arr = [1, 3, 5];
 * getAverage(arr) має повертати 3.00
 *
 * Завдання 2:
 * написати функцію sortArr, що приймає масив чисел та вертає цей масив відсортований (довільно обрати чи то за збільшенням, чи то за зменшенням)
 * приклад роботи:
 * var arr = [2, 4, 1, 3, 5, 2];
 * sortArr(arr); має повертати [5, 4, 3, 2, 2, 1] або [1, 2, 2, 3, 4, 5]
 *
 * Додатково завдання "із зірочкою": другим аргументом до завдання №2 надіслати аргумент order, значенням якого може бути або строка '+', або '-'.
 * зважаючи на цей аргумент, масив буде відсортований за збільшенням/зменшенням значень
 * приклад роботи:
 * sortArr(arr, '+') має повертати [1, 2, 2, 3, 4, 5]
 *
 * Завдання 3:
 * написати функцію deleteFromStr, що приймає першим аргументом строку str, другим аргументом - строку subStr.
 * функція вертає str, з якої видалили subStr частину. я б користувався replaceAll.
 * приклад роботи:
 * deleteFromStr('this is sparta', 's') має повертати "thi i parta"
 *
 * Завдання 4:
 * написати функцію wrapStr, що приймає першим аргументом строку, другим - строку з назвою тегу. вертає строку, огорнуту у тег.
 * приклади роботи:
 * wrapStr('Welcome here!', 'div') вертає '<div>Welcome here</div>'
 * wrapStr('Welcome here!', 'h1') вертає '<h1>Welcome here</h1>'
 *
 * додатково "із зірочкою" до завдання №4:
 * можна надати третій аргумент params. аргумент є обʼєктом, що зберігає в собі назву атрибутів в тегу як ключі,
 * значення атрибутів як значення. повертає строку огорнуту у тег з атрибутами, що описані в обʼєкті params
 * приклад роботи:
 * wrapStr('Link to google', 'a', {id: 'google-link', href: 'https://google.com.ua', class: 'link'})
 * повертає cnhjre
 * '<a id="google-link" href="https://google.com.ua" class="link">Link to google</a>'
 * ***/


// 1.
var arr = [1, 3, 5];
var res = getAverage(arr);

function getAverage(arr) {
    var sum = 0;
    for (var element of arr) {
        var sum = sum + element;
    }
    sum = sum / arr.length;
    return sum.toFixed(2);
}
console.log(res); 


// 2. за збільшенням
var arr = [2, 4, 1, 3, 5, 2];
var res = sortArrIncrease(arr);

function sortArrIncrease(arr) {
	for (var i in arr)  {
        for (var j in arr)  {
			if (arr[i] < arr[j]) {
				var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
			}
		}
    }
	return arr;
}
console.log(res); 


// 2. за зменшенням
var arr = [2, 4, 1, 3, 5, 2];
var res = sortArrDecrease(arr);

function sortArrDecrease(arr) {
	for (var i in arr)  {
        for (var j in arr)  {
			if (arr[i] > arr[j]) {
				var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
			}
		}
    }
	return arr;
}
console.log(res); 


// 2*.
var arr = [2, 4, 1, 3, 5, 2];
var order = '+';
var res = sortArr(arr, order);

function sortArr(arr, order) {
    var tempArr = arr;    
    if (order === '+'){
        tempArr = sortArrIncrease(tempArr);        
    }
    if (order === '-'){
        tempArr = sortArrDecrease(tempArr); 
    }
    return tempArr;
}
console.log(res); 


// 3.
var str = 'this is sparta';
var subStr = 's';
var res = deleteFromStr(str, subStr);

function deleteFromStr(str, subStr) {
    return str.replaceAll(subStr, '');
}
console.log(res); 


// 4.
var str = 'Welcome here!';
var subStr =  'div';
var res = wrapStr(str, subStr);

function wrapStr(str, subStr) {
    var tempStr = str.replaceAll('!', '');
    return '<' + subStr + '>' + tempStr + '</' + subStr + '>';     
}
console.log(res); 


// 4*.
var str = 'Link to google';
var subStr = 'a';
var params = {id: 'google-link', href: 'https://google.com.ua', class: 'link'};
var res = longWrapStr(str, subStr, params);

function longWrapStr(str, subStr, params) {

    if (!params.id || !params.href || !params.class) {
        console.log('incorrect data');
        return;
    }

    var tempStr = str.replaceAll('!', '');
    return '<' + subStr + ' id="' + params.id +'" href="' + params.href + '" class="' + params.class + '">' + str + '</' + subStr + '>';
}
console.log(res); 