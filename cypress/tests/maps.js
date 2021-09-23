/// <reference types="cypress" />
// import {
//     addSystem,
//     printPlanets,
//     radiusSum,
//     filterDistance,
//     deletePlanetByIndex,
//     sortByRadius,
//     sortByName
// } from "../utils/arrayMethods";

import {printMapPlanets} from "../utils/mapMethods";

describe('planetsMap', () => {
    before(() => {
        cy.fixture('planets').then(planets => {
            cy.wrap(planets).as('planetsList')
        })
    })

    it('planetsArray', () => {

        /*Задание 1
        Определим Map.
        Давайте вспомним, как мы хранили данные о планетах, когда работали с массивом (array).
        Давайте преобразуем этот массив данных в Map.
        В качестве ключа будем использовать имя планеты (key = "Mercury"), качестве значения - объект с характеристиками
        планеты (value = {radius: 2440, density: 5.43, distance: 0.395})
        Итого, объект на добавление в Map должен быть сформирован в виде
          ["Mercury", {radius: 2440, density: 5.43, distance: 0.395}]
        Его будет добавлять в изначально пустой Map() посредством метода set().*/

        cy.get('@planetsList').then((planetsList) => {
            cy.log('get map of planets')
            let arrayPlanets = []
            arrayPlanets.push(...planetsList['newPlanet']);
            console.log(arrayPlanets);

            let mapPlanet = new Map()

            arrayPlanets.forEach((planet) => {
                let a = Object.assign({}, planet)
                delete a ['name']
                mapPlanet.set(planet.name, a)
            })

            console.log(mapPlanet);

            /* Задание 2
            Напишем функцию для вывода значений из Map в формате:
            Mercury: radius: 2440, density: 5.43, distance: 0.395
            Для этого нужно немного изменить функцию вывода значений из массива.
            Поскольку у нас теперь есть пары ключ-значение, то в forEach имеет смысл перебирать именно их.*/

            cy.log('print map of planets')
            printMapPlanets(mapPlanet)

            /*Задание 3
            Реализуйте вывод данных из planetsMap о планете Saturn.
            Используйте метод get() для получения value for ключу Saturn.*/

            cy.log('print Saturn info form planetsMap')
            cy.log('Saturn', mapPlanet.get('Saturn'))
            console.log('Saturn info: ', mapPlanet.get('Saturn'))

            /*Задание 4
            Выведите общее количество элементов в коллекции*/
            cy.log('mapPlanet size:' + mapPlanet.size)

            /*Задание 5
            Создайте коллекцию множество Set(), содержащую значения “Mercury” и “Not Mercury”.
            Пройдите по значения множества и осуществите проверку, существует ли планета с данным ключом в Map().
            Чтобы проверить, что в Map существует элемент с заданным ключом, используется метод has().*/

            let setPlanets = new Set()

            setPlanets.add(mapPlanet.get('Mercury'))
            console.log(setPlanets)

        })
    })
})
;