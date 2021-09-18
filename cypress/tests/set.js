/// <reference types="cypress" />
import Chance from 'chance'

describe('currencySet', () => {
    beforeEach(() => {
    })

    it('currencySet', () => {
        let currencySet = new Set();
        currencySet.add('USD').add('EUR').add('BYN').add('RUR')
        console.log(currencySet)

        currencySet.forEach((currency) => {
            console.log(currency)

            /* Задание 2
            Пройтись по созданной коллекции и вывести все валюты из списка
            Например, вы можете использовать для этого синтаксис forEach*/

            currencySet.forEach((currency) => {
                console.log(currency)
            })

            /*Задание 3
            Добавить к currencySet несколько новых значений (ищите метод для этого в спецификации - метод add).
            Попробуйте добавить значение, которое в наборе уже существует и новое, не существующее в наборе. Повторите вывод элементов -
            убедитесь что вставка происходит только для новых значений (set может содержать только уникальные значения, соответственно,
            добавление уже существующих не приводит к увеличению количества данных в наборе). Попробуйте добавить несколько значений
            в одну команду add - смотрите в примерах по ссылке как это сделать*/

            currencySet.add('USD')
            currencySet.add('BLR')

            console.log(currencySet)
            console.log('Currency set size: ' + currencySet.size)

            /* Задание 4
            Воспользуйтесь методом has для проверки вхождения элемента в наборе.Например для существующего
            значения USD: cy.log(“Set has USD value: ”+currencyValue.has(‘USD’))
            В ответ получите значение true. Удалите значение USD из currencySet.Повторите проверку на вхождение -
            должно получиться false. */

            console.log('Set has USD value: ' + currencySet.has('USD'))
            currencySet.delete('USD')
            console.log('Currency set size: ' + currencySet.size)
            console.log('Set has USD value: ' + currencySet.has('USD'))

            /*Задание 5
             Осуществите вывод случайного значения из currencySet, нескольких случайных значений из currencySet.
             Для получения случайного значения воспользуйтесь методом pickone*
             Как вы можете видеть по спецификации, метод pickone принимает на вход array, а не set. Следовательно,
             чтобы им воспользоваться, необходимо преобразовать currencySet в массив. Как это следать, описано
             в спецификации для Set.
             Помимо pickone вы также можете использовать метод pickset, если вам нужен не один элемент, а несколько.
             https://chancejs.com/helpers/pickset.html
             Воспользуйтесь этим методом, выберите больше, чем один случайный элемент из набора, выведите получившиеся
             значения в консоль. Вы наверняка используете в данном случае значение (2 или 3) - какое-то конкретное.
             Замените это значение на случайное в интервале [1, <значение, соответствующее длине набора>].
             https://chancejs.com/basics/integer.html
             Для генерации случайного quantity воспользуйтесь методом библиотеки chance под названием integer.
             chance.integer({ min: -20, max: 20 })
             Параметр min в данном случае понятное дело 1
             А вот максимальный - надо определить. Логично, что максимальным значением будет количество значений
             во множестве. Как определить это значение - описано в спецификации.*/

            let currencyArray = [...currencySet]
            console.log(currencyArray)
            console.log(chance.pickone(currencyArray))
            // usage
            let quantity = chance.integer({min: 1, max: currencyArray.length - 1})
            console.log(chance.pickset(currencyArray, quantity));
        })
    })
})
