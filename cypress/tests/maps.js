/// <reference types="cypress" />
import {
    addSystem,
    printPlanets,
    radiusSum,
    filterDistance,
    deletePlanetByIndex,
    sortByRadius,
    sortByName
} from "../utils/arrayMethods";

describe('planetsArray', () => {
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
        Итого, объекта на добавление в Map должен быть сформирован в виде
          ["Mercury", {radius: 2440, density: 5.43, distance: 0.395}]
        Его будет добавлять в изначально пустой Map() посредством метода set().*/
        cy.get('@planetsList').then((planetsList) => {
            cy.log('PrintPlanets')
            let planetsArray = []
            planetsArray.push(...planetsList['newPlanet'])

            printPlanets(planetsArray)
        })
    })
});