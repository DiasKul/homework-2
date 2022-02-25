// С помощью логического оператора ИЛИ
function checkAge(age) {
	age = prompt('Сколько вам лет?')
	return ((age > 18 || confirm('Родители разрешили?')))
}

checkAge()

// С помощью тернарного оператора

function checkAge(age) {
	age = prompt('Сколько вам лет?')
	confirm((age > 18) ? "А ты взрослый" : "Родители разрешили?")
}
checkAge()

// Правильное округление, не получилось сделать
let num = 6.35.toFixed(1.1)
confirm(num)

// Math
const max = Math.max( 4, -2, 5, 19, -130, 0, 10. );
const min = Math.min( 4, -2, 5, 19, -130, 0, 10. );
alert('Максимальное число: ' + max + '. Минимальное число: ' + min)

const rand = Math.random() * 100
alert(Math.round(rand))

let arr = [10]
for(let i=0; i<10; i++){
	arr[i] = Math.random() * 100
	console.log(Math.round(arr[i]))
}

// toString
let arr1 = [1,2,3,4,5] 
let i=0
while(i<5){
	arr1[i].toString()
	console.log(arr1[i])
	i++
}

console.log (+true) 
console.log (+false) 