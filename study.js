// const man = 'Artem'

// const woman = 'Sveta'
// console.log(man+' + '+woman+' = Love!')

// let object = {
//     a: 10,
//     b: 'test'
// }

// object.a = 20
// object.c = 30
// object.c = object.c+5
// console.log(object)



// function b() {
//     console.log('My first function')
// }

// b()


// Стрелочная функция. Нельзя поменять ее значение (т.к. вызов идет с помощью const)
// const a = () => {
//     console.log('My 2 function')
// }

// a()
// 1:28 Ctrl + R Очистить полностью консоль

// const myCity = {
//     town_name: 'Irpin',
//     big: true,
//     country: 'Ukraine',
//     nations: {
//         ukrain: 100,
//         english: 200,
//         bolgary: 50,
//     },
//     // Функция
//     helloCity() {
//         console.log('Hello city '+ this.nations.ukrain)
//     }
// }

// console.log(myCity.town_name)
// console.log(myCity.country)

// myCity.country = 'USA'

// console.log(myCity.country)

// // Добавление
// myCity.people = 250000
// const salaryBig = 'salary2'
// myCity[salaryBig] = '7000$ per month'
// myCity['salary'] = '1000$ per month'
// console.log(myCity.people)
// console.log(myCity)

// // Удаление
// delete myCity.people
// console.log(myCity)


// console.log(myCity.nations.english)
// delete myCity.nations['english']
// console.log(myCity)


// const name1 = 'Artem'
// const surname1 = 'Aremchenko'

// const anketaUser = {
//     name1,
//     surname1,
//     signature: true,
//     admin: false
// }

// console.log(anketaUser)

// Вызов функции
// myCity.helloCity()


// JSON.parse - Распарсить JSON в JavaScript
// JSON.stringify - Распарсить JavaScript в JSON 

// В консоли браузера
// const post = {
//     title: 'My first POSS',
//     likeQty: 5
// }
// JSON.stringify(post)

// const jspnInJs = JSON.stringify(post)

// JSON.parse(jspnInJs)


// const personA = {
//     name: 'Vasia',
//     age: 20,
// }
// console.log(personA)

// const teacheR = personA
// teacheR.name = 'Olia'
// teacheR.signature = true

// console.log(personA)

// Копирование обектов без связки с изначальным обектом. Данные не поменяються в первом обекте personA
// const teacheR2 = Object.assign({}, personA)  // вариант 1 (не копирует вложенные обекты {...} )
// const teacheR3 = {...personA}  // вариант 2
// teacheR2.age = 26
// teacheR3.age = 40
// console.log(teacheR2.age)
// console.log(teacheR3.age)

// !!! Чтоб произвести полное копирование с вложенными обектами {...} 
// const teacheR4 = JSON.parse(JSON.stringify(personA))// вариант 3
// teacheR4.age = 12
// console.log(teacheR4.age)

// Функция
// let a = 5
// let b = 10

// function sum(a,b) {
//     const c = a+b
//     console.log(c)
// }

// sum(a,b)

// a = 2
// b = 7

// sum(a,b)

// function myFn(a,b) {
//     let c
//     a = a + 3
//     c = a + b
//     return c
// }

// console.log(myFn(2,3))
// resultFn = myFn(10,20)
// console.log(resultFn)



// function addPeople(human) {
//     // const humanNew = Object.assign({}, human)  // Копирование без вложеных обектов
//     const humanNew = JSON.parse(JSON.stringify(human))   // Копирование с вложеными обектами
//     humanNew.nations.ukrain += 5
//     return humanNew
// }

// const peopleRes = addPeople(myCity)

// console.log(myCity.nations.ukrain)
// console.log(peopleRes.nations.ukrain)


// function printMyName() {
//     console.log('my name is Artem')
// }


// setTimeout функция которая выполняет другую функцию через 3000 мили секунд (3 секунды)
// setTimeout(printMyName, 3000)


// let a
// let b

// function myFn() {
//     let b
//     a = true
//     b = 10
//     console.log('Печатаем a c myFn', a)
// }

// myFn()

// console.log('Печатаем  a глобально', a)
// console.log('Печатаем b глобально', b)

