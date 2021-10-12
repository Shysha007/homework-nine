// //Task 1
const x = 10;
const y = 7;
alert( x > y ? `x больше, чем y` : `x не больше, чем y`);

// //Task 2
const num = +prompt(`Введите любое число`);
if ( num % 2 === 0) {
    alert(`Число `+ num +` четное`);
} else {
    alert(`Число `+ num +` нечетное`);
}

// //Task 3 
const b = prompt(`Введите целое число`);
    if (Number(b) === 0) {
        alert(`Число 0, это число состоит из 1 цифры`);
    } else  if (Number(b) > 0) {
        alert(b + ` положительное, это число состоит из `+ b.length + ` цифр(ы) `);
    } else  if (Number(b) < 0) {
        alert(b + ` отрицательное, это число состоит из `+ b.length + ` цифр(ы) `);
    } else  if (isNaN(b)) {
        alert(`Вы ввели не число`);
    }
//Task 4
const a = +prompt(`Введите первое число`);
const m = +prompt(`Введите второе число`);
const c = +prompt(`Введите третье число`);
if ( a > m && a > c) {
    alert(a + ` наибольшее число`);
} else  if (  m > a && m > c) {
    alert(m + ` наибольшее число`);
} else if ( c > m && c > a) {
    alert(c + ` наибольшее число`);
}

// //Task 5
const numOne = +prompt(`Введите первую сторону треугольника`);
const numTwo = +prompt(`Введите вторую сторону треугольника`);
const numThree = +prompt(`Введите третью сторону треугольника`);
if (numOne + numTwo > numThree ) {
    alert(`Такой треугольник может существовать`);
} else if (numOne + numThree > numTwo) {
    alert(`Такой треугольник может существовать`);
} else if (numTwo + numThree > numOne) {
    alert(`Такой треугольник может существовать`);
} else {
    alert(`Такой треугольник не сущетсвует`);
}
