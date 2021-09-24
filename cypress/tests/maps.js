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
            cy.log('Task 1. Get map of planets from array')
            cy.log('\r')
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

            cy.log('Task 2. Print map of planets')
            printMapPlanets(mapPlanet)
            cy.log('\r')

            /*Задание 3
            Реализуйте вывод данных из planetsMap о планете Saturn.
            Используйте метод get() для получения value for ключу Saturn.*/

            cy.log('Task 3. Print Saturn info form planetsMap')
            cy.log('Saturn', mapPlanet.get('Saturn'))
            console.log('Saturn info: ', mapPlanet.get('Saturn'))
            cy.log('\r')

            /*Задание 4
            Выведите общее количество элементов в коллекции*/

            cy.log('Task 4. Print mapPlanet size: ' + mapPlanet.size)
            cy.log('\r')

            /*Задание 5
            Создайте коллекцию множество Set(), содержащую значения “Mercury” и “Not Mercury”.
            Пройдите по значениям множества и осуществите проверку, существует ли планета с данным ключом в Map().
            Чтобы проверить, что в Map существует элемент с заданным ключом, используется метод has().*/

            cy.log('Task 5. Check the map key "Mercury", "Not Mercury" from set.')
            let setPlanet = new Set(['Mercury', 'Not Mercury'])
            setPlanet.forEach((name) => {
                cy.log('The map of planets has "' + name + '" key: ' + mapPlanet.has(name));
            })
            cy.log('\r')

            /*Задание 6
            Удалите из planetsMap объект с ключом Uranus.*/

            cy.log('Task 6. Delete "Uranus" key from map.')
            mapPlanet.delete('Uranus')
            cy.log('The "Uranus" key is deleted. The mapPlanet size now is ' + mapPlanet.size)
            cy.log('\r')

            /*Задание 7
            Создайте новый объект Map() c информацией о планетах и
            выполните слияние двух Maps (используйте метод merge).*/

            cy.log('Task 7. Merge two maps.')

            let newMap = new Map()
            newMap.set('newPlanet', {radius: 23434, density: 3.45, distance: 6})
            let mergeMap = new Map([...mapPlanet, ...newMap])

            printMapPlanets(mergeMap);
            cy.log('\r')

            /*Задание 8
            Как упоминалось в теоретическом блоке, вы можете поместить данные об одной планете в объект Object:
            let planet = {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395}
            Пройдитесь по свойствам planet осуществите вывод данных в имя свойства и его значение.*/

            cy.log('Task 8. Print name and value of planet object.')

            let planet = {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395}

            for (let key in planet) {
                console.log(key + ': ', planet[key]);
                cy.log(key + ': ', planet[key]);
            }
        })
    })
})
;