// 'use strict' - Строгий режим (просто прописываеться строка на страничке) в Js не позволяет автоматически создавать не обявленные переменные в глобальном окуржении.



// console.log(Boolean(0))
// console.log(typeof(0))
// console.log(typeof(true))
// console.log(typeof('Artemii'))
// console.log(typeof 'Artemii' === 'string')
// console.log(typeof 10 === 'number')
// console.log(typeof true === 'boolean')

// Булево значение true or false
// console.log(!20)
// console.log(!!20) // Не не - - будет +
// console.log(!0)
// console.log(!!0)

// let iMail
// console.log(typeof iMail)
// iMail = 10
// console.log(typeof iMail)


// console.log( 'Vasiy' && 0)
// console.log( 0 || 'Artem')

// const button = {
//     with: 200,
//     text: 'Buy'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// console.table(redButton)


// const hello1 = 'hello'
// const world1 = ' world'   //  С пробелом впереди слова.

// console.log(hello1+world1)


// const hello = 'hello'
// const world = 'world' //  Без пробела впереди слова.

// console.log(`${hello} ${world}`)


// Анонимная функция присвоенная в переменную peremenaia
// const peremenaia = function(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// console.log(peremenaia(5, 3))

// Стрелочная функция
// const myArrowFunction = (a, b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// console.log(myArrowFunction(5, 6))

// Сокращение стрелочной функции (если 1 аргумент (а))
// a => {
//     // Тело функции
// }

// Если в стрелочной функции только одно выражение ( а плюс б)
// (a, b) => a + b



// Параметру number присвоели значение по умолчанию
// function factore(value, number = 1) {
//     return value * number
// }

// resultF1 = factore(10,2)  // Указываеться все два значения
// resultF = factore(5)  // Указываеться одно значение, второе по умолчанию number = 1

// console.log(resultF1)
// console.log(resultF)

// console.log(Date())  // Вывод даты



// Пример1. Вместо return для не явновго возврата нового обекта используються после => круглые скобки () а потом фигурные {}, так создасца новый обект.
// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })

// Наш первый пост.
// const firstPost = {
//     id: 1,
//     author: 'Artem',
// }

// Чтоб добавить в наш первый пост дату создания вызываем функцию newPost и в нее передаем аргумент первого поста firstPost и выводим на екран.
// console.log(newPost(firstPost))


// Пример2. с явным возвращением обекта с помощью return
// const newPost = (post, addedAt = Date()) => {
//     post = JSON.parse(JSON.stringify(post))
//     post["data"] = addedAt;
//     return post
// }

// const firstPost = {
//     id: 1,
//     author: 'Artem',
// }

// console.log(newPost(firstPost))


// Вызов Ошибок.
// const fnWithError = () => {
//     throw new Error('Same Error')
// }

// Пример 1. На ошибке все поламаеться и не будет выполнен печать ('Continue...')
// fnWithError()
// console.log('Continue...')

// // Пример 2. Можно ловить ошибки и выполнять с ними какуюто работу для этого испольузеться try и catch. и будет выполнен печать ('Continue...') Пример ниже:
// try {
//     fnWithError()
// } catch (error) {
//     console.error(error)
//     console.log(error.message)
// }
// console.log('Continue...')

// Масивы данных или Arrey пример [1, 2, '3']
// const myArray = [1, true, 'Artem']
// myArray.length
// const myArray2 = [1, true, 'Artem']


// Пример обекта 
// const myObject = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }
// // Пример масива
// const myArray = [1, 2, 3]
// console.log(myObject)
// console.log(myArray)
// // При выводе в консоли результат отличаеться
// console.log(myArray[0]) // Достаем с массива данные которые находяться на позиции ноль [0]
// // Добавляем новое значение в массив, работа с массивами такая же как и в Питоне
// myArray[3] = 'Новое значение'
// console.log(myArray[3])
// myArray.push('add new with push')  // Добавляет данные в массив методом push в Конец списка
// myArray.unshift('add in first new with unshift') // Добавляет данные в массив методом unshift в Начало списка

// console.log(myArray)
// myArray.pop() // Удаляет 1 последний елемент в массиве. (Удаление 1)
// myArray.shift() // Удаляет 1 первый елемент в массиве. (Удаление 2)
// const showDell_file = myArray.pop() // (Удаление 3)
// console.log(showDell_file)

// myArray.forEach(i => console.log(i * 2)) // Запуск Цикла, вывод в консоли каждого отдельного числа в массиве. При етом информация в самом масиве не изменяеться.
// // Каждый еллемент в масиве мы умножим на два и он ничего не возвращает.
// const newArray = myArray.map(i => i * 3)  // map формирует новый масив исходя из результатов функции, в нашем случае умножает все на 3 и сохраняет в новый массив(переменную).
// console.log(newArray, 'newArray')
// // Записано тоже выражение но явной функцией и return
// const newArray2 = myArray.map((i) => {
//     return i * 3
// }) 
// console.log(newArray2, 'newArray2')


// Пример Деструктуризации обекта
// const userProfile = {
//     name: 'Artem',
//     age: 23,
//     student: true,
// }
// console.log(userProfile, userProfile.name)

// const {name, age } = userProfile  // Функция деструктуризация обекта 1
// const {student} = userProfile  // Функция деструктуризация обекта 2
// console.log(name, student)

// const fruts = ['apple', 'banana']
// const [one, two] = fruts
// console.log(fruts)
// console.log(one, two)

// const userInfo = ({ name, age}) => {
//     if (!age) {
//         return `User ${name} hes no age`
//     }
//     return `User ${name} is ${age} years old`
// }

// console.log(userInfo(userProfile))

// let val = 10
// if (val > 5) {
//     val += 20
// }
// console.log(val)

// const userPerson = {
//     name: 'Artem',
//     // age:10
// }

// if (!userPerson.name) {
//     console.log('Имя не указано')
// } else if (!userPerson.age){
//     console.log(userPerson.name, 'Возраст не указано')
// } else {
//     console.log(userPerson.name, userPerson.age)
// }


// const sumNumbersPositive = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number')
//     return 'Нужно чтоб a, b были числами'

//     if (a <=0 || b <= 0) {
//         return 'must be only positive int field'
//     }
//     return a + b
// }

// console.log(sumNumbersPositive('five',10))


// const month = 12

// switch (month) {
//     case 12:
//         console.log('Декабрь')
//         break
//     case 1:
//         console.log('Январь')
//         break
//     case 2:
//         console.log('Февраль')
//         break
//     default:
//         console.log('Указан не месяц')
// }

// Тернарный оператор
// const value = 0

// value
//     ? console.log('Условие истино True')
//     : console.log('Условие ложно False')

// const val1 = 10
// const val2 = 12

// val1 && val2
//     ? console.log('Выполнелась функция sumNumbersPositive =', sumNumbersPositive(val1, val2))
//     : console.log('Указаны не верные значения')

// let val = 11
// console.log(val >= 0 ? val : -val)

// newNumber = -6
// const res = newNumber >= 0 ? newNumber : -newNumber
// console.log(res)


// Цыклы
// for (let i = 0; i<=10; i++) {
//     console.log(i)
// }

// const myArray3 = ['first', 'second', 'third']

// for (let i = 0; i < myArray3.length; i++) {
//     console.log(myArray3[i])
// }

// let i = 0
// while выполнеться только если будет true
// while (i <= 5) {
//     console.log(i)
//     i++
// }
// do while Выполнеться 1 раз в любом случае, а далее исходя из результата.
// let r = 10
// do {
//     console.log(r)
//     r++
// } while (r<=7)

// const numText = ['1 text', '2 text', '3 text', '4 text']
// for (const i in numText) {
//     console.log(i, numText[i]+' new')
// }

// const userPerson = {
//     name: 'Artem',
//     age:10
// }
// for (const q in userPerson) {
//     console.log(q, userPerson[q]+' new')
// }


// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abv'
// }
// console.log(Object.keys(myObject)) // [ 'x', 'y', 'z' ]
// Object.keys(myObject).forEach(i => {
//     console.log(i, myObject[i])
// })
// console.log(Object.values(myObject)) // [ 10, true, 'abv' ]
// Object.values(myObject).forEach(i => {
//     console.log(i)
// })

// const somethingValue = [1, 'number', true, null]
// for (const i in somethingValue) {
//     console.log(somethingValue[i])
// }
// for (const i of somethingValue) {
//     console.log(i)
// }

// const word = 'Hello World'
// for (const i of word) {
//     console.log(i)
// }


// Классы
// class Comentar {
//     constructor(text) {
//         this.text = text
//         this.likes = 0
//     }
//     upvote() {
//         this.likes += 1
//     }
//     static mergeComments(first, second) {
//         return `${first} ${second}`
//     }
// }
// const firstComment = new Comentar('First coment')
// firstComment.upvote()  // Добавляем +1 лайк
// console.log(firstComment)
// firstComment.upvote() // Добавляем +1 лайк (итого будет 2 лайка)
// console.log(firstComment)
// console.log('Коментарий:',firstComment.text, '   Колличество лайков:', firstComment.likes)

// console.log(firstComment instanceof Comentar) // Проверка наследования Нового обекта от класса Comentar
// console.log(firstComment.hasOwnProperty('text')) // Проверка принадлежности text к firstComment
// console.log(firstComment.hasOwnProperty('likes')) // Проверка принадлежности likes к firstComment
// console.log(firstComment.hasOwnProperty('upvote')) // Проверка принадлежности upvote к firstComment - !!не пренадлежит так как наследуеться от радительского класса Comentar
// console.log(Comentar.mergeComments('First comment','Second comment'))


// Расширение родительского класса Array(добавление новой функции sum в класс NumbersArray)
// class NumbersArray extends Array {
//     sum() {
//         return this.reduce((el, acc) => acc += el, 0)
//     }
// }

// const myArray = new NumbersArray(2, 5, 6)
// console.log(myArray)
// console.log(myArray.sum())


// Промисы (имеют 3 состояния => созданный - выполненный - отклоненный)
// const firstPromise = new Promise((resolve, reject) => {
//     // Выполнение ассинхронных действий
//     // В нутри етой функции в результате нужно вызвать или функцию resolve(выполнить) или функцию reject(отклонить)
// });

// firstPromise
//     .then(value => {
//         // Действие в случае успешного выполнение
//         // value ето значение переданное в вызове функции resolve в нутри Промиса
//     })
//     .catch(error => {
//         // Действие в случае отклонения Промиса
//         // error ето значение переданное в вызове функции reject в нутри Промиса
//     })

// Вставить в консоль браузера, получим массив данных в виде ответа от сервера в формате JSON  https://jsonplaceholder.typicode.com
// v1
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => {
//     console.log(response)
//     return response.json()
// })
// .then(json => console.log(json))
// .catch(error => console.error(error))

// v2
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.error(error))

// const getData = (url) => 
// new Promise((reslove, reject) => 
//     fetch(url)
//         .then(response => response.json())
//         .then(json => reslove(json))
//         .catch(error => reject(error))
// )

// getData('https://jsonplaceholder.typicode.com/todos')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))


// ASYNC
// async function asyncFirstFunction() {
//     // Всегда возвращает Промис
// }

// const asyncSecondFunction = async () => {
//     // Всегда возвращает Промис
// }

// const asyncFn = async () => {
//     return 'Success!' // v.1
//     // throw new Error('My Error!') // v.2
// }

// asyncFn()
//     .then(value => console.log(value))
//     .catch(error => console.log(error.message))


// AWAIT
// const asyncFunc = async () => {
//     await Promise
// }
// asyncFunc()


// v.1
// const timerPromise = () =>
//     new Promise((reslove, reject) => 
//     setTimeout(() => reslove(), 2000))

// const asyncFn = async () => {
//     console.log('Timer Starts')
//     await timerPromise()
//     console.log('Timer Stop')
// }
// asyncFn()

// v.2
// const timerPromise = () =>
//     new Promise((reslove, reject) => 
//     setTimeout(() => reslove(), 2000))

// const asyncFn = async () => {
//     console.log('Timer Starts')
//     const startTime = performance.now()
//     await timerPromise()
//     const endTime = performance.now()
//     console.log('Timer end', endTime - startTime)
// }
// asyncFn()


// const getData = async (url) => {
//     const res = await fetch(url)
//     const json = await res.json()
//     return json
// }

// const url = 'https://jsonplaceholder.typicode.com/todos'

// try {
//     const data = await getData(url)
//     console.log(data)
// } catch (error) {
//     console.log(error.message)
// }


// Закончил